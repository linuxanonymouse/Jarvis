import { Mic, Bell, Menu } from 'lucide-react';

export default function Header({ onMenuClick }: { onMenuClick?: () => void }) {
  return (
    <header className="h-20 border-b border-border bg-background/80 backdrop-blur-md flex items-center justify-between px-4 md:px-8 relative z-10">
      <div className="flex items-center gap-4">
        {onMenuClick && (
          <button 
            onClick={onMenuClick}
            className="md:hidden p-2 text-foreground/60 hover:text-accent transition-colors"
          >
            <Menu size={24} />
          </button>
        )}
        <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center relative overflow-hidden hidden sm:flex">
          <div className="absolute inset-0 bg-accent animate-pulse opacity-20"></div>
          <Mic className="text-accent relative z-10" size={20} />
        </div>
        <div>
          <h2 className="text-foreground font-semibold text-base sm:text-lg">System Listening...</h2>
          <p className="text-accent text-sm flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent animate-ping inline-block"></span>
            Online
          </p>
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <button className="text-foreground/60 hover:text-accent transition-colors relative">
          <Bell size={24} />
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-accent"></span>
        </button>
        <div className="h-10 w-10 rounded-full bg-border overflow-hidden border border-accent/30">
          <img src="https://ui-avatars.com/api/?name=Admin&background=111111&color=00d4ff" alt="Admin" />
        </div>
      </div>
    </header>
  );
}
