import { NextResponse } from "next/server";
import { client, writeClient } from "@/sanity/lib/client";
import { currentUser } from "@clerk/nextjs/server";
// The API handler function
export async function POST(request: Request) {
    try {
        const user = await currentUser()
        // get the userclerid from sanity
        const clerkUser = await client.fetch(`*[_type == 'user' && clerkId == '${user?.id}']`);
        
        // Check if user exists and array is not empty
        if(!clerkUser || clerkUser.length === 0) {
            return NextResponse.json({ status: 404, message: "User not found" });
        }

        const { title, description, subject, chargePerLesson, price ,minimumNeeded} = await request.json();
        
        // Get the first user from the array
        const userDoc = clerkUser[0];
        
        // convert the title to a slug
        const slug = title.toLowerCase().replace(/\s+/g, '-').slice(0, 200);
        
        await writeClient.create({
            _type: 'lesson',
            // Fix the owner reference
            owner: {
                _type: 'reference',
                _ref: userDoc._id
            },
            title,
            description,
            subject,
            minimumNeeded,
            chargePerLesson,
            price,
            slug: {
                _type: 'slug',
                current: slug
            }
        })
        
        return NextResponse.json({ status: 200, message: "Lesson created successfully" });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({
            message: 'An error occurred while creating the lesson.',
            success: false,
        }, { status: 500 });
    }
}
