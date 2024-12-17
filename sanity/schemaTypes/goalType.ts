import { defineType ,defineField } from "sanity";

export const goalType = defineType({
    name: "goals",
    title: "Goals",
    type: "document",
    fields: [
        defineField({
            name: "goal",
            title: "Goal",
            type: "string", 
        }),
        defineField({
            name: "lesson",
            title: "Lesson",
            type: "reference",
            to: [{type: "lesson"}]
        })
    ]
})