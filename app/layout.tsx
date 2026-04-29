import type {Metadata} from 'next';
import { Inter, Space_Grotesk, Geist_Mono } from 'next/font/google';
import './globals.css'; // Global styles
import { Web3Provider } from '@/lib/web3/provider';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

// Using Space Grotesk as a geometric Bauhaus-like substitute for "Bahuss"
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-bahuss',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  title: 'AttestID | No-code Credential Platform',
  description: 'No-code platform for issuing and verifying on-chain credentials on Base.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
        <Web3Provider>
          {children}
          <Toaster />
        </Web3Provider>
      </body>
    </html>
  );
}
