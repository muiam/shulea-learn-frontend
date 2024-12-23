import { defineType, defineField } from "sanity";

export const lessonEnrollmentType = defineType({
  name: "lessonEnrollment",
  title: "Lesson Enrollment",
  type: "document",

  fields: [
    defineField({
      name: "lesson",
      title: "Lesson",
      type: "reference",
      to: [{ type: "lesson" }],
    }),
    defineField({
      name: "learner",
      title: "Learner",
      type: "reference",
      to: [{ type: "user" }],
    }),
    defineField({
      name: "hasAccessToAllSchedules",
      title: "Has Access To All Schedules",
      type: "boolean",
      initialValue: false,
    }),
    
    defineField({
      name: "scheduleEnrolled",
      title: "Schedule Enrolled",
      type: "reference",
      to: [{ type: "lessonSchedule" }],
    }),

    defineField({
      name: "enrollmentDate",
      title: "Enrollment Date",
      type: "date",
    }),
  ],
});
