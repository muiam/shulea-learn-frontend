import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import jwt from "jsonwebtoken";
export async function POST(request: Request) {
  try {
    const privateKeyPath = path.join("utils", "privateKey.pk");
      const privateKey = fs.readFileSync(privateKeyPath, "utf-8");
      
      console.log("The private key is:", privateKey);

    const { id, name, email, avatar, appId, kid, isOwner } = await request.json();

    const now = new Date();
    const jwtToken = jwt.sign(
      {
        aud: "jitsi",
        context: {
          user: {
            id,
            name,
            avatar,
            email: email,
            moderator: false,
          },
          features: {
            livestreaming: "true",
            recording: "true",
            transcription: "true",
            "outbound-call": "true",
          },
        },
        iss: "chat",
        room: "*",
        sub: appId,
        exp: Math.round(now.setHours(now.getHours() + 3) / 1000),
        nbf: Math.round(new Date().getTime() / 1000) - 10,
      },
      privateKey,
      { algorithm: "RS256", keyid: kid }
    );
    return NextResponse.json({ token: jwtToken });
  } catch (error) {
    console.error("Token generation error:", error);
    return NextResponse.json(
      { error: `failed to generate token ${error}` },
      { status: 500 }
    );
  }
}
