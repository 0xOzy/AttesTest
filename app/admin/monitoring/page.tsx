import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function AdminMonitoringPage() {
  return (
    <div className="p-6 md:p-10 space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-4xl font-bahuss uppercase mb-2">Systems Monitoring</h1>
        <p className="opacity-80">Detailed view on backend infrastructure.</p>
      </div>

      <div className="grid gap-6">
        <Card className="border-[4px] border-border-color">
           <CardHeader>
             <CardTitle>Base Sepolia Network Data</CardTitle>
           </CardHeader>
           <CardContent className="space-y-4">
              <div className="flex justify-between border-b-[2px] border-border-color pb-2">
                 <span className="font-bold">Gas Price</span>
                 <span className="font-mono">~0.001 Gwei</span>
              </div>
              <div className="flex justify-between border-b-[2px] border-border-color pb-2">
                 <span className="font-bold">Block Number</span>
                 <span className="font-mono">4453991</span>
              </div>
           </CardContent>
        </Card>
      </div>
    </div>
  );
}
