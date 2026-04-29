import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export default function AdminUsersPage() {
  return (
    <div className="p-6 md:p-10 space-y-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-4xl font-bahuss uppercase mb-2">Users Management</h1>
          <p className="opacity-80">View and manage platform users.</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-50" />
              <Input placeholder="Search users by address or email..." className="pl-9" />
            </div>
            <Button variant="outline">FILTER</Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Wallet Address</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Tier</TableHead>
                <TableHead>Credit Balance</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-mono text-xs opacity-80">0x3b1c...2a4f</TableCell>
                <TableCell><span className="px-2 py-1 bg-accent-primary text-bg-base font-bold text-xs uppercase">Admin</span></TableCell>
                <TableCell><span className="font-mono">PRO</span></TableCell>
                <TableCell className="font-mono">$2,540.00</TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="outline" size="sm">CHANGE ROLE</Button>
                    <Button variant="outline" size="sm">RESET SUB</Button>
                    <Button variant="destructive" size="sm">BAN</Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs opacity-80">0x8f9a...1b2c</TableCell>
                <TableCell><span className="px-2 py-1 border-[2px] border-border-color text-text-primary font-bold text-xs uppercase">User</span></TableCell>
                <TableCell><span className="font-mono">STARTER</span></TableCell>
                <TableCell className="font-mono">$10.00</TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="outline" size="sm">CHANGE ROLE</Button>
                    <Button variant="outline" size="sm">RESET SUB</Button>
                    <Button variant="destructive" size="sm">BAN</Button>
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
