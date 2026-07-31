"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const taskData = [
  { name: 'System Optimization', value: 400 },
  { name: 'Email Processing', value: 300 },
  { name: 'Social Monitoring', value: 300 },
  { name: 'Security Scans', value: 200 },
];

const COLORS = ['#00d4ff', '#0077ff', '#0044ff', '#0011ff'];

const activityData = [
  { name: 'Mon', commands: 40 },
  { name: 'Tue', commands: 30 },
  { name: 'Wed', commands: 20 },
  { name: 'Thu', commands: 27 },
  { name: 'Fri', commands: 18 },
  { name: 'Sat', commands: 23 },
  { name: 'Sun', commands: 34 },
];

export function TaskDistribution() {
  return (
    <div className="bg-panel border border-border p-6 rounded-xl w-full h-[300px]">
      <h3 className="text-foreground/80 font-medium mb-4 uppercase tracking-wider text-sm">Task Distribution</h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={taskData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
            stroke="none"
          >
            {taskData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ backgroundColor: '#111', borderColor: '#222', color: '#fff' }}
            itemStyle={{ color: '#00d4ff' }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export function WeeklyActivity() {
  return (
    <div className="bg-panel border border-border p-6 rounded-xl w-full h-[300px]">
      <h3 className="text-foreground/80 font-medium mb-4 uppercase tracking-wider text-sm">Weekly Commands Processed</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={activityData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
          <XAxis dataKey="name" stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip 
            cursor={{ fill: '#222' }}
            contentStyle={{ backgroundColor: '#111', borderColor: '#222', color: '#fff' }}
          />
          <Bar dataKey="commands" fill="#00d4ff" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
