import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function SettingsPage() {
  return (
    <div className="p-6 md:p-10 space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-4xl font-bahuss uppercase mb-2">Settings</h1>
        <p className="opacity-80">Manage your profile and preferences.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>Update your public informations.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
           <div className="space-y-2">
             <label className="font-bold text-sm uppercase">Display Name</label>
             <Input placeholder="Enter your display name" />
           </div>
           <div className="space-y-2">
             <label className="font-bold text-sm uppercase">Email (Optional)</label>
             <Input placeholder="Enter your email" type="email" />
           </div>
           <Button>SAVE CHANGES</Button>
        </CardContent>
      </Card>
    </div>
  );
}
