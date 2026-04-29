'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StatCard } from '@/components/ui/stat-card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, FileQuestion, UsersRound, PieChart } from 'lucide-react';

export default function AdminLeadsPage() {
  const [selectedLead, setSelectedLead] = useState<any>(null);

  return (
    <div className="p-6 md:p-10 space-y-8 max-w-7xl mx-auto">
      <div>
        <h1 className="text-4xl font-bahuss uppercase mb-2 text-red-500">Enterprise Leads</h1>
        <p className="opacity-80">Track and manage sales contacts.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
         <StatCard title="Total Leads" value="12" icon={Users} />
         <StatCard title="New (This Month)" value="4" icon={FileQuestion} />
         <StatCard title="Open Leads" value="3" icon={UsersRound} />
         <StatCard title="Conversion Rate" value="15%" icon={PieChart} />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Sales Contacts</CardTitle>
        </CardHeader>
        <CardContent>
           <Table>
             <TableHeader>
               <TableRow>
                 <TableHead>Name</TableHead>
                 <TableHead>Email</TableHead>
                 <TableHead>Company</TableHead>
                 <TableHead>Status</TableHead>
                 <TableHead className="text-right">Actions</TableHead>
               </TableRow>
             </TableHeader>
             <TableBody>
               <TableRow>
                 <TableCell className="font-bold">Alice Builder</TableCell>
                 <TableCell className="font-mono text-xs opacity-80">alice@web3dao.com</TableCell>
                 <TableCell className="opacity-80">Web3 DAO</TableCell>
                 <TableCell><Badge className="bg-[#E03C31] border-[#E03C31] text-white">NEW</Badge></TableCell>
                 <TableCell className="text-right">
                    <Button variant="outline" size="sm" onClick={() => setSelectedLead({ name: 'Alice Builder' })}>VIEW</Button>
                 </TableCell>
               </TableRow>
               <TableRow>
                 <TableCell className="font-bold">Bob Corp</TableCell>
                 <TableCell className="font-mono text-xs opacity-80">bob@enterprise.io</TableCell>
                 <TableCell className="opacity-80">Enterprise IO</TableCell>
                 <TableCell><Badge className="bg-[#FFD700] border-[#FFD700] text-black">CONTACTED</Badge></TableCell>
                 <TableCell className="text-right">
                    <Button variant="outline" size="sm" onClick={() => setSelectedLead({ name: 'Bob Corp' })}>VIEW</Button>
                 </TableCell>
               </TableRow>
               <TableRow>
                 <TableCell className="font-bold">Charlie Scale</TableCell>
                 <TableCell className="font-mono text-xs opacity-80">charlie@agent.ai</TableCell>
                 <TableCell className="opacity-80">Agent AI</TableCell>
                 <TableCell><Badge variant="secondary">CLOSED</Badge></TableCell>
                 <TableCell className="text-right">
                    <Button variant="outline" size="sm" onClick={() => setSelectedLead({ name: 'Charlie Scale' })}>VIEW</Button>
                 </TableCell>
               </TableRow>
             </TableBody>
           </Table>
        </CardContent>
      </Card>

      {selectedLead && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-lg border-[3px] border-border-color shadow-[4px_4px_0px_var(--border-color)]">
            <CardHeader className="flex flex-row items-center justify-between">
               <CardTitle>Lead Details</CardTitle>
               <Button variant="outline" size="sm" onClick={() => setSelectedLead(null)}>X</Button>
            </CardHeader>
            <CardContent className="space-y-4">
               <div>
                  <label className="font-bold text-xs uppercase opacity-80">Message</label>
                  <p className="p-3 bg-bg-base border-[3px] border-border-color font-mono text-sm">
                    Hello, we want to upgrade to Enterprise for unlimited schemas!
                  </p>
               </div>
               <div className="space-y-2">
                 <label className="font-bold text-xs uppercase opacity-80">Update Status</label>
                 <select className="flex h-10 w-full rounded-md border-[3px] border-border-color bg-bg-base px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                   <option>NEW</option>
                   <option>CONTACTED</option>
                   <option>CLOSED</option>
                 </select>
               </div>
               <div className="space-y-2">
                 <label className="font-bold text-xs uppercase opacity-80">Admin Notes</label>
                 <textarea className="flex h-20 w-full border-[3px] border-border-color bg-bg-base px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none"></textarea>
               </div>
               <Button className="w-full">SAVE LEAD</Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
