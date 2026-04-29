import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StatCard } from '@/components/ui/stat-card';
import { Database, BadgeCheck, Zap, Wallet } from 'lucide-react';

export default function DashboardOverview() {
  return (
    <div className="p-6 md:p-10 space-y-8">
      <div>
        <h1 className="text-4xl font-bahuss uppercase mb-2">Overview</h1>
        <p className="opacity-80">Welcome back. Here is the summary of your attestations.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Schemas" value="0" icon={Database} />
        <StatCard title="Attestations" value="0" icon={BadgeCheck} />
        <StatCard title="Subscription" value="STARTER" icon={Zap} valueClassName="text-accent-primary" />
        <StatCard title="Credit Balance" value="$0.00" icon={Wallet} />
      </div>

      {/* Progress Bar Placeholder for API Usage */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>API Usage (Current Month)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between font-mono mb-2">
            <span>0 Calls</span>
            <span>50 Limit</span>
          </div>
          <div className="w-full h-4 border-[3px] border-border-color bg-bg-base relative">
            <div className="absolute top-0 left-0 h-full bg-accent-primary" style={{ width: '0%' }} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
