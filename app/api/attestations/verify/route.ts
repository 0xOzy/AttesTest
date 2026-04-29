import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    const { uid } = await req.json();

    const attestation = await prisma.attestation.findUnique({
      where: { attestationUID: uid },
      include: { schema: true, issuer: true }
    });

    if (!attestation) {
      return NextResponse.json({ success: false, data: null, error: 'Attestation not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: { valid: attestation.status === 'CONFIRMED', attestation }, error: null });
  } catch (error: any) {
    return NextResponse.json({ success: false, data: null, error: error.message }, { status: 500 });
  }
}
