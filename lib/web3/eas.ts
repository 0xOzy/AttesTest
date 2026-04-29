import { EAS } from '@ethereum-attestation-service/eas-sdk-v2';

export const EAS_CONTRACT_ADDRESS_BASE_SEPOLIA = "0x4200000000000000000000000000000000000021"; // Placeholder EAS address for Base (verify with official docs)

/**
 * Initializes the EAS SDK instance.
 * @param signerOrProvider Ethers/viem signer or provider
 */
export function getEASInstance(signerOrProvider: any) {
  const eas = new EAS(EAS_CONTRACT_ADDRESS_BASE_SEPOLIA);
  eas.connect(signerOrProvider);
  return eas;
}
