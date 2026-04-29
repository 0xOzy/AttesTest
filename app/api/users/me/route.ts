import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET(req: NextRequest) {
  try {
    // Mock user ID - in a real app this comes from session
    const mockUserId = "some-user-id";
    
    // We'll return a mock for now successfully since DB might not have the user yet
    return NextResponse.json({ 
      success: true, 
      data: { 
        user: { 
          id: mockUserId, 
          walletAddress: "0x123", 
          role: "USER", 
          subscriptionTier: "STARTER",
          creditBalance: 0
        } 
      }, 
      error: null 
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, data: null, error: error.message }, { status: 500 });
  }
}
