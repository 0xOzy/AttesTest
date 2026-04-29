import React from 'react';
import Link from 'next/link';

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-bg-base text-text-primary">
      <nav className="p-4 md:p-6 border-b-[3px] border-border-color sticky top-0 bg-bg-base z-50">
        <Link href="/" className="text-3xl font-bahuss tracking-tighter hover:text-accent-primary transition-colors">
          ATT€ST ID <span className="text-sm font-mono text-text-primary ml-2 opacity-50">DOCS</span>
        </Link>
      </nav>

      <div className="flex flex-col md:flex-row">
        {/* Sidebar Nav */}
        <aside className="w-full md:w-64 border-r-[3px] border-border-color p-6 hidden md:block h-[calc(100vh-80px)] sticky top-[80px] overflow-y-auto font-mono text-sm">
          <ul className="space-y-4">
            <li><a href="#intro" className="hover:text-accent-primary">1. Introduction</a></li>
            <li><a href="#quickstart" className="hover:text-accent-primary">2. Quickstart</a></li>
            <li><a href="#core-concepts" className="hover:text-accent-primary">3. Core Concepts</a></li>
            <li><a href="#api-reference" className="hover:text-accent-primary">4. API Reference</a></li>
            <li><a href="#sdks" className="hover:text-accent-primary">5. SDKs & Tools</a></li>
            <li><a href="#tutorials" className="hover:text-accent-primary">6. Tutorials</a></li>
            <li><a href="#dashboard" className="hover:text-accent-primary">7. Dashboard Guide</a></li>
            <li><a href="#faq" className="hover:text-accent-primary">8. FAQ & Support</a></li>
          </ul>
        </aside>

        {/* Content */}
        <main className="flex-1 p-6 md:p-12 max-w-4xl space-y-16">
          <section id="intro">
            <h1 className="text-5xl font-bahuss uppercase mb-6">1. Introduction</h1>
            <p className="text-lg opacity-80 mb-4">
              AttestID is a no-code and API-first platform for managing on-chain attestations on Base. 
              We leverage the Ethereum Attestation Service (EAS) protocol and integrate gasless 
              USDC Nanopayments via Circle and the x402 standard to bring enterprise-grade credentialing 
              to DAOs, builders, and AI Agents.
            </p>
          </section>

          <section id="quickstart">
            <h2 className="text-4xl font-bahuss uppercase mb-6">2. Quickstart</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="p-6 border-[3px] border-border-color shadow-brutal">
                 <h3 className="font-bold text-xl uppercase mb-2">Standard API Key</h3>
                 <p className="opacity-80 text-sm mb-4">For traditional backend integration.</p>
                 <code className="block bg-text-primary/10 p-2 text-xs">Authorization: Bearer attk_...</code>
               </div>
               <div className="p-6 border-[3px] border-accent-primary shadow-[4px_4px_0px_0px_var(--accent-primary)] bg-accent-primary/10">
                 <h3 className="font-bold text-xl uppercase mb-2">x402 Agent Path</h3>
                 <p className="opacity-80 text-sm mb-4">Gasless pay-per-use via wallet signatures.</p>
                 <code className="block bg-text-primary/10 p-2 text-xs">PAYMENT-SIGNATURE: 0x...</code>
               </div>
            </div>
          </section>

          <section id="core-concepts">
            <h2 className="text-4xl font-bahuss uppercase mb-6">3. Core Concepts</h2>
            <p className="opacity-80">
              Understanding Schemas (data structures) vs Attestations (issued instances). 
              Subscriptions are managed via Base Accounts (CDP) for recurring charges. 
              Agents use x402 for micro-transactions.
            </p>
          </section>

          <section id="api-reference">
            <h2 className="text-4xl font-bahuss uppercase mb-6">4. API Reference</h2>
            <div className="space-y-4">
              <div className="p-4 border-[3px] border-border-color">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-green-500 text-bg-base font-bold text-xs uppercase">POST</span>
                  <span className="font-mono font-bold">/api/attestations/create</span>
                </div>
                <p className="text-sm opacity-80 mb-2">Issue a new attestation on Base Sepolia.</p>
                <div className="text-xs font-mono opacity-60">Price: $0.05 USDC (x402) or 1 API Credit</div>
              </div>
              <div className="p-4 border-[3px] border-border-color">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-blue-500 text-bg-base font-bold text-xs uppercase">POST</span>
                  <span className="font-mono font-bold">/api/attestations/verify</span>
                </div>
                <p className="text-sm opacity-80 mb-2">Verify attestation validity against EAS GraphQL.</p>
                <div className="text-xs font-mono opacity-60">Price: $0.01 USDC (x402) or 1 API Credit</div>
              </div>
            </div>
          </section>

          <section id="sdks">
             <h2 className="text-4xl font-bahuss uppercase mb-6">5. SDKs & Tools</h2>
             <p className="opacity-80 mb-4">Official SDKs are coming soon. `npm install @attestid/js`</p>
          </section>

          <section id="tutorials">
             <h2 className="text-4xl font-bahuss uppercase mb-6">6. Tutorials & Use Cases</h2>
             <ul className="list-disc pl-6 opacity-80 space-y-2">
                <li>Building a DAO Login System</li>
                <li>Issuing AI Agent Operational Licenses (KYA)</li>
                <li>Integrating AttestID with Next.js 14</li>
             </ul>
          </section>

          <section id="dashboard">
             <h2 className="text-4xl font-bahuss uppercase mb-6">7. Dashboard Guide</h2>
             <p className="opacity-80">Navigate the UI to manage APIs, subscriptions, and issue manual credentials.</p>
          </section>

          <section id="faq">
             <h2 className="text-4xl font-bahuss uppercase mb-6">8. FAQ & Support</h2>
             <div className="space-y-4">
               <div>
                 <h4 className="font-bold mb-1">What networks are supported?</h4>
                 <p className="opacity-80 text-sm">Currently, we support Base Sepolia. Mainnet Base integration is planned.</p>
               </div>
               <div>
                 <h4 className="font-bold mb-1">How does gasless transaction work?</h4>
                 <p className="opacity-80 text-sm">We use Circle Paymaster to sponsor transactions under the hood for free-tier and subscribed users.</p>
               </div>
               <div>
                 <h4 className="font-bold mb-1">Need help?</h4>
                 <p className="opacity-80 text-sm">Reach out to <a href="mailto:support@attestid.com" className="text-accent-primary">support@attestid.com</a></p>
               </div>
             </div>
          </section>

        </main>
      </div>
    </div>
  );
}
