import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search } from 'lucide-react';

export default function SchemasPage() {
  return (
    <div className="p-6 md:p-10 space-y-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-4xl font-bahuss uppercase mb-2">Schemas</h1>
          <p className="opacity-80">Manage your created schemas and view usage statistics.</p>
        </div>
        <Button>CREATE NEW SCHEMA</Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-50" />
              <Input placeholder="Search schemas..." className="pl-9" />
            </div>
            <Button variant="outline">FILTER</Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>UID</TableHead>
                <TableHead>Attestations</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-bold">KYC Verification</TableCell>
                <TableCell className="font-mono text-xs opacity-70">0x3b1c...2a4f</TableCell>
                <TableCell className="font-mono">1,245</TableCell>
                <TableCell><Badge>ACTIVE</Badge></TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="outline" size="sm">VIEW</Button>
                    <Button size="sm">ISSUE</Button>
                    <Button variant="destructive" size="sm">SUSPEND</Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">Event Ticketing</TableCell>
                <TableCell className="font-mono text-xs opacity-70">0x8f9a...1b2c</TableCell>
                <TableCell className="font-mono">8,921</TableCell>
                <TableCell><Badge>ACTIVE</Badge></TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="outline" size="sm">VIEW</Button>
                    <Button size="sm">ISSUE</Button>
                    <Button variant="destructive" size="sm">SUSPEND</Button>
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
