import { NextRequest, NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";
import { lessonDetailsQuery } from "@/sanity/lib/queries";

export async function GET(request: NextRequest, context: { params: { lessonId: string } }) {
  const { lessonId } = context.params; // Destructure `lessonId` from `params`

  console.log(`Endpoint triggered, and lessonId is ${lessonId}`);

  try {
    const details = await client.fetch(lessonDetailsQuery(lessonId));
    if (details.length === 0) {
      return NextResponse.json({ error: "No details found" }, { status: 404 });
    }

    return NextResponse.json(details[0], { status: 200 });
  } catch (error: unknown) {
    console.error("Error fetching goals:", error);
    if (error instanceof Error) {
      return NextResponse.json({ error: "Internal Server Error", details: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
