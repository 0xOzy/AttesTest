import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StatCard } from '@/components/ui/stat-card';
import { Users, Database, BadgeCheck, CircleDollarSign, Activity } from 'lucide-react';

export default function AdminOverview() {
  return (
    <div className="p-6 md:p-10 space-y-8">
      <div>
        <h1 className="text-4xl font-bahuss uppercase mb-2 text-red-500">Admin Dashboard</h1>
        <p className="opacity-80">Platform overview and real-time statistics.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        <StatCard title="Total Users" value="0" icon={Users} />
        <StatCard title="Schemas" value="0" icon={Database} />
        <StatCard title="Attestations" value="0" icon={BadgeCheck} />
        <StatCard title="Monthly Rev." value="$0.00" icon={CircleDollarSign} />
        <StatCard title="API Calls" value="0" icon={Activity} />
      </div>

      {/* Monitoring Panel */}
      <h2 className="text-2xl font-bahuss uppercase mt-12 mb-4">System Monitoring</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-[4px] border-green-500">
           <CardHeader>
             <CardTitle className="text-lg">Base Sepolia RPC</CardTitle>
           </CardHeader>
           <CardContent className="flex items-center gap-4">
              <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" />
              <div className="font-mono text-sm leading-tight">
                 <p className="font-bold text-green-500">ONLINE</p>
                 <p className="opacity-60 block">Latency: 45ms</p>
              </div>
           </CardContent>
        </Card>

        <Card className="border-[4px] border-green-500">
           <CardHeader>
             <CardTitle className="text-lg">Circle Paymaster</CardTitle>
           </CardHeader>
           <CardContent className="flex items-center gap-4">
              <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" />
              <div className="font-mono text-sm leading-tight">
                 <p className="font-bold text-green-500">OPERATIONAL</p>
                 <p className="opacity-60 block">Sponsor Balance: $5,000</p>
              </div>
           </CardContent>
        </Card>

        <Card className="border-[4px] border-green-500">
           <CardHeader>
             <CardTitle className="text-lg">EAS GraphQL Indexer</CardTitle>
           </CardHeader>
           <CardContent className="flex items-center gap-4">
              <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" />
              <div className="font-mono text-sm leading-tight">
                 <p className="font-bold text-green-500">SYNCED</p>
                 <p className="opacity-60 block">Latest Block: 4,453,991</p>
              </div>
           </CardContent>
        </Card>
      </div>
    </div>
  );
}
