import { client, writeClient } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
    const { topic, capacity, date, startTime, endTime, price, link, hostedOnShulea, description, lessonId } = await req.json();
   // Assuming the date object contains the day, month, and year
const dateObj = new Date(date.year, date.month - 1, date.day); // Month is 0-indexed in JavaScript

// Get the day name using toLocaleDateString
const dayName = dateObj.toLocaleDateString('en-US', { weekday: 'long' }); // This will return "Monday", "Tuesday", etc.
// Function to convert a time (hour, minute) to 12-hour format with AM/PM
function convertTo12HourFormat(hour:number, minute:number) {
  const hourCycle = hour >= 12 ? 'PM' : 'AM'; // Determine AM or PM
  let hour12 = hour % 12; // Convert to 12-hour format
  if (hour12 === 0) hour12 = 12; // Handle 0 as 12 for 12 AM/PM
  
  return {
    hour: hour12,
    minute: minute < 10 ? '0' + minute : minute, // Ensure minute is always 2 digits
    hourCycle: hourCycle,
  };
}

// Convert startTime and endTime to 12-hour format
const start = convertTo12HourFormat(startTime.hour, startTime.minute);
const end = convertTo12HourFormat(endTime.hour, endTime.minute);
console.log(`date is ${date.day}/${date.month}/${date.year} ${dayName} and startTime: ${start.hour}:${start.minute} ${start.hourCycle}, endTime: ${end.hour}:${end.minute} ${end.hourCycle}`);
    const lesson = await client.fetch(`*[_type == "lesson" && _id == "${lessonId}"][0]`)
    const schedule = await writeClient.create({
        _type: "lessonSchedule",
        topic: topic,
        capacity: capacity,
        date: `${date.day}/${date.month}/${date.year}`,
        dayName: dayName,
        startTime: `${start.hour}:${start.minute} ${start.hourCycle}`,
        endTime: `${end.hour}:${end.minute} ${end.hourCycle}`,
        price: price,
        lessonLink: link,
        hostedOnShulea: hostedOnShulea,
        description: description,
        lesson: {
            _type: "reference",
            _ref: lesson._id,
        },
    })
    if (schedule) {
        return NextResponse.json({ message: "Schedule created successfully" });
    } else {
        return NextResponse.json({ message: "Failed to create schedule" });
    }

}   