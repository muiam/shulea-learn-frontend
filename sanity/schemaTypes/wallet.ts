import { defineType, validation } from "sanity";

export const walletType = defineType({
    name: "wallet",
    title: "Wallet",
    type: "document",
    fields: [
        {
            name: "user",
            title: "User",
            type: "reference",
            to: [{ type: "user" }],
            validation(Rule) {
                return Rule.required();
            },
        },
        {
            name: "balance",
            title: "Balance",
            type: "number",
            validation(Rule) {
                return Rule.required();
            },
        },
    ],
})