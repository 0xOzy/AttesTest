/**
 * Circle Paymaster configuration for gasless transactions.
 * Submits transactions via Paymaster for onboarding users smoothly.
 */
export const CIRCLE_PAYMASTER_URL = process.env.NEXT_PUBLIC_PAYMASTER_URL;

export async function sponsorTransaction(txData: any) {
  // TODO: implement actual wrapper with Circle SDK / HTTP request
  console.log("Sponsoring TX via Circle Paymaster on Base Sepolia", txData);
  return txData;
}
