import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    const { amount } = await req.json();
    
    // Generate deposit address via Circle
    const depositAddress = "0xMockDepositAddressForUSDC";
    
    return NextResponse.json({ success: true, data: { depositAddress, amount }, error: null });
  } catch (error: any) {
    return NextResponse.json({ success: false, data: null, error: error.message }, { status: 500 });
  }
}
