import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { baseSepolia } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'AttestID',
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || '1234567890abcdef', // Mocked or env var
  chains: [baseSepolia],
  ssr: true,
});
