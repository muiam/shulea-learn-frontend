import { type SchemaTypeDefinition } from 'sanity'
import {userType} from './userType'
import {lessonType} from './lessonType'
import { goalType } from './goalType'
import { lessonScheduleType } from './lessonScheduleType'
import { lessonEnrollmentType } from './lessonEnrollMentType'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    userType, 
    lessonType,
    goalType,
    lessonScheduleType,
    lessonEnrollmentType,
  ],
};  
