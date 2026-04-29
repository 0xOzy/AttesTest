import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET(req: NextRequest) {
  try {
    const attestations = await prisma.attestation.findMany({
      orderBy: { createdAt: 'desc' },
      include: { schema: true }
    });
    return NextResponse.json({ success: true, data: { attestations }, error: null });
  } catch (error: any) {
    return NextResponse.json({ success: false, data: null, error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { attestationUID, schemaId, issuerId, recipient, data, txHash } = await req.json();

    const attestation = await prisma.attestation.create({
      data: {
        attestationUID,
        schemaId,
        issuerId, // Should be from session
        recipient,
        data,
        txHash,
        status: 'CONFIRMED'
      },
    });

    return NextResponse.json({ success: true, data: { attestation }, error: null });
  } catch (error: any) {
    return NextResponse.json({ success: false, data: null, error: error.message }, { status: 500 });
  }
}
