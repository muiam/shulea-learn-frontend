import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { UserJSON, WebhookEvent } from '@clerk/nextjs/server'
import { client, writeClient } from '@/sanity/lib/client'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const SIGNING_SECRET = process.env.SIGNING_SECRET

  if (!SIGNING_SECRET) {
    throw new Error('Error: Please add SIGNING_SECRET from Clerk Dashboard to .env or .env.local')
  }

  // Create new Svix instance with secret
  const wh = new Webhook(SIGNING_SECRET)

  // Get headers
  const headerPayload = await headers()
  const svix_id = headerPayload.get('svix-id')
  const svix_timestamp = headerPayload.get('svix-timestamp')
  const svix_signature = headerPayload.get('svix-signature')

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error: Missing Svix headers', {
      status: 400,
    })
  }

  // Get body
  const payload = await req.json()
  const body = JSON.stringify(payload)

  let evt: WebhookEvent

  // Verify payload with headers
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent
  } catch (err) {
    console.error('Error: Could not verify webhook:', err)
    return new Response('Error: Verification error', {
      status: 400,
    })
  }

  // Handle webhook payload
    const userData = evt.data as UserJSON    
    const { id } = userData
    const firstName = userData['first_name']
    const lastName = userData['last_name']
    const email = userData['email_addresses'][0]['email_address']
    const username = userData['username']
    const imageUrl = userData['image_url']

    const eventType = evt.type
    if(eventType === 'user.created'){
        const user = await client.fetch(`*[_type == 'user' && clerkId == '${id}'][0]`)
        if(!user){
            await writeClient.create(
    
                {
                _type: 'user',
                clerkId: id,
                firstName: firstName,
                lastName: lastName,
                email: email,
                username: username,
                imageUrl: imageUrl,
        
                
                })
            
        }
        return NextResponse.json({ status: 200, message: "User created successfully" });
    }

}