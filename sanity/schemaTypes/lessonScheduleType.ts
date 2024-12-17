import { defineType, defineField } from "sanity"

export const lessonScheduleType = defineType({
    name: 'lessonSchedule',
    title: 'Lesson Schedule',
    type: 'document',
    fields: [
        defineField({
            name: 'lesson',
            title: 'Lesson',
            type: 'reference',
            to: [{type: 'lesson'}],
        }),
        defineField({
            name: 'topic',
            title: 'Topic',
            type: 'string',
        }),
        defineField({
            name: 'date',
            title: 'Date',
            type: 'string',
        }),
        defineField({
            name: 'dayName',
            title: 'Day Name',
            type: 'string',
        }),
        defineField({
            name: 'startTime',
            title: 'Start Time',
            type: 'string',
        }),
        defineField({
            name: 'endTime',
            title: 'End Time',
            type: 'string',
        }),
    
        defineField({
            name: 'capacity',
            title: 'Capacity',
            type: 'number',
        }),
        defineField({
            name: 'active',
            title: 'Active',
            type: 'boolean',
            initialValue: true,
        }),
        defineField({
            name: 'hostedOnShulea',
            title: 'Hosted On Shulea',
            type: 'boolean',
        }),
        defineField({
            name: 'lessonLink',
            title: 'Lesson Link',
            type: 'string',
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'number',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'agoraToken',
            title: 'Agora Token',
            type: 'string',
        }),
    ],
})