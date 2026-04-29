import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET(req: NextRequest) {
  try {
    const schemas = await prisma.schema.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json({ success: true, data: { schemas }, error: null });
  } catch (error: any) {
    return NextResponse.json({ success: false, data: null, error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { schemaUID, name, description, schemaString, revocable, creatorId } = await req.json();

    const schema = await prisma.schema.create({
      data: {
        schemaUID,
        name,
        description,
        schemaString,
        revocable,
        creatorId, // Should be verified from session in real app
      },
    });

    return NextResponse.json({ success: true, data: { schema }, error: null });
  } catch (error: any) {
    return NextResponse.json({ success: false, data: null, error: error.message }, { status: 500 });
  }
}
