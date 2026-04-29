'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Ticket, ArrowRight, ArrowLeft } from 'lucide-react';

export default function IssuePage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleIssue = async () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast.success("Attestation Issued Successfully!");
      setStep(1);
    }, 1500);
  };

  return (
    <div className="p-6 md:p-10 space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-4xl font-bahuss uppercase mb-2">Issue Attestation</h1>
        <p className="opacity-80">Follow the steps to issue a new credential on Base.</p>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <div className={`p-2 border-[3px] border-border-color shadow-brutal flex items-center justify-center font-bold ${step >= 1 ? 'bg-accent-primary text-bg-base' : 'bg-bg-base text-text-primary/50'}`}>
          1
        </div>
        <div className="flex-1 h-1 bg-border-color/20">
          <div className={`h-full bg-accent-primary transition-all ${step >= 2 ? 'w-full' : 'w-0'}`} />
        </div>
        <div className={`p-2 border-[3px] border-border-color shadow-brutal flex items-center justify-center font-bold ${step >= 2 ? 'bg-accent-primary text-bg-base' : 'bg-bg-base text-text-primary/50'}`}>
          2
        </div>
      </div>

      {step === 1 && (
        <Card>
          <CardHeader>
            <CardTitle>Select Schema</CardTitle>
            <CardDescription>Choose the schema you want to base this attestation on.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-6 border-[3px] border-border-color bg-bg-base font-mono flex flex-col items-center justify-center gap-4 text-center">
               <Ticket className="w-12 h-12 opacity-50" />
               <p className="opacity-60">No schemas available. You need to create a schema first.</p>
               <Button variant="outline">GO TO SCHEMAS</Button>
            </div>
            {/* For testing UI, imagine there's one selected */}
            <div className="p-4 border-[3px] border-accent-primary bg-accent-primary/10 cursor-pointer">
              <h3 className="font-bold mb-1">Example Schema</h3>
              <p className="text-sm font-mono opacity-80">uint256 value, string name</p>
            </div>
          </CardContent>
          <CardFooter className="justify-end">
            <Button onClick={() => setStep(2)}>
              Next Step <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </CardFooter>
        </Card>
      )}

      {step === 2 && (
        <Card>
          <CardHeader>
            <CardTitle>Recipient & Data</CardTitle>
            <CardDescription>Fill in the recipient address and schema data.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label className="font-bold text-sm uppercase">Recipient Address (0x...)</label>
              <Input placeholder="0x..." />
            </div>
            
            <div className="p-4 border-[3px] border-border-color bg-text-primary/5 space-y-4">
               <h4 className="font-bold mb-2 uppercase border-b-2 border-border-color/20 pb-2">Schema Data</h4>
               <div className="space-y-2">
                 <label className="font-mono text-xs opacity-80">uint256 value</label>
                 <Input type="number" placeholder="e.g. 100" />
               </div>
               <div className="space-y-2">
                 <label className="font-mono text-xs opacity-80">string name</label>
                 <Input placeholder="e.g. Satoshi" />
               </div>
            </div>
          </CardContent>
          <CardFooter className="justify-between">
            <Button variant="outline" onClick={() => setStep(1)}>
              <ArrowLeft className="mr-2 w-4 h-4" /> Back
            </Button>
            <Button onClick={handleIssue} disabled={loading}>
              {loading ? "ISSUING..." : "ISSUE ATTESTATION"}
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
