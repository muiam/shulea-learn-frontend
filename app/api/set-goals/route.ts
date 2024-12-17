import { client, writeClient } from "@/sanity/lib/client";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { goal, lessonId } = await request.json();
    const user = await currentUser();
    if (!user) {
        return NextResponse.json({message: "You must be logged in to set a goal"});
    }
    //save the goal  to sanity
    //get the lesson associated with the id
    const lesson = await client.fetch(`*[_type == 'lesson' && _id == '${lessonId}']`);  
    const goals = await writeClient.create({
        _type: "goals",
        goal: goal,
        lesson: {
            _type: "reference",
            _ref: lesson[0]._id
        }
    });
    console.log(goal);
    if (!goals) {
        return NextResponse.json({message: "Failed to set goal", status: 500});
    }
    return NextResponse.json({message: "Goal set successfully", status: 200});
}