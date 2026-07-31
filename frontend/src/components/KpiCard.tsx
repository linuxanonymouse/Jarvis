"use client";

import { LucideIcon } from 'lucide-react';

interface KpiCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  trend: 'up' | 'down';
}

export default function KpiCard({ title, value, change, icon: Icon, trend }: KpiCardProps) {
  return (
    <div className="bg-panel border border-border rounded-xl p-6 hover:border-accent/40 transition-all duration-300 group">
      <div className="flex items-center justify-between mb-4">
        <span className="text-foreground/50 text-sm uppercase tracking-wider font-medium">{title}</span>
        <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
          <Icon className="text-accent" size={20} />
        </div>
      </div>
      <div className="flex items-end justify-between">
        <p className="text-3xl font-bold text-foreground">{value}</p>
        <span className={`text-sm font-medium ${trend === 'up' ? 'text-emerald-400' : 'text-red-400'}`}>
          {trend === 'up' ? '↑' : '↓'} {change}
        </span>
      </div>
    </div>
  );
}
