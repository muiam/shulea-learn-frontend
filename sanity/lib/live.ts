import { defineLive } from "next-sanity";
import { client } from './client'
import { readToken as token} from "../env";

export const { sanityFetch, SanityLive } = defineLive({ 
  client,
  serverToken: token,
  browserToken: token
});
