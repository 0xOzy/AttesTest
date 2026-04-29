import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET(req: NextRequest) {
  try {
    // Collect some aggregate stats
    const totalUsers = await prisma.user.count();
    const totalSchemas = await prisma.schema.count();
    const totalAttestations = await prisma.attestation.count();
    
    return NextResponse.json({ 
      success: true, 
      data: { stats: { totalUsers, totalSchemas, totalAttestations } }, 
      error: null 
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, data: null, error: error.message }, { status: 500 });
  }
}
