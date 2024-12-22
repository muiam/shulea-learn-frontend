import { Calendar, Clock, Users } from "lucide-react";

interface ScheduleTabProps {
  lesson: any; // Replace with proper type
}

export default function ScheduleTab() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-primary/50 hover:bg-gray-50 transition-colors">
        <div className="flex-grow space-y-3">
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              2/2/2022
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              8:00 AM - 11:00 AM
            </span>
            <span className="flex items-center gap-2">
              <Users className="w-4 h-4" />5 seats left
            </span>
          </div>
          <h3 className="font-medium text-gray-900">
            Introduction to computing
          </h3>
        </div>
        <button className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors">
          Enroll
        </button>
      </div>
    </div>
  );
}
