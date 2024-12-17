import { NextRequest, NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";
import { lessonDetailsQuery } from "@/sanity/lib/queries";
import { NextApiRequest, NextApiResponse } from "next";

//ti should be a get request
export async function POST (req: NextRequest, res: NextApiResponse) {
  // const { lessonId } = req.query; // Destructure `lessonId` from `params`
  // if(!lessonId){
  //   return res.status(400).json({ error: "No lessonId found" });
  // }
  // try {
  //   const details = await client.fetch(lessonDetailsQuery(lessonId as string));
  //   if (details.length === 0) {
  //     return NextResponse.json({ error: "No details found" }, { status: 404 });
  //   }

  //   return NextResponse.json(details[0], { status: 200 });
  // } catch (error: unknown) {
  //   console.error("Error fetching goals:", error);
  //   if (error instanceof Error) {
  //     return NextResponse.json({ error: "Internal Server Error", details: error.message }, { status: 500 });
  //   }
  //   return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  // }

  // return 200 statuscode
  return NextResponse.json({ message: "success" });
}
