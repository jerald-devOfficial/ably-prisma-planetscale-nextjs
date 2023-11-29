import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

// GET /api/comment - retrieves all the comments
export async function GET() {
  try {
    const comments = await prisma.comment.findMany();
    return NextResponse.json(comments);
  } catch (err: any) {
    return new Response(err, { status: 403 });
  }
}

// POST /api/comment - creates a new comment
export async function POST(req: any) {
  try {
    const comment = await prisma.comment.create({
      data: {
        ...req.body
      }
    });
    return NextResponse.json(comment);
  } catch (err) {
    return NextResponse.json(
      { errorMessage: `${err}` },
      {
        status: 500,
        headers: new Headers({
          'content-type': 'application/json'
        })
      }
    );
  }
}
