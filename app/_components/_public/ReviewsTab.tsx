import { Star } from "lucide-react";
import Image from "next/image";

interface ReviewsTabProps {
  lesson: any; // Replace with proper type
}

export default function ReviewsTab() {
  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-6">
        <div className="flex items-start gap-4">
          <Image
            src={"/user.jpeg"}
            alt="harry"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="flex-grow">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">harry</h3>
              <span className="text-sm text-gray-500">2/2/2022</span>
            </div>
            <div className="flex items-center gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4"
                  fill={i < 5 ? "currentColor" : "none"}
                  color={i < 5 ? "#FFB800" : "#D1D5DB"}
                />
              ))}
            </div>
            <p className="mt-2 text-gray-600">
              it was a good lesson with this tutor
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
