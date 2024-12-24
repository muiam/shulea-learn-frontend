import { groq } from "next-sanity";
// my lesson takes userid from the component its being called and fetch the lessons that are owned by the user togther with total learners enrolled
export const myLessonsQuery = (
  userId: string
) => groq`*[_type == "lesson" && owner->clerkId == "${userId}"]{
    title,
    description,
    subject,
    price,
    imageUrl,
    slug,
    _id,
    chargePerLesson,
    "totalEnrolled":count(*[_type == "lessonEnrollment" && lesson->_id == ^._id])
}`;

export const allLessonsQuery = groq`*[_type == "lesson" && defined(slug) && slug != ""]{
    title,
    description,
    subject,
    price,
    imageUrl,
    slug,
    _id,
    chargePerLesson,
    minimumNeeded,
    "totalEnrolled":count(*[_type == "lessonEnrollment" && lesson->_id == ^._id]),
     "participants": *[_type == "lessonEnrollment" && lesson ->_id == ^._id]{
      learner -> {imageUrl}
    }
}`;

export const singleLessonDetailsQuery = (lessonId: string) => groq`*[_type == "lesson" && _id == "${lessonId}"]{
owner->{clerkId},
title,
    description,
    subject,
    price,
    imageUrl,
    slug,
    _id,
    chargePerLesson,
    minimumNeeded,
    "totalEnrolled":count(*[_type == "lessonEnrollment" && lesson->_id == ^._id]),
    "participants": *[_type == "lessonEnrollment" && lesson ->_id == ^._id]{
      learner -> {imageUrl}
    }
}`;

//lets fetch the lesson goals.. Lesson id is given by the component its being called
export const lessonGoalsQuery = (
  lessonId: string
) => groq`*[_type == "goals" && lesson->_id == "${lessonId}"]{
    goal
}`;

export const lessonDetailsQuery = (
  lessonId: string
) => groq`*[_type == "lesson" && _id == "${lessonId}"]{
    title,
    description,
    subject,
    price,
    imageUrl,
    chargePerLesson,
    slug,
    "totalEnrolled": count(*[_type == "lessonEnrollment" && lesson->_id == ^._id])
}`;

export const lessonSchedulesQuery = (
  lessonId: string
) => groq`*[_type == "lessonSchedule" && lesson->_id == "${lessonId}"]{
    "chargePerLesson" : lesson->chargePerLesson,
    topic,
    date,
    dayName,
    startTime,
    endTime,
    price,
    description,
    _id
}`;

export const myLessonsSchedulesQuery = (
  userId: string,
  scheduleId: string
) => groq`*[_type == "lessonSchedule" && _id == "${scheduleId}"]{
    "isOwner": lesson->owner->clerkId == "${userId}",
    topic,
    date,
    dayName,
    startTime,
    endTime,
    price,
    description,
    _id
}`;

export const LessonGoadQuery = (
  lessonId: string
) => groq`*[_type == "goals" && lesson->_id == "${lessonId}"]{
    goal
}`;


//check whether user is already enrolled in the lesson and has access to the lesson
export const lessonEnrollmentQuery = (
  lessonId: string,
  userId: string
) => groq`*[_type == "lessonEnrollment" && lesson->_id == "${lessonId}" && learner->clerkId == "${userId}"]{
  _id,
  hasAccessToAllSchedules,
  scheduleEnrolled->{
    _id
  }
}`;


export const walletBalance = (userId: string) => groq`*[_type == "wallet" && user->clerkId == "${userId}"]{
  balance
}`;