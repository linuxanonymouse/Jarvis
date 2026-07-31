"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, AreaChart, Area } from 'recharts';

const emailData = [
  { name: 'Jan', sent: 120, received: 200 },
  { name: 'Feb', sent: 150, received: 180 },
  { name: 'Mar', sent: 180, received: 220 },
  { name: 'Apr', sent: 140, received: 250 },
  { name: 'May', sent: 200, received: 230 },
  { name: 'Jun', sent: 220, received: 260 },
];

const socialData = [
  { name: 'Jan', followers: 1200, engagement: 340 },
  { name: 'Feb', followers: 1500, engagement: 420 },
  { name: 'Mar', followers: 1800, engagement: 510 },
  { name: 'Apr', followers: 2200, engagement: 480 },
  { name: 'May', followers: 2800, engagement: 620 },
  { name: 'Jun', followers: 3400, engagement: 700 },
];

export function EmailTrends() {
  return (
    <div className="bg-panel border border-border p-6 rounded-xl w-full h-[300px]">
      <h3 className="text-foreground/80 font-medium mb-4 uppercase tracking-wider text-sm">Email Traffic</h3>
      <ResponsiveContainer width="100%" height="85%">
        <AreaChart data={emailData}>
          <defs>
            <linearGradient id="colorSent" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00d4ff" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#00d4ff" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorReceived" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0077ff" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#0077ff" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
          <XAxis dataKey="name" stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip
            contentStyle={{ backgroundColor: '#111', borderColor: '#222', color: '#fff', borderRadius: '8px' }}
          />
          <Area type="monotone" dataKey="sent" stroke="#00d4ff" fill="url(#colorSent)" strokeWidth={2} />
          <Area type="monotone" dataKey="received" stroke="#0077ff" fill="url(#colorReceived)" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function SocialGrowth() {
  return (
    <div className="bg-panel border border-border p-6 rounded-xl w-full h-[300px]">
      <h3 className="text-foreground/80 font-medium mb-4 uppercase tracking-wider text-sm">Social Growth</h3>
      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={socialData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
          <XAxis dataKey="name" stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip
            contentStyle={{ backgroundColor: '#111', borderColor: '#222', color: '#fff', borderRadius: '8px' }}
          />
          <Line type="monotone" dataKey="followers" stroke="#00d4ff" strokeWidth={2} dot={{ fill: '#00d4ff', r: 4 }} activeDot={{ r: 6 }} />
          <Line type="monotone" dataKey="engagement" stroke="#0077ff" strokeWidth={2} dot={{ fill: '#0077ff', r: 4 }} activeDot={{ r: 6 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
