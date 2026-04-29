import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET(req: NextRequest) {
  try {
    // In a real app we fetch transaction history
    const transactions: any[] = [];
    return NextResponse.json({ success: true, data: { transactions }, error: null });
  } catch (error: any) {
    return NextResponse.json({ success: false, data: null, error: error.message }, { status: 500 });
  }
}
