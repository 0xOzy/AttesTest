import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { StatCard } from '@/components/ui/stat-card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { CircleDollarSign, TrendingUp, Zap } from 'lucide-react';

export default function AdminRevenuePage() {
  return (
    <div className="p-6 md:p-10 space-y-8 max-w-7xl mx-auto">
      <div>
        <h1 className="text-4xl font-bahuss uppercase mb-2">Revenue & Metrics</h1>
        <p className="opacity-80">Financial overview for Subscriptions and x402 Micropayments.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <StatCard title="Total Revenue" value="$45,210.00" icon={CircleDollarSign} />
         <StatCard title="MRR (Subscriptions)" value="$3,100.00" icon={TrendingUp} />
         <StatCard title="x402 Micropayments" value="$250.45" icon={Zap} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
           <Card>
             <CardHeader>
               <CardTitle>Recent Transactions</CardTitle>
             </CardHeader>
             <CardContent>
               <Table>
                 <TableHeader>
                   <TableRow>
                     <TableHead>Type</TableHead>
                     <TableHead>Amount</TableHead>
                     <TableHead>User</TableHead>
                     <TableHead className="text-right">Date</TableHead>
                   </TableRow>
                 </TableHeader>
                 <TableBody>
                   <TableRow>
                     <TableCell><Badge>PRO PLAN</Badge></TableCell>
                     <TableCell className="font-mono font-bold text-green-500">+$19.00</TableCell>
                     <TableCell className="font-mono text-xs opacity-70">0xabc...def</TableCell>
                     <TableCell className="text-right font-mono text-sm opacity-80">Today, 10:00 AM</TableCell>
                   </TableRow>
                   <TableRow>
                     <TableCell><Badge variant="outline">x402 BATCH</Badge></TableCell>
                     <TableCell className="font-mono font-bold text-green-500">+$5.00</TableCell>
                     <TableCell className="font-mono text-xs opacity-70">Circle Settlement</TableCell>
                     <TableCell className="text-right font-mono text-sm opacity-80">Yesterday</TableCell>
                   </TableRow>
                 </TableBody>
               </Table>
             </CardContent>
           </Card>
        </div>

        <div className="space-y-8">
           <Card className="border-[4px] border-border-color bg-accent-primary/10">
              <CardHeader>
                 <CardTitle>Paymaster Sponsor Balance</CardTitle>
                 <CardDescription>Funds remaining to sponsor gasless transactions.</CardDescription>
              </CardHeader>
              <CardContent>
                 <div className="text-4xl font-mono font-bold mb-4">$5,420.00</div>
                 <div className="w-full h-2 bg-text-primary/20">
                    <div className="h-full bg-accent-primary w-3/4" />
                 </div>
                 <p className="text-xs font-mono mt-2 opacity-60">Estimated to last 45 days at current usage rate.</p>
              </CardContent>
           </Card>
        </div>
      </div>
    </div>
  );
}
