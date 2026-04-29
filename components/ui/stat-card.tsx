import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: LucideIcon;
  description?: string;
  className?: string;
  valueClassName?: string;
}

export function StatCard({ title, value, icon: Icon, description, className, valueClassName }: StatCardProps) {
  return (
    <Card className={cn('', className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium opacity-80 font-mono uppercase">
          {title}
        </CardTitle>
        {Icon && <Icon className="h-4 w-4 text-border-color opacity-80" />}
      </CardHeader>
      <CardContent>
        <div className={cn("text-3xl font-bold font-bahuss uppercase", valueClassName)}>{value}</div>
        {description && (
          <p className="text-xs font-mono opacity-60 mt-1">
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
