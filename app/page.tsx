import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PricingSection } from '@/components/pricing-section';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-base text-text-primary flex flex-col">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-4 md:p-6 border-b-[3px] border-border-color sticky top-0 bg-bg-base z-50">
        <Link href="/" className="text-3xl font-bahuss tracking-tighter hover:text-accent-primary transition-colors">
          ATT€ST ID
        </Link>
        <div className="flex items-center gap-4">
          <ConnectButton />
        </div>
      </nav>

      <main className="flex-1 flex flex-col items-center">
        {/* Hero Section */}
        <section className="w-full max-w-7xl px-4 py-24 md:py-32 flex flex-col items-center text-center relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="hidden md:block absolute top-20 left-10 w-24 h-24 border-[3px] border-accent-primary bg-bg-base shadow-[8px_8px_0px_0px_var(--accent-primary)] rotate-12" />
          <div className="hidden md:block absolute bottom-20 right-10 w-32 h-32 rounded-full border-[3px] border-border-color bg-accent-primary/20" />
          <div className="hidden md:block absolute top-40 right-40 w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[60px] border-b-text-primary -rotate-12" />

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bahuss uppercase tracking-tighter leading-none mb-6 relative z-10 text-border-color">
            ELEVATE <br />
            <span className="text-accent-primary">CREDENTIALS</span>
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl mb-12 font-medium opacity-90 relative z-10 text-border-color">
            No-code platform for managing on-chain attestations on Base. Built for DAOs, Agents, and True Web3 builders.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center max-w-md">
            <Button size="lg" className="w-full sm:w-auto text-lg uppercase" asChild>
              <Link href="/dashboard">GET STARTED</Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg uppercase" asChild>
              <Link href="#features">LEARN MORE</Link>
            </Button>
          </div>
        </section>

        {/* Why AttestID Section */}
        <section className="w-full border-y-[3px] border-border-color bg-text-primary text-bg-base py-24 px-4 flex flex-col items-center">
          <div className="max-w-7xl w-full">
            <h2 className="text-4xl md:text-6xl font-bahuss uppercase mb-16 text-center text-bg-base">WHY ATT€ST ID?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 border-[3px] border-bg-base shadow-[4px_4px_0px_0px_var(--bg-base)] bg-accent-primary">
                <h3 className="text-2xl font-bold font-bahuss mb-4 text-bg-base">No-Code Builder</h3>
                <p className="font-medium text-bg-base">Define schemas and issue attestations visually. No smart contract coding required.</p>
              </div>
              <div className="p-8 border-[3px] border-bg-base shadow-[4px_4px_0px_0px_var(--bg-base)] bg-border-color">
                <h3 className="text-2xl font-bold font-bahuss mb-4 text-bg-base">Gasless USDC</h3>
                <p className="font-medium text-bg-base">Powered by Circle Paymaster & x402. Pay via API micro-transactions effortlessly.</p>
              </div>
              <div className="p-8 border-[3px] border-bg-base shadow-[4px_4px_0px_0px_var(--bg-base)] bg-text-primary text-bg-base">
                <h3 className="text-2xl font-bold font-bahuss mb-4">Multi-Use</h3>
                <p className="font-medium">Perfect for Human Identity, DAO badges, and AI Agent operational licenses.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="w-full py-24 px-4 flex flex-col items-center">
          <div className="max-w-7xl w-full">
            <h2 className="text-4xl md:text-6xl font-bahuss uppercase mb-16 text-center">Core Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Schema Builder</CardTitle>
                  <CardDescription>Visual interface to build complex data structures for your attestations.</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Issue Badges</CardTitle>
                  <CardDescription>Reward contributors and agents with verifiable credentials on Base.</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Instant Verify</CardTitle>
                  <CardDescription>Check attestation validity globally using EAS GraphQL Indexers.</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Agent License</CardTitle>
                  <CardDescription>Issue machine-readable operational licenses for AI agents in Web3.</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Revoke Management</CardTitle>
                  <CardDescription>Full lifecycle control. Revoke credentials securely when needed.</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>API & SDK Ready</CardTitle>
                  <CardDescription>Integrate AttestID into your own dApps using our standardized APIs.</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <PricingSection />

        {/* FAQ - basic placeholder for now */}
        <section className="w-full py-24 px-4 border-t-[3px] border-border-color flex flex-col items-center bg-accent-primary/5">
          <div className="max-w-3xl w-full text-center">
            <h2 className="text-4xl md:text-6xl font-bahuss uppercase mb-8">FAQ</h2>
            <p className="text-xl mb-8">Got questions? We&apos;ve got answers. Check our documentation or reach out to support.</p>
            <Button size="lg" variant="outline">VIEW DOCUMENTATION</Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-[3px] border-border-color py-12 px-6 flex flex-col md:flex-row items-center justify-between font-mono gap-10 text-center md:text-left bg-bg-base">
        
        {/* Brand / Logo */}
        <div className="flex flex-col items-center md:items-start order-1 md:order-none">
          <Link href="/" className="text-3xl font-bahuss tracking-tighter hover:text-accent-primary transition-colors mb-2">
            ATT€ST ID
          </Link>
          <p className="text-xs opacity-80 max-w-xs">No-code platform for on-chain credentials.</p>
        </div>
        
        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center text-sm font-bold uppercase order-2 md:order-none">
          <Link href="#" className="hover:text-accent-primary hover:underline underline-offset-4 py-2 md:py-0 w-full md:w-auto border-b-2 border-transparent md:border-none">TWITTER</Link>
          <Link href="#" className="hover:text-accent-primary hover:underline underline-offset-4 py-2 md:py-0 w-full md:w-auto border-b-2 border-transparent md:border-none">DISCORD</Link>
          <Link href="#" className="hover:text-accent-primary hover:underline underline-offset-4 py-2 md:py-0 w-full md:w-auto border-b-2 border-transparent md:border-none">GITHUB</Link>
          <Link href="/docs" className="hover:text-accent-primary hover:underline underline-offset-4 py-2 md:py-0 w-full md:w-auto border-b-2 border-transparent md:border-none">DOCS</Link>
        </div>

        {/* Status & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-6 order-3 md:order-none">
          {/* Network Status */}
          <div className="flex items-center gap-2 border-[2px] border-border-color px-4 py-2 shadow-[2px_2px_0px_var(--border-color)]">
            <div className="w-2.5 h-2.5 bg-green-500 animate-pulse border-[1px] border-black dark:border-white" />
            <span className="text-xs font-bold uppercase">BASE SEPOLIA OK</span>
          </div>
          
          {/* Copyright */}
          <div className="text-xs opacity-60 uppercase">
            <p>© 2026 ATT€ST ID. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

