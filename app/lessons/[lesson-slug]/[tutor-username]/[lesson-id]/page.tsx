"use client";
import Header from "@/app/_components/_public/Header";
import {
  ArrowBigRightIcon,
  Book,
  Calendar,
  Computer,
  DollarSign,
  Dot,
  LetterText,
  LockOpen,
  Users,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { Checkbox, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import { DecodedToken } from "@/utils/Auth";

function lessonDetailsPage() {
  const router = useRouter();

  const handlePayClick = () => {
    const token = localStorage.getItem("token");
    const currentUrl = `${window.location.pathname}${window.location.search}`;

    if (!token) {
      localStorage.setItem("redirectUrl", currentUrl); // Store the intended redirect URL
      // No token, redirect to login
      router.push(`/login?redirect_to_url=${encodeURIComponent(currentUrl)}`);
      return;
    }

    try {
      const decoded = jwtDecode<DecodedToken>(token); // Decode the token to check expiration
      const exp = decoded.exp;
      if (exp * 1000 <= Date.now()) {
        localStorage.setItem("redirectUrl", currentUrl); // Store the intended redirect URL
        // Token expired, redirect to login
        router.push(`/login?redirect_to_url=${encodeURIComponent(currentUrl)}`);
        return;
      }

      // Proceed with payment logic since the user is authenticated
      // Add your payment logic here
    } catch (e) {
      console.error("Authentication error occurred", e);
      // Handle any errors if needed
    }
  };

  const handleEnrollClick = () => {
    const token = localStorage.getItem("token");
    const currentUrl = `${window.location.pathname}${window.location.search}`;

    if (!token) {
      localStorage.setItem("redirectUrl", currentUrl); // Store the intended redirect URL
      // No token, redirect to login
      router.push(`/login?redirect_to_url=${encodeURIComponent(currentUrl)}`);
      return;
    }

    try {
      const decoded = jwtDecode<DecodedToken>(token); // Decode the token to check expiration
      const exp = decoded.exp;
      if (exp * 1000 <= Date.now()) {
        localStorage.setItem("redirectUrl", currentUrl); // Store the intended redirect URL
        // Token expired, redirect to login
        router.push(`/login?redirect_to_url=${encodeURIComponent(currentUrl)}`);
        return;
      }

      // Proceed with payment logic since the user is authenticated
      // Add your payment logic here
    } catch (e) {
      console.error("Authentication error occurred", e);
      // Handle any errors if needed
    }
  };
  return (
    <div>
      <Header />
      <div className="flex flex-col md:flex-row px-10 gap-3">
        <div className="flex flex-col gap-3">
          <h2 className="text-slate-500 uppercase p-3 underline">
            class two multiplication bootcamp with assignments for practical
          </h2>
          <div className="flex flex-col md:flex-row  p-3 h-[400px] md:h-[300px] gap-3">
            <Image
              className="rounded-xl border-1 border-primary"
              src="/numbers.jpg"
              alt="lesson image"
              width={400}
              height={400}
            />

            <div className="flex flex-col sm:flex-row ">
              <div className="h-[200px] md:h-[200px] mb-10 grid grid-cols-2 gap-3 justify-center items-center">
                <span className="text-slate-500 flex">
                  <Book />
                  Mathematics
                </span>
                <span className="text-slate-500 flex">
                  <LockOpen />
                  22 open seats
                </span>
                <span className="text-slate-500 flex gap-1">
                  <Users />
                  203 enrolled
                </span>
                <span className="text-slate-500 flex gap-1">
                  <Dot color="green" />
                  via shulea
                </span>
                <span className="text-slate-500 flex gap-1">
                  <DollarSign />
                  KES 2,000
                </span>
                <span className="text-slate-500 flex gap-1">
                  <DollarSign />
                  KES 2,000
                </span>
              </div>
            </div>
          </div>
          <div>
            <Tabs defaultValue="schedule" className="p-3">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="Description" className="text-slate-500">
                  Description
                </TabsTrigger>
                <TabsTrigger value="schedule" className="text-slate-500">
                  Schedules
                </TabsTrigger>
                <TabsTrigger value="Reviews" className="text-slate-500">
                  Reviews (34)
                </TabsTrigger>
              </TabsList>
              <TabsContent value="schedule" className="p-3">
                <div className="flex flex-col gap-5">
                  <div className="flex gap-5">
                    <div className="flex flex-col gap-3">
                      <div className="flex gap-5">
                        <h2 className="text-slate-500 flex gap-1">
                          <Calendar />
                          Thursday on 7/11/2023 (8:00 am - 10:00 am)
                        </h2>

                        <h2 className="text-slate-500 flex gap-1">
                          <Computer /> 20/22 seats available
                        </h2>
                      </div>
                      <h2 className="text-slate-500 flex gap-1">
                        <LetterText /> introduction to Multiplication
                      </h2>
                    </div>

                    <Button onClick={handleEnrollClick} className="bg-primary">
                      Enroll
                    </Button>
                  </div>
                  <div className="flex gap-5">
                    <div className="flex flex-col gap-3">
                      <div className="flex gap-5">
                        <h2 className="text-slate-500 flex gap-1">
                          <Calendar />
                          Thursday on 7/11/2023 (8:00 am - 10:00 am)
                        </h2>

                        <h2 className="text-slate-500 flex gap-1">
                          <Computer /> 20/22 seats available
                        </h2>
                      </div>
                      <h2 className="text-slate-500 flex gap-1">
                        <LetterText /> introduction to Multiplication
                      </h2>
                    </div>

                    <Button className="bg-primary">Enroll</Button>
                  </div>
                  <div className="flex gap-5">
                    <div className="flex flex-col gap-3">
                      <div className="flex gap-5">
                        <h2 className="text-slate-500 flex gap-1">
                          <Calendar />
                          Thursday on 7/11/2023 (8:00 am - 10:00 am)
                        </h2>

                        <h2 className="text-slate-500 flex gap-1">
                          <Computer /> 20/22 seats available
                        </h2>
                      </div>
                      <h2 className="text-slate-500 flex gap-1">
                        <LetterText /> introduction to Multiplication
                      </h2>
                    </div>

                    <Button className="bg-primary">Enroll</Button>
                  </div>
                  <div className="flex gap-5">
                    <div className="flex flex-col gap-3">
                      <div className="flex gap-5">
                        <h2 className="text-slate-500 flex gap-1">
                          <Calendar />
                          Thursday on 7/11/2023 (8:00 am - 10:00 am)
                        </h2>

                        <h2 className="text-slate-500 flex gap-1">
                          <Computer /> 20/22 seats available
                        </h2>
                      </div>
                      <h2 className="text-slate-500 flex gap-1">
                        <LetterText /> introduction to Multiplication
                      </h2>
                    </div>

                    <Button className="bg-primary">Enroll</Button>
                  </div>
                  <div className="flex gap-5">
                    <div className="flex flex-col gap-3">
                      <div className="flex gap-5">
                        <h2 className="text-slate-500 flex gap-1">
                          <Calendar />
                          Thursday on 7/11/2023 (8:00 am - 10:00 am)
                        </h2>

                        <h2 className="text-slate-500 flex gap-1">
                          <Computer /> 20/22 seats available
                        </h2>
                      </div>
                      <h2 className="text-slate-500 flex gap-1">
                        <LetterText /> introduction to Multiplication
                      </h2>
                    </div>

                    <Button className="bg-primary">Enroll</Button>
                  </div>
                  <div className="flex gap-5">
                    <div className="flex flex-col gap-3">
                      <div className="flex gap-5">
                        <h2 className="text-slate-500 flex gap-1">
                          <Calendar />
                          Thursday on 7/11/2023 (8:00 am - 10:00 am)
                        </h2>

                        <h2 className="text-slate-500 flex gap-1">
                          <Computer /> 20/22 seats available
                        </h2>
                      </div>
                      <h2 className="text-slate-500 flex gap-1">
                        <LetterText /> introduction to Multiplication
                      </h2>
                    </div>

                    <Button className="bg-primary">Enroll</Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="Description"
                className="max-w-[600px] overflow-x-auto p-3"
              >
                <p className="w-full text-wrap text-slate-500 break-words">
                  Imagine how the world is evolving and the gap created in
                  outsourcing quality training in both soft skills and formal
                  training in well a moderated/safe Environment? Well , does the
                  world remain stagnant ? , probably no… With the global
                  appreciation of technology , we can solve the skills
                  outsourcing challenge quickly and let both learners looking
                  for skills and the tutors offering the skills work together in
                  both private and a data managed environment . I once got
                  wondering why a forex trainer for example would send me a
                  google form to register and pay via mpesa and send him a
                  screenshot then add me to a whatsapp group where she could
                  share google meet links and docs etc … This was a privacy
                  concern. What if a certain VIP or a family member of a VIP
                  wanted such a training ? or what if the trainer attracts 100+
                  students? It could be difficult to have contacts of all
                  learners and also it wouldn’t be ensuring privacy and
                  therefore that is why the tutors/trainers need a managed
                  environment to enroll and run training easily Also, we solve
                  the challenge formal students face when revising at home or
                  even when doing their assignments/home works.. Even in campus,
                  some people like me could find it difficult to complete
                  assignment on time and I could pay someone some coins to do it
                  for me as I figure out other unnecessary stuff… This platform
                  comes to help learners post questions and receive quality
                  responses from tutors/professors globally Shulea learn
                  Architect 1. Authentication two user i.e Teacher/tutor and a
                  student We use simple registration and authentication system
                  for both (Token based authentication prefered) . By default,
                  every teacher is always inactive 2. Define teacher and student
                  profiles Teacher must complete KYC and proof of
                  learning/knowledge vetted before he can be active on the
                  platform . His areas of expertise must be in line with our
                  core subjects defined on the platform 3. Define core subjects
                  being offered under shulea learn We would focus on STEM but
                  priority is given to what is taught in both CBC and tertiary
                  levels 4. Student posting and questioning techniques. Frontend
                  developers need to make sure this technique is the most basic
                  and universally allows for complex structures like
                  mathematics, physics and chemistry We don’t need to allow
                  posting of pictures if necessary. It should be noted that the
                  questioning technique will still be the answering technique.
                  Student should post the question and applicable amount is
                  determined by the by tutors bidding at the moment we monitor
                  a question posted via sms/email so there will be no delays 5.
                  We have two answering techniques i.e through the teacher
                  typing responses and attaching reference docs or via live
                  sessions or both – Live sessions shall be applicable if the
                  learner had indicated when posting the question coz it
                  determines applicable amounts … Our software shall have an
                  inbuilt streaming feature 6. Teacher/Tutor Reviews students
                  shall be able to review and rate tutors coz this is a market
                  place where work quality matters most. Remember teachers will
                  high rating can easily have their bids accepted by students
                  posting questions 7. Teacher/tutor can create private
                  recurring lessons since we appreciate the tutoring/training
                  gig economy. They lessons can see learners enroll, pay, get
                  lesson resources and stream via our platform. This saves the
                  need for tutors registering learners separately and offer
                  training separately 8. Transfer of money and general finance
                  account management. Funds for teachers who answer questions,
                  create courses and also learners are kept on one wallet 9.
                  Dashboards 10. Test MVP with real inputs/users Our Earning
                  plan We shall charge 15% of amount the teacher receives from
                  answering questions We shall charge 15% of total amount lesson
                  creators receive from enrolling students/learners
                </p>
              </TabsContent>
              <TabsContent value="Reviews" className="p-3">
                <div className="flex flex-col gap-6 max-w-[600px]">
                  {/* Sample Reviews Section */}
                  <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-semibold text-slate-700">
                      What Our Users Say
                    </h3>

                    {/* Sample Review 1 */}
                    <div className="flex gap-4 p-4 border border-slate-300 rounded-lg shadow-sm">
                      <div className="flex-shrink-0">
                        <img
                          src="https://via.placeholder.com/40"
                          alt="Reviewer"
                          className="rounded-full w-10 h-10 object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h4 className="font-semibold text-slate-800">
                          John Doe
                        </h4>
                        <div className="flex items-center gap-1 text-yellow-500">
                          {/* Stars (You can replace with an icon or another rating system) */}
                          <span>⭐⭐⭐⭐⭐</span>
                        </div>
                        <p className="text-slate-600 mt-2">
                          "This platform has been a game changer for my
                          learning. The tutors are amazing, and the flexibility
                          of lessons is perfect for my schedule."
                        </p>
                      </div>
                    </div>

                    {/* Sample Review 2 */}
                    <div className="flex gap-4 p-4 border border-slate-300 rounded-lg shadow-sm">
                      <div className="flex-shrink-0">
                        <img
                          src="https://via.placeholder.com/40"
                          alt="Reviewer"
                          className="rounded-full w-10 h-10 object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h4 className="font-semibold text-slate-800">
                          Jane Smith
                        </h4>
                        <div className="flex items-center gap-1 text-yellow-500">
                          {/* Stars */}
                          <span>⭐⭐⭐⭐</span>
                        </div>
                        <p className="text-slate-600 mt-2">
                          "Great platform, but I wish there were more variety in
                          the courses offered. Still, it's been a fantastic
                          experience overall!"
                        </p>
                      </div>
                    </div>

                    {/* Sample Review 3 */}
                    <div className="flex gap-4 p-4 border border-slate-300 rounded-lg shadow-sm">
                      <div className="flex-shrink-0">
                        <img
                          src="https://via.placeholder.com/40"
                          alt="Reviewer"
                          className="rounded-full w-10 h-10 object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h4 className="font-semibold text-slate-800">
                          Mark Johnson
                        </h4>
                        <div className="flex items-center gap-1 text-yellow-500">
                          {/* Stars */}
                          <span>⭐⭐⭐⭐⭐</span>
                        </div>
                        <p className="text-slate-600 mt-2">
                          "I love the easy-to-use interface and how quickly I
                          was able to connect with tutors. Highly recommended!"
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Add Your Review Section */}
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-slate-700 mb-4">
                      Write Your Review
                    </h3>
                    <div className="flex flex-col gap-4">
                      <textarea
                        className="p-3 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary w-full h-32 resize-none"
                        placeholder="Write your review here..."
                      ></textarea>

                      <div className="flex gap-4 items-center">
                        {/* Rating Section */}
                        <div className="flex items-center gap-2">
                          <label className="text-slate-700">Rating:</label>
                          <div className="flex items-center">
                            {/* Stars */}
                            <span className="cursor-pointer">⭐</span>
                            <span className="cursor-pointer">⭐</span>
                            <span className="cursor-pointer">⭐</span>
                            <span className="cursor-pointer">⭐</span>
                            <span className="cursor-pointer">⭐</span>
                          </div>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <button className="mt-4 bg-primary text-white py-2 px-6 rounded-lg shadow-md hover:bg-primary-dark transition">
                        Submit Review
                      </button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        <div className="flex-1 h-screen p-2 md:p-5">
          <div className="flex flex-col">
            <div className="flex gap-3">
              <div className="flex flex-col gap-3">
                <Image
                  src={"/user.jpeg"}
                  alt="tutor course owner"
                  width={70}
                  height={70}
                  className="rounded-full"
                />
                <span className="text-primary">@Peterson</span>
              </div>
              <p className="flex-1 text-slate-500">
                I am a mathematics tutor with 8 years of teaching experience in
                both private and public institutions. I do well to make sure my
                learners understand what I am teaching and that my classes are
                very interesting and yet again skillful ...
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <Label className="text-slate-500">Amount</Label>
              <Input type="number" value={"2000"} readOnly placeholder="2000" />
              <div className="flex gap-5">
                <Label className="text-md text-slate-500">
                  Use my wallet funds
                </Label>
                <Checkbox />
              </div>
              <Button
                onClick={handlePayClick}
                className="bg-primary"
                size={"lg"}
              >
                Pay
              </Button>
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="text-slate-500 mt-3 uppercase underline">
                Other similar lessons
              </h2>
              <div className="flex gap-5">
                <div className="flex gap-5">
                  <h2 className="text-slate-500 flex gap-1">
                    Calculus revision Bootcamp with Prof Handson Miller
                  </h2>
                </div>
                <Button className="bg-primary">
                  <ArrowBigRightIcon />
                  Details
                </Button>
              </div>
              <div className="flex gap-5">
                <div className="flex gap-5">
                  <h2 className="text-slate-500 flex gap-1">
                    Calculus revision Bootcamp with Prof Handson Miller
                  </h2>
                </div>
                <Button className="bg-primary">
                  <ArrowBigRightIcon />
                  Details
                </Button>
              </div>
              <div className="flex gap-5">
                <div className="flex gap-5">
                  <h2 className="text-slate-500 flex gap-1">
                    Calculus revision Bootcamp with Prof Handson Miller
                  </h2>
                </div>
                <Button className="bg-primary">
                  <ArrowBigRightIcon />
                  Details
                </Button>
              </div>
              <div className="flex gap-5">
                <div className="flex gap-5">
                  <h2 className="text-slate-500 flex gap-1">
                    Calculus revision Bootcamp with Prof Handson Miller
                  </h2>
                </div>
                <Button className="bg-primary">
                  <ArrowBigRightIcon />
                  Details
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default lessonDetailsPage;
