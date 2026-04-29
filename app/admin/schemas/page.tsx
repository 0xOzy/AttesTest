import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search } from 'lucide-react';

export default function AdminSchemasPage() {
  return (
    <div className="p-6 md:p-10 space-y-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-4xl font-bahuss uppercase mb-2">Schemas Moderation</h1>
          <p className="opacity-80">View all schemas across the platform.</p>
        </div>
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
                <TableHead>UID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Creator</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-mono text-xs opacity-80">0xabc...def</TableCell>
                <TableCell className="font-bold">Real Estate Deed</TableCell>
                <TableCell className="font-mono text-xs opacity-50">0x3b1c...2a4f</TableCell>
                <TableCell><Badge>ACTIVE</Badge></TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="outline" size="sm">VIEW</Button>
                    <Button variant="destructive" size="sm">SUSPEND FLAG</Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs opacity-80">0x123...456</TableCell>
                <TableCell className="font-bold">Malicious Scam</TableCell>
                <TableCell className="font-mono text-xs opacity-50">0x987...654</TableCell>
                <TableCell><Badge variant="destructive">SUSPENDED</Badge></TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="outline" size="sm">VIEW</Button>
                    <Button variant="outline" size="sm">RESTORE</Button>
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
