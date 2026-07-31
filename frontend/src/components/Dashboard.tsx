"use client";

import dynamic from 'next/dynamic';
import KpiCard from '@/components/KpiCard';
import { TaskDistribution, WeeklyActivity } from '@/components/DashboardCharts';
import { EmailTrends, SocialGrowth } from '@/components/AdvancedCharts';
import { Activity, Mail, Users, Zap } from 'lucide-react';

const JarvisCore = dynamic(() => import('@/components/JarvisCore'), { ssr: false });

export default function DashboardPage() {
  return (
    <div className="flex-1 overflow-y-auto p-8 space-y-8">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <KpiCard title="Commands" value="1,247" change="12.5%" icon={Activity} trend="up" />
        <KpiCard title="Emails Handled" value="832" change="8.3%" icon={Mail} trend="up" />
        <KpiCard title="Social Reach" value="24.5K" change="15.2%" icon={Users} trend="up" />
        <KpiCard title="AI Uptime" value="99.97%" change="0.01%" icon={Zap} trend="down" />
      </div>

      {/* Jarvis Core 3D Element */}
      <div className="bg-panel border border-border rounded-xl overflow-hidden h-[350px] relative">
        <JarvisCore />
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TaskDistribution />
        <WeeklyActivity />
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <EmailTrends />
        <SocialGrowth />
      </div>

      {/* Recent Activity Table */}
      <div className="bg-panel border border-border rounded-xl p-6">
        <h3 className="text-foreground/80 font-medium mb-6 uppercase tracking-wider text-sm">Recent System Logs</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-3 text-foreground/40 text-xs uppercase tracking-wider font-medium">Timestamp</th>
                <th className="pb-3 text-foreground/40 text-xs uppercase tracking-wider font-medium">Module</th>
                <th className="pb-3 text-foreground/40 text-xs uppercase tracking-wider font-medium">Action</th>
                <th className="pb-3 text-foreground/40 text-xs uppercase tracking-wider font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-border/50 hover:bg-accent/5 transition-colors">
                <td className="py-4 text-foreground/60 font-mono text-xs">2026-07-31 20:45:12</td>
                <td className="py-4 text-foreground/80">Voice Assistant</td>
                <td className="py-4 text-foreground/60">Processed command: &quot;Schedule meeting&quot;</td>
                <td className="py-4"><span className="px-2 py-1 rounded-full text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Success</span></td>
              </tr>
              <tr className="border-b border-border/50 hover:bg-accent/5 transition-colors">
                <td className="py-4 text-foreground/60 font-mono text-xs">2026-07-31 20:42:08</td>
                <td className="py-4 text-foreground/80">Email Engine</td>
                <td className="py-4 text-foreground/60">Auto-replied to 3 messages</td>
                <td className="py-4"><span className="px-2 py-1 rounded-full text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Success</span></td>
              </tr>
              <tr className="border-b border-border/50 hover:bg-accent/5 transition-colors">
                <td className="py-4 text-foreground/60 font-mono text-xs">2026-07-31 20:38:55</td>
                <td className="py-4 text-foreground/80">Social Monitor</td>
                <td className="py-4 text-foreground/60">Analyzed sentiment on 12 posts</td>
                <td className="py-4"><span className="px-2 py-1 rounded-full text-xs bg-accent/10 text-accent border border-accent/20">Running</span></td>
              </tr>
              <tr className="border-b border-border/50 hover:bg-accent/5 transition-colors">
                <td className="py-4 text-foreground/60 font-mono text-xs">2026-07-31 20:35:30</td>
                <td className="py-4 text-foreground/80">Security</td>
                <td className="py-4 text-foreground/60">Threat scan completed — 0 issues</td>
                <td className="py-4"><span className="px-2 py-1 rounded-full text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Success</span></td>
              </tr>
              <tr className="hover:bg-accent/5 transition-colors">
                <td className="py-4 text-foreground/60 font-mono text-xs">2026-07-31 20:30:10</td>
                <td className="py-4 text-foreground/80">Voice Assistant</td>
                <td className="py-4 text-foreground/60">Failed to parse: &quot;dlajflasdj&quot;</td>
                <td className="py-4"><span className="px-2 py-1 rounded-full text-xs bg-red-500/10 text-red-400 border border-red-500/20">Error</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
