'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { useAccount } from 'wagmi';
import { toast } from 'sonner';
import { subscribeToPlan } from '@/lib/web3/base-subscription';

interface PricingTier {
  id: string;
  name: string;
  price?: string;
  description: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
}

const PRICING_TIERS: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter (Free)',
    price: 'Free',
    description: 'Perfect to get started with on-chain attestations.',
    features: [
      '5 Schemas',
      '50 Attestations / month',
      'Basic API Key',
      'Community Support',
    ],
    buttonText: 'Start for Free',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$19/mo',
    description: 'Ideal for growing DAOs and builders.',
    isPopular: true,
    features: [
      '20 Schemas',
      '500 Attestations / month',
      'Free $5 USDC Credits',
      'Priority Support',
    ],
    buttonText: 'Subscribe Now',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For scalable Web3 and AI agent platforms.',
    features: [
      'Unlimited Schemas',
      'Unlimited Attestations',
      'Custom SLA',
      'Dedicated Manager',
    ],
    buttonText: 'Contact Sales',
  },
];

export function PricingSection() {
  const { address, isConnected } = useAccount();
  const [loading, setLoading] = useState<string | null>(null);

  const handleSubscribe = async (tier: PricingTier) => {
    if (tier.id === 'enterprise') {
      window.location.href = '/contact-sales';
      return;
    }

    if (!isConnected) {
      toast.error('Please connect your wallet first.');
      return;
    }

    if (tier.id === 'starter') {
      toast.success('You are already on the Starter plan.');
      return;
    }

    setLoading(tier.id);
    try {
      // 1. Call Base Subscription via CDP/Web3
      const subResult = await subscribeToPlan(address!, tier.id);
      
      if (subResult.success) {
        // 2. Send to backend to store subscription
        const res = await fetch('/api/subscriptions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ tier: tier.id, subscriptionId: subResult.subscriptionId, address }),
        });
        const data = await res.json();
        if (data.success) {
          toast.success(`Successfully subscribed to ${tier.name} Plan!`);
        } else {
          throw new Error(data.error || 'Failed to save subscription');
        }
      }
    } catch (error: any) {
      toast.error(`Subscription failed: ${error.message}`);
    } finally {
      setLoading(null);
    }
  };

  return (
    <section className="py-24 px-4 w-full flex flex-col items-center">
      <div className="max-w-7xl w-full">
        <h2 className="text-4xl lg:text-6xl font-bahuss uppercase text-center mb-4">
          Simple Pricing. <br />
          <span className="text-accent-primary">No Bullshit.</span>
        </h2>
        <p className="text-center text-lg opacity-80 mb-16 max-w-2xl mx-auto">
          Choose a subscription plan below, or use our Pay-Per-Use model via the x402 Protocol perfectly suited for AI Agents and automated systems.
        </p>

        {/* Subscription Paths */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {PRICING_TIERS.map((tier) => (
            <Card
              key={tier.name}
              className={cn(
                'relative flex flex-col',
                tier.isPopular ? 'border-accent-primary md:-translate-y-4' : ''
              )}
            >
              {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-primary text-bg-base font-bold px-4 py-1 border-[3px] border-border-color shadow-[2px_2px_0px_0px_var(--border-color)]">
                  BEST VALUE
                </div>
              )}
              <CardHeader className="flex-1">
                <CardTitle>{tier.name}</CardTitle>
                {tier.price && (
                  <div className="text-4xl font-bold font-bahuss my-4">
                    {tier.price}
                  </div>
                )}
                {!tier.price && (
                  <div className="h-4 my-4" /> // spacing to maintain layout if needed, or just let it adjust
                )}
                <CardDescription className="text-base">
                  {tier.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-4">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 font-mono">
                      <div className="h-2 w-2 bg-accent-primary border border-border-color" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full uppercase font-bold"
                  variant={tier.isPopular ? 'default' : 'outline'}
                  onClick={() => handleSubscribe(tier)}
                  disabled={loading === tier.id}
                >
                  {loading === tier.id ? 'PROCESSING...' : tier.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Pay-Per-Use Path (x402) */}
        <div className="bg-text-primary text-bg-base p-8 md:p-12 border-[3px] border-border-color shadow-brutal-lg">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
             <div>
               <div className="inline-block px-3 py-1 bg-accent-primary text-bg-base font-bold font-mono text-sm uppercase mb-4 border-[2px] border-bg-base">Built for AI Agents</div>
               <h3 className="text-3xl md:text-5xl font-bahuss uppercase mb-4 text-bg-base">Pay-Per-Use (x402)</h3>
               <p className="text-lg opacity-90 mb-6 font-medium">
                 No subscription required. Pay exactly for what you use per API call using the x402 open standard.
               </p>
               <ul className="space-y-3 font-mono opacity-80 mb-8 max-w-md">
                 <li className="flex items-start gap-2"><span>•</span> Powered by gasless USDC Nanopayments (supports micro-transactions as low as $0.000001)</li>
                 <li className="flex items-start gap-2"><span>•</span> Transparent pay-per-use pricing: starting at just $0.01 per request.</li>
                 <li className="flex items-start gap-2"><span>•</span> HTTP 402 Standard</li>
                 <li className="flex items-start gap-2"><span>•</span> Off-chain signatures, batched on-chain</li>
               </ul>
               <Button className="bg-bg-base text-text-primary hover:bg-bg-base/90">VIEW x402 DOCS</Button>
             </div>
             <div className="bg-bg-base border-[3px] border-border-color p-4 font-mono text-xs text-text-primary overflow-hidden">
<pre className="opacity-80">
{`// Example API Request by Agent
GET /api/attestations/verify
Headers: { "PAYMENT-SIGNATURE": "0x..." }

// Response (if no signature)
402 Payment Required
{
  "price": "0.0001",
  "token": "USDC",
  "network": "base-sepolia",
  "merchantAddress": "0x..."
}`}
</pre>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}
