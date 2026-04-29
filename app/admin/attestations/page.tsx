import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search } from 'lucide-react';

export default function AdminAttestationsPage() {
  return (
    <div className="p-6 md:p-10 space-y-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-4xl font-bahuss uppercase mb-2">Attestations Monitor</h1>
          <p className="opacity-80">Track created attestations across the network.</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-50" />
              <Input placeholder="Search attestations by UID..." className="pl-9" />
            </div>
            <Button variant="outline">FILTER</Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Attestation UID</TableHead>
                <TableHead>Issuer</TableHead>
                <TableHead>Recipient</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-mono text-xs opacity-80">0xffff...eeee</TableCell>
                <TableCell className="font-mono text-xs opacity-50">0x3b1c...2a4f</TableCell>
                <TableCell className="font-mono text-xs opacity-50">0x0000...1111</TableCell>
                <TableCell><Badge>CONFIRMED</Badge></TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                     <Button variant="outline" size="sm">VIEW DETAILS</Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs opacity-80">0xaaaa...bbbb</TableCell>
                <TableCell className="font-mono text-xs opacity-50">0x3b1c...2a4f</TableCell>
                <TableCell className="font-mono text-xs opacity-50">0x2222...3333</TableCell>
                <TableCell><Badge variant="destructive">REVOKED</Badge></TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                     <Button variant="outline" size="sm">VIEW DETAILS</Button>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
