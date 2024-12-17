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
      name: "enrollmentDate",
      title: "Enrollment Date",
      type: "date",
    }),
  ],
});
