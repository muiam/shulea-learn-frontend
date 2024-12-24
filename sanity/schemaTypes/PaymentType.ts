import { defineType } from "sanity";
import { defineField } from "sanity";
export const paymentType = defineType({
    name: 'payment',
    title: 'Payment',
    type: 'document',
    fields: [
        defineField({
            name: 'amount',
            title: 'Amount',
            type: 'number',
        }),
        defineField({
            name: 'paymentDate',
            title: 'Payment Date',
            type: 'date',
        }),
        defineField({
            name: 'paymentMethod',
            title: 'Payment Method',
            type: 'string',
        }),
        defineField({
            name: 'lessonOwner',
            title: 'Lesson Owner',
            type: 'reference',
            to: [{ type: 'user' }],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'transactionId',
            title: 'Transaction Id',
            type: 'string',
        }),
        
        defineField({
            name: 'trxref',
            title: 'trxref',
            type: 'string',
        }),

        defineField({
            name: 'paymentStatus',
            title: 'Payment Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Pending', value: 'pending' },
                    { title: 'Success', value: 'success' },
                    { title: 'Failed', value: 'failed' },
                ],
            },
        }),
    ],
});