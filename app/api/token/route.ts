import * as Ably from 'ably/promises';
import { NextResponse } from 'next/server';

export async function POST() {
  if (!process.env.ABLY_API_KEY) {
    return NextResponse.json(
      {
        errorMessage: `Missing ABLY_API_KEY environment variable.
        If you're running locally, please ensure you have a ./.env file with a value for ABLY_API_KEY=your-key.
        If you're running in Netlify, make sure you've configured env variable ABLY_API_KEY. 
        Please see README.md for more details on configuring your Ably API Key.`
      },
      {
        status: 500,
        headers: new Headers({
          'content-type': 'application/json'
        })
      }
    );
  }
  const client = new Ably.Rest(process.env.ABLY_API_KEY);
  const tokenRequestData = await client.auth.createTokenRequest({
    clientId: 'ably-blog-app'
  });
  return NextResponse.json(tokenRequestData);
}
