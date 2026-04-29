'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Wallet, Zap, Copy, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';

export default function BillingPage() {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Address copied to clipboard!');
  };

  return (
    <div className="p-6 md:p-10 space-y-8 max-w-7xl mx-auto">
      <div>
        <h1 className="text-4xl font-bahuss uppercase mb-2">Billing & Credits</h1>
        <p className="opacity-80">Manage your subscription and USDC credit balance for gasless transactions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Current Plan */}
        <Card className="border-[4px] border-accent-primary relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
             <Zap className="w-32 h-32" />
          </div>
          <CardHeader>
            <CardTitle>Current Plan</CardTitle>
            <CardDescription>You are on the Starter tier.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
             <div className="text-5xl font-bahuss uppercase text-accent-primary">STARTER</div>
             <ul className="space-y-2 font-mono text-sm">
               <li>• 5 Schemas Limit</li>
               <li>• 50 Attestations / month</li>
               <li>• Standard Support</li>
             </ul>
             <Button className="w-full">UPGRADE TO PRO</Button>
          </CardContent>
        </Card>

        {/* Credit Balance */}
        <Card className="border-[4px]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wallet className="w-5 h-5" /> Credit Balance (USDC)
            </CardTitle>
            <CardDescription>Used to pay for x402 gasless API calls.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
             <div className="text-5xl font-mono font-bold">$0.00</div>
             
             <div className="p-4 bg-text-primary/5 border-[3px] border-border-color space-y-3">
                <p className="text-sm font-bold uppercase">Top-Up Address (Base Network)</p>
                <div className="flex items-center gap-2">
                  <code className="flex-1 p-2 bg-bg-base border-[3px] border-border-color text-xs overflow-hidden text-ellipsis">
                    0x31BE08D380A21fc740883c0BC434FcFc88740b58
                  </code>
                  <Button variant="outline" size="icon" onClick={() => handleCopy('0x31BE08D380A21fc740883c0BC434FcFc88740b58')}>
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-xs opacity-60 font-mono">Send only USDC on Base network. Credits are credited automatically.</p>
             </div>
          </CardContent>
        </Card>
      </div>

      {/* Transaction History */}
      <h2 className="text-2xl font-bahuss uppercase mt-12 mb-4">Transaction History</h2>
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">TxHash</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell><Badge variant="outline">TOP-UP</Badge></TableCell>
                <TableCell className="font-mono font-bold text-green-500">+$50.00 USDC</TableCell>
                <TableCell className="font-mono opacity-80">2026-04-28</TableCell>
                <TableCell className="text-right font-mono text-xs opacity-60">0xabc...def</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><Badge variant="destructive">x402 DEDUCT</Badge></TableCell>
                <TableCell className="font-mono font-bold text-red-500">-$0.05 USDC</TableCell>
                <TableCell className="font-mono opacity-80">2026-04-27</TableCell>
                <TableCell className="text-right font-mono text-xs opacity-60">0x123...456</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
