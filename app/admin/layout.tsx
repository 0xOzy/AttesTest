import React from 'react';
import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-bg-base text-text-primary flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 border-b-[3px] border-border-color sticky top-0 bg-bg-base z-50">
        <Link href="/" className="text-2xl font-bahuss tracking-tighter text-red-500">
          ADMIN
        </Link>
        <ConnectButton showBalance={false} />
      </div>

      {/* Sidebar */}
      <aside className="hidden md:flex w-64 flex-col border-r-[3px] border-border-color bg-bg-base sticky top-0 h-screen">
        <div className="p-6 border-b-[3px] border-border-color">
          <Link href="/" className="flex flex-col">
            <span className="text-2xl font-bahuss tracking-tighter">ATT€ST ID</span>
            <span className="font-mono font-bold text-red-500">ADMINISTRATOR</span>
          </Link>
        </div>
        <nav className="flex-1 p-4 flex flex-col gap-2 overflow-y-auto">
          {[
            { label: 'Overview', href: '/admin' },
            { label: 'Users', href: '/admin/users' },
            { label: 'Schemas', href: '/admin/schemas' },
            { label: 'Attestations', href: '/admin/attestations' },
            { label: 'Leads', href: '/admin/leads' },
            { label: 'Revenue', href: '/admin/revenue' },
            { label: 'Audit Log', href: '/admin/logs' },
            { label: 'Monitoring', href: '/admin/monitoring' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="p-3 font-mono text-sm border-[3px] border-transparent hover:border-red-500 hover:bg-red-500/10 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t-[3px] border-border-color mt-auto text-xs font-mono opacity-50 text-center">
           Admin Environment
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}
