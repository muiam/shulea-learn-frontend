// utils/auth.ts
export interface DecodedToken {
  exp: number;
  type: string;
  user_id: number;
  email: string;
  first_name?: string;
  second_name?: string;
}
