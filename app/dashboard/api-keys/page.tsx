'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Key } from 'lucide-react';

export default function ApiKeysPage() {
  return (
    <div className="p-6 md:p-10 space-y-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
           <h1 className="text-4xl font-bahuss uppercase mb-2">API Keys</h1>
           <p className="opacity-80">Manage application keys for SDK integration.</p>
        </div>
        <Button>GENERATE NEW KEY</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Key className="w-5 h-5"/> Active Keys</CardTitle>
          <CardDescription>Keep these keys secret! Do not expose them in client-side code.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Key Prefix</TableHead>
                <TableHead>Scope</TableHead>
                <TableHead>Usage</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-bold">Production Backend</TableCell>
                <TableCell className="font-mono text-xs opacity-70">attk_live_a1b2...</TableCell>
                <TableCell><Badge>FULL ACCESS</Badge></TableCell>
                <TableCell className="font-mono">15,402 calls</TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="outline" size="sm">REVOKE</Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">Agent Sandbox</TableCell>
                <TableCell className="font-mono text-xs opacity-70">attk_test_x9z8...</TableCell>
                <TableCell><Badge variant="secondary">READ ONLY</Badge></TableCell>
                <TableCell className="font-mono">42 calls</TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="outline" size="sm">REVOKE</Button>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      {/* Usage Chart Placeholder */}
      <h2 className="text-2xl font-bahuss uppercase mt-12 mb-4">Usage (Last 7 Days)</h2>
      <Card>
         <CardContent className="h-64 flex items-center justify-center font-mono opacity-50">
            [ Chart Area - Not enough data ]
         </CardContent>
      </Card>
    </div>
  );
}
