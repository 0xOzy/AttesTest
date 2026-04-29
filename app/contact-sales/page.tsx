'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { submitContactSales } from '@/app/actions/contact-sales';
import { toast } from 'sonner';

export default function ContactSalesPage() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.currentTarget);
    const result = await submitContactSales(formData);
    setLoading(false);
    
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success('Thanks for reaching out! Our team will contact you within 24 hours.');
      (event.target as HTMLFormElement).reset();
    }
  }

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 bg-bg-base">
      <Card className="max-w-xl w-full border-[4px] border-border-color shadow-brutal-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bahuss uppercase text-accent-primary">Contact Sales</CardTitle>
          <CardDescription className="text-lg opacity-80">
            Get an unlimited plan with a dedicated manager and SLA.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="text" name="honeypot" className="hidden" />
            
            <div className="space-y-2">
              <label className="font-bold font-mono text-sm uppercase">Name</label>
              <Input name="name" placeholder="John Doe" required className="border-[3px] h-12" />
            </div>
            
            <div className="space-y-2">
              <label className="font-bold font-mono text-sm uppercase">Email</label>
              <Input name="email" type="email" placeholder="john@company.com" required className="border-[3px] h-12" />
            </div>
            
            <div className="space-y-2">
              <label className="font-bold font-mono text-sm uppercase">Company</label>
              <Input name="company" placeholder="Example Corp" className="border-[3px] h-12" />
            </div>
            
            <div className="space-y-2">
              <label className="font-bold font-mono text-sm uppercase">Message</label>
              <textarea 
                name="message" 
                placeholder="Tell us about your needs..." 
                required 
                className="w-full flex min-h-[120px] bg-bg-base px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary disabled:cursor-not-allowed disabled:opacity-50 border-[3px] border-border-color"
              />
            </div>

            <Button type="submit" size="lg" className="w-full font-bold uppercase text-lg h-14" disabled={loading}>
              {loading ? 'SUBMITTING...' : 'SUBMIT REQUEST'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
