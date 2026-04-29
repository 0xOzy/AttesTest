'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, CheckCircle2, XCircle } from 'lucide-react';

export default function VerifyPage() {
  const [uid, setUid] = useState('');
  const [result, setResult] = useState<'idle' | 'valid' | 'invalid' | 'loading'>('idle');

  const handleVerify = () => {
    if (!uid) return;
    setResult('loading');
    setTimeout(() => {
      // Mock result based on length for demo
      setResult(uid.length > 20 ? 'valid' : 'invalid');
    }, 1000);
  };

  return (
    <div className="p-6 md:p-10 space-y-8 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bahuss uppercase mb-4">Verify</h1>
        <p className="opacity-80 max-w-xl mx-auto">
          Check the validity of any attestation on the Base network instantly.
        </p>
      </div>

      <Card className="border-[4px] shadow-brutal-lg">
        <CardContent className="p-8 space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input 
                placeholder="Enter Attestation UID (0x...)" 
                className="h-14 text-lg border-[3px]"
                value={uid}
                onChange={(e) => setUid(e.target.value)}
              />
            </div>
            <Button size="lg" className="h-14 px-8 text-lg" onClick={handleVerify} disabled={result === 'loading'}>
              {result === 'loading' ? 'VERIFYING...' : 'VERIFY'}
            </Button>
          </div>

          {result === 'valid' && (
            <div className="mt-8 p-6 bg-green-500/10 border-[3px] border-green-500 flex flex-col items-center text-center animate-in fade-in zoom-in duration-300">
               <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
               <h3 className="text-2xl font-bahuss uppercase text-green-500 mb-2">Valid Attestation</h3>
               <p className="font-mono mb-4 text-sm opacity-80 break-all">{uid}</p>
               <Badge className="bg-green-500 text-bg-base border-green-700">CONFIRMED</Badge>
            </div>
          )}

          {result === 'invalid' && (
            <div className="mt-8 p-6 bg-red-500/10 border-[3px] border-red-500 flex flex-col items-center text-center animate-in fade-in zoom-in duration-300">
               <XCircle className="w-16 h-16 text-red-500 mb-4" />
               <h3 className="text-2xl font-bahuss uppercase text-red-500 mb-2">Invalid or Revoked</h3>
               <p className="font-mono mb-4 text-sm opacity-80 break-all">{uid}</p>
               <Badge variant="destructive">NOT FOUND</Badge>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
