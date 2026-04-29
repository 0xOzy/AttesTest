import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ uid: string }> }
) {
  try {
    const resolvedParams = await params;
    const uid = resolvedParams.uid;

    const attestation = await prisma.attestation.update({
      where: { attestationUID: uid },
      data: { status: 'REVOKED' }
    });

    return NextResponse.json({ success: true, data: { attestation }, error: null });
  } catch (error: any) {
    return NextResponse.json({ success: false, data: null, error: error.message }, { status: 500 });
  }
}
