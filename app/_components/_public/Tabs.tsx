"use client";
import React, { useState } from "react";
import OverviewTab from "./OverviewTab";
import ReviewsTab from "./ReviewsTab";
import ScheduleTab from "./ScheduleTab";

function SingleLessonTabs({ lessonId }: { lessonId: string }) {
  const [activeTab, setActiveTab] = useState("Overview");
  return (
    <div>
      <div className="mt-8 border-b">
        <nav className="flex gap-6">
          {["Overview", "Schedules", "Reviews"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-2 text-sm font-medium border-b-2 ${
                tab === activeTab
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}>
              {tab}
            </button>
          ))}
        </nav>
      </div>
      {/* Tab Content */}
      <div className="py-6">
        {activeTab === "Overview" && <OverviewTab lessonId={lessonId} />}
        {activeTab === "Schedules" && <ScheduleTab lessonId={lessonId} />}
        {activeTab === "Reviews" && <ReviewsTab />}
      </div>
    </div>
  );
}

export default SingleLessonTabs;
