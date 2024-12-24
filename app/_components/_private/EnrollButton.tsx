"use client";
import { client } from "@/sanity/lib/client";
import { lessonEnrollmentQuery } from "@/sanity/lib/queries";
import { useUser } from "@clerk/nextjs";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { PaystackButton } from "react-paystack";
import { GalleryThumbnails } from "lucide-react";

interface Lesson {
  _id: string;
  owner: any;
  chargePerLesson: boolean;
  price: number;
}

function EnrollButton({ lesson }: { lesson: Lesson }) {
  const [loading, setLoading] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (!user) {
      const currentPath = window.location.pathname;
      router.push(`/sign-in?redirect_url=${encodeURIComponent(currentPath)}`);
    } else {
      checkUserIsEnrolled();
    }
  }, [user]);

  const isLessonOwner = user?.id === lesson.owner.clerkId;

  const checkUserIsEnrolled = async () => {
    const enrolled = await client.fetch(
      lessonEnrollmentQuery(lesson._id, user?.id!)
    );
    if (enrolled.length > 0) {
      setIsEnrolled(true);
    }
  };

  const handlePaymentSuccess = async (reference: any) => {
    try {
      const sanityUser = await client.fetch(
        `*[_type == "user" && clerkId == "${user?.id}"][0]`
      );
      const sanityLessonOwner = await client.fetch(
        `*[_type == "user" && clerkId == "${lesson.owner.clerkId}"][0]`
      );

      if (!sanityUser) {
        toast.error("User profile not found");
        setLoading(false);
        return;
      }

      if (!sanityLessonOwner) {
        toast.error("User lesson owner not found");
        setLoading(false);
        return;
      }

      await client.create({
        _type: "lessonEnrollment",
        lesson: {
          _type: "reference",
          _ref: lesson._id,
        },
        learner: {
          _type: "reference",
          _ref: sanityUser._id,
        },
        hasAccessToAllSchedules: true,
      });

      await client.create({
        _type: "payment",
        lessonOwner: {
          _type: "reference",
          _ref: sanityLessonOwner._id,
        },
        paymentDate: new Date(),
        paymentMethod: "Paystack",
        amount: lesson.price,
        lesson: {
          _type: "reference",
          _ref: lesson._id,
        },
        transitionId: reference.transaction,
        trxref: reference.trxref,
        paymentStatus: "success",
      });

      const wallets = await client.fetch(
        `*[_type == "wallet" && user._ref == "${sanityLessonOwner._id}"][0]`
      );

      if (!wallets) {
        await client.create({
          _type: "wallet",
          user: {
            _type: "reference",
            _ref: sanityLessonOwner._id,
          },
          balance: lesson.price,
        });
      } else {
        await client
          .patch(wallets._id)
          .set({ balance: wallets.balance + lesson.price })
          .commit();
      }

      setLoading(false);
      setIsEnrolled(true);
      toast.success("You are enrolled in the lesson");
    } catch (error) {
      setLoading(false);
      console.error(error);
      toast.error("Enrollment failed. Please try again.");
    }
  };

  const handlePaymentClose = () => {
    setLoading(false);
    toast.error("Payment was not completed");
  };
  const userEmail = user?.emailAddresses[0]?.emailAddress;
  const paystackConfig = {
    reference: new Date().getTime().toString(),
    email: userEmail!,
    amount: lesson.chargePerLesson ? lesson.price * 100 : 200, // Amount in kobo
    publicKey:
      process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY ||
      "pk_test_9c22a81bfb0ca613599a9bc497bcc59ed2cd38e5",
    currency: "KES",
    onSuccess: handlePaymentSuccess,
    onClose: handlePaymentClose,
    onload: () => {
      setLoading(true);
    },
  };

  return !isEnrolled ? (
    <div>
      <PaystackButton
        {...paystackConfig}
        text="Enroll Now"
        className={`disabled:cursor-not-allowed w-full py-3 px-6 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors mb-4 ${
          isLessonOwner ? "disabled" : ""
        }`}
        disabled={isLessonOwner || loading}
      />
      {isLessonOwner && (
        <p className="text-red-500 text-sm text-center">
          You cannot enroll in your own lesson
        </p>
      )}
    </div>
  ) : (
    <div className="mb-4">
      <p className="text-green-700 text-md text-center">
        You are enrolled to this lesson
      </p>
    </div>
  );
}

export default EnrollButton;
