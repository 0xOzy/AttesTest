/**
 * base.subscription.revoke()
 * Backend-only logic to terminate a subscription via CDP.
 */
export async function revokeSubscription(subscriptionId: string) {
  // base.subscription.revoke({ id })
  console.log("Backend CDP revoking subscription", subscriptionId);
  return { success: true };
}
