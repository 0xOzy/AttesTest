import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

export default function AdminAuditLogPage() {
  return (
    <div className="p-6 md:p-10 space-y-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-4xl font-bahuss uppercase mb-2">Audit Logs</h1>
          <p className="opacity-80">Track administrative actions and system events.</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-50" />
              <Input placeholder="Search logs..." className="pl-9" />
            </div>
            <Button variant="outline">FILTER</Button>
          </div>
        </CardHeader>
        <CardContent>
           <Table>
             <TableHeader>
               <TableRow>
                 <TableHead>Event</TableHead>
                 <TableHead>Admin Wallet</TableHead>
                 <TableHead>Target</TableHead>
                 <TableHead className="text-right">Timestamp</TableHead>
               </TableRow>
             </TableHeader>
             <TableBody>
               <TableRow>
                 <TableCell><Badge variant="destructive">USER BANNED</Badge></TableCell>
                 <TableCell className="font-mono text-xs opacity-70">0xadmin...123</TableCell>
                 <TableCell className="font-mono text-xs opacity-70">0xspam...456</TableCell>
                 <TableCell className="text-right font-mono text-sm opacity-80">2026-04-29 10:45 AM</TableCell>
               </TableRow>
               <TableRow>
                 <TableCell><Badge variant="outline">SCHEMA SUSPENDED</Badge></TableCell>
                 <TableCell className="font-mono text-xs opacity-70">0xadmin...123</TableCell>
                 <TableCell className="font-mono text-xs opacity-70">Schema: 0x123...456</TableCell>
                 <TableCell className="text-right font-mono text-sm opacity-80">2026-04-28 02:15 PM</TableCell>
               </TableRow>
             </TableBody>
           </Table>
        </CardContent>
      </Card>
    </div>
  );
}
