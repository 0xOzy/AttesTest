import React from 'react';
import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-bg-base text-text-primary flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 border-b-[3px] border-border-color sticky top-0 bg-bg-base z-50">
        <Link href="/" className="text-2xl font-bahuss tracking-tighter">
          ATT€ST ID
        </Link>
        <ConnectButton showBalance={false} />
      </div>

      {/* Sidebar */}
      <aside className="hidden md:flex w-64 flex-col border-r-[3px] border-border-color bg-bg-base sticky top-0 h-screen">
        <div className="p-6 border-b-[3px] border-border-color">
          <Link href="/" className="text-3xl font-bahuss tracking-tighter hover:text-accent-primary transition-colors">
            ATT€ST ID
          </Link>
        </div>
        <nav className="flex-1 p-4 flex flex-col gap-2 overflow-y-auto">
          {[
            { label: 'Overview', href: '/dashboard' },
            { label: 'Schemas', href: '/dashboard/schemas' },
            { label: 'Issue Attestation', href: '/dashboard/issue' },
            { label: 'Verify', href: '/dashboard/verify' },
            { label: 'Billing & Credits', href: '/dashboard/billing' },
            { label: 'API Keys', href: '/dashboard/api-keys' },
            { label: 'Settings', href: '/dashboard/settings' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="p-3 font-mono text-sm border-[3px] border-transparent hover:border-border-color hover:bg-accent-primary/10 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t-[3px] border-border-color">
          <ConnectButton showBalance={false} chainStatus="icon" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}
