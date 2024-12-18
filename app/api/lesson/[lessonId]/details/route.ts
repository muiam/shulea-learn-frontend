import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";
import { lessonDetailsQuery } from "@/sanity/lib/queries";

// This is the GET handler for the dynamic route [lessonId] in the app directory
export async function GET(req: Request, context: any){
  const { params } = context;
  const { lessonId } = params.lessonId;

  if (!lessonId) {
    return NextResponse.json({ error: "No lessonId found" }, { status: 400 });
  }

  try {
    const details = await client.fetch(lessonDetailsQuery(lessonId.toString()));

    if (!details || details.length === 0) {
      return NextResponse.json({ error: "No details found for the specified lessonId" }, { status: 404 });
    }

    return NextResponse.json(details[0], { status: 200 });
  } catch (error: unknown) {
    console.error("Error fetching lesson details:", error);

    if (error instanceof Error) {
      return NextResponse.json({ error: "Internal Server Error", details: error.message }, { status: 500 });
    }

    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
