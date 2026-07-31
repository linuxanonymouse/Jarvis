"use client";

import { Home, Mail, Share2, Settings, Command } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar({ closeSidebar }: { closeSidebar?: () => void }) {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Dashboard', icon: Home },
    { href: '/emails', label: 'Comm-Link', icon: Mail },
    { href: '/social', label: 'Social Net', icon: Share2 },
  ];

  return (
    <aside className="w-64 h-full bg-panel border-r border-border p-6 flex flex-col justify-between shrink-0 relative z-10">
      <div>
        <div className="flex items-center justify-between gap-3 mb-12 text-accent">
          <div className="flex items-center gap-3">
            <Command size={32} />
            <h1 className="text-2xl font-bold tracking-widest uppercase">Jarvis</h1>
          </div>
        </div>
        
        <nav className="space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeSidebar}
                className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'text-accent bg-accent/10 border border-accent/20'
                    : 'text-foreground/50 hover:text-accent hover:bg-accent/10 border border-transparent'
                }`}
              >
                <item.icon size={20} />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div>
        <Link
          href="/settings"
          className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300 cursor-pointer ${
            pathname === '/settings'
              ? 'text-accent bg-accent/10 border border-accent/20'
              : 'text-foreground/50 hover:text-accent hover:bg-accent/10 border border-transparent'
          }`}
        >
          <Settings size={20} />
          <span className="font-medium">System Prefs</span>
        </Link>
      </div>
    </aside>
  );
}
