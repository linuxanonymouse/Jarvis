import { Mail, Search, Inbox, Send, Star, Trash } from "lucide-react";

export default function EmailsPage() {
  return (
    <div className="p-8 h-full flex flex-col gap-8">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-wider mb-2">Comm-Link</h1>
          <p className="text-foreground/60">Manage incoming and outgoing communications.</p>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40" size={20} />
          <input
            type="text"
            placeholder="Search comms..."
            className="bg-panel border border-border rounded-lg pl-10 pr-4 py-2 w-64 focus:outline-none focus:border-accent transition-colors"
          />
        </div>
      </header>

      <div className="flex gap-6 flex-1 min-h-0">
        <aside className="w-64 bg-panel border border-border rounded-xl p-4 flex flex-col gap-2">
          <button className="flex items-center gap-3 px-4 py-3 bg-accent/10 text-accent rounded-lg border border-accent/20">
            <Inbox size={20} />
            <span className="font-medium">Inbox</span>
            <span className="ml-auto bg-accent text-background text-xs font-bold px-2 py-0.5 rounded-full">12</span>
          </button>
          <button className="flex items-center gap-3 px-4 py-3 text-foreground/60 hover:text-accent hover:bg-accent/5 rounded-lg transition-colors">
            <Star size={20} />
            <span className="font-medium">Starred</span>
          </button>
          <button className="flex items-center gap-3 px-4 py-3 text-foreground/60 hover:text-accent hover:bg-accent/5 rounded-lg transition-colors">
            <Send size={20} />
            <span className="font-medium">Sent</span>
          </button>
          <button className="flex items-center gap-3 px-4 py-3 text-foreground/60 hover:text-accent hover:bg-accent/5 rounded-lg transition-colors mt-auto">
            <Trash size={20} />
            <span className="font-medium">Trash</span>
          </button>
        </aside>

        <div className="flex-1 bg-panel border border-border rounded-xl flex items-center justify-center">
          <div className="text-center text-foreground/40">
            <Mail size={48} className="mx-auto mb-4 opacity-50" />
            <p className="text-xl">Comm-Link Interface Offline</p>
            <p className="text-sm mt-2">Awaiting backend integration.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
