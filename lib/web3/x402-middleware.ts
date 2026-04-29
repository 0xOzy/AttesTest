import { NextRequest, NextResponse } from 'next/server';

/**
 * x402 Protocol Middleware for API Endpoints.
 * Protects endpoints and asks for 402 Payment Required if no valid signature exists.
 */
export async function withX402(req: NextRequest, handler: (req: NextRequest) => Promise<NextResponse>) {
  const signature = req.headers.get('PAYMENT-SIGNATURE');
  
  // Determine price based on path
  const url = new URL(req.url);
  let requestedPrice = "0.01"; // Default verify price
  if (url.pathname.includes('/attestations/create')) {
    requestedPrice = "0.05";
  } else if (url.pathname.includes('/attestations/verify')) {
    requestedPrice = "0.01";
  }

  if (!signature) {
    return NextResponse.json({
      error: "Payment Required",
      price: requestedPrice,
      token: "USDC",
      network: "base-sepolia",
      merchantAddress: process.env.NEXT_PUBLIC_MERCHANT_ADDRESS || "0xMerchant",
      message: "Please provide a valid EIP-3009 signature via PAYMENT-SIGNATURE header."
    }, { status: 402 });
  }

  // TODO: Send signature to Facilitator for validation before continuing
  // Example for validation: 
  // const isValid = await verifyX402Payment(signature, requestedPrice);
  // if (!isValid) return 401
  return handler(req);
}
