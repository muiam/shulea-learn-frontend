import { UserIcon } from "lucide-react";
import { defineField } from "sanity";

import { defineType } from "sanity";

export const userType = defineType({
    name: 'user',
    title: 'User',
    type: 'document',
    icon: UserIcon,

    fields: [
        defineField({
            name: 'clerkId',
            title: 'Clerk ID',
            type: 'string',
            validation: (Rule) => Rule.required(),
        
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
        }),
        defineField({
            name: 'username',
            title: 'Username',
            type: 'string',
        }),

        defineField({
            name: 'imageUrl',
            title: 'Image URL',
            type: 'string',
        }),
        defineField({
            name: 'firstName',
            title: 'First Name',
            type: 'string',
        }),
        defineField({
            name: 'lastName',
            title: 'Last Name',
            type: 'string',
        }),
        defineField({
            name: 'gender',
            title: 'Gender',
            type: 'string',
        }),
    ],
})


