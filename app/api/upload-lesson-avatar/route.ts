import { client, writeClient } from "@/sanity/lib/client";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { lessonID, imageUrl } = await request.json();
        // console.log("The lessonID is: ", lessonID, "The imageUrl is: ", imageUrl);
        const user = await currentUser();

        // Query the lesson with the lessonID and owner is the userID
        const lessons = await client.fetch(`*[_type == 'lesson' && _id == '${lessonID}' && owner->clerkId == '${user?.id}']`);

        if (!lessons || lessons.length === 0) {
            return NextResponse.json({ status: 404, message: "Lesson not found" });
        }

        // Get the lesson object from the array
        const lesson = lessons[0]; // assuming there is only one lesson

        // Update the lesson with the imageUrl
        const updatedLesson = await writeClient
            .patch(lesson._id)
            .set({ imageUrl: imageUrl })
            .commit();

       // console.log("The updated lesson is: ", updatedLesson, "The imageUrl is: ", imageUrl);

        if (!updatedLesson) {
            return NextResponse.json({ status: 500, message: "Failed to update lesson" });
        }

        return NextResponse.json({ status: 200, message: "Avatar uploaded successfully" });
    } catch (error) {
        // console.error('Error updating lesson:', error);  // Log the error for better debugging
        return NextResponse.json({ status: 500, message: "Internal server error" });
    }
}
