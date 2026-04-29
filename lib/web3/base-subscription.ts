/**
 * base.subscription.subscribe()
 * Client-side trigger for users to subscribe to a pricing tier.
 * Users sign an approval once, then the backend can charge recurringly.
 */
export async function subscribeToPlan(walletAddress: string, planId: string) {
  // base.subscription.subscribe({ recurringCharge, subscriptionOwner, periodInDays })
  console.log("User subscribing to plan via @base-org/account", planId);
  return { success: true, subscriptionId: "mock_sub_id_" + Date.now() };
}

export async function getOrCreateSubscriptionOwnerWallet() {
  // Logic to instantiate the subscription owner wallet
  return "0xMockSubscriptionOwnerWallet";
}
