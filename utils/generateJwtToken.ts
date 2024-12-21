import { client } from "@/sanity/lib/client";
import { myLessonsSchedulesQuery } from "@/sanity/lib/queries";
import jwt from "jsonwebtoken";



export const getUserSchedule = async (userId: string, scheduleId: string) => {
   
    const scheduleData = await client.fetch(myLessonsSchedulesQuery(userId, scheduleId))
    if (scheduleData.length === 0) {
        return null;
    }
    const isOwner = scheduleData[0].isOwner;
    return isOwner
};

export const generateJwtToken = (privateKey:string, { id, name, email, avatar, appId, kid }: { id: string, name: string, email: string, avatar: string, appId: string, kid: string }) => {
  const now = new Date()
  const jwtToken = jwt.sign({
    aud: 'jitsi',
    context: {
      user: {
        id,
        name,
        avatar,
        email: email,
        moderator: 'true'
      },
      features: {
        livestreaming: 'true',
        recording: 'true',
        transcription: 'true',
        "outbound-call": 'true'
      }
    },
    iss: 'chat',
    room: '*',
    sub: appId,
    exp: Math.round(now.setHours(now.getHours() + 3) / 1000),
    nbf: (Math.round((new Date).getTime() / 1000) - 10)
  }, privateKey, { algorithm: 'RS256', keyid: kid })
  return jwtToken;
}