import { defineType ,defineField } from "sanity";

export const lessonType = defineType({
    name: 'lesson',
    title: 'Lesson',
    type: 'document',
    fields: [
        defineField({
            name: 'owner',
            title: 'Owner',
            type: 'reference',
            to: [{ type: 'user' }],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'subject',
            title: 'Subject',
            type: 'string',
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
            },
        }),
        defineField({
            name: 'chargePerLesson',
            title: 'Charge Per Lesson',
            type: 'boolean',
            initialValue: false,
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'number',
            initialValue: 0,
        }),
        defineField({
            name: 'imageUrl',
            title: 'Image URL',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'minimumNeeded',
            title: 'Mimimum Needed',
            type: 'number',
            //set default value to 3
            initialValue: 1,
        }),
        

    ],
})