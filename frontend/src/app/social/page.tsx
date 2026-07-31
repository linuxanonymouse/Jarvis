import { Share2, MessageSquare, Users, Code } from "lucide-react";

export default function SocialPage() {
  return (
    <div className="p-8 h-full flex flex-col gap-8">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-wider mb-2">Social Net</h1>
          <p className="text-foreground/60">Monitor and command connected platforms.</p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { name: "Twitter / X", icon: MessageSquare, status: "Connected", color: "text-blue-400" },
          { name: "LinkedIn", icon: Users, status: "Connected", color: "text-blue-600" },
          { name: "GitHub", icon: Code, status: "Syncing...", color: "text-gray-300" },
        ].map((platform) => (
          <div key={platform.name} className="bg-panel border border-border rounded-xl p-6 flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <platform.icon size={32} className={platform.color} />
              <span className="px-2 py-1 bg-background rounded-md text-xs font-medium border border-border">
                {platform.status}
              </span>
            </div>
            <h3 className="text-xl font-bold">{platform.name}</h3>
            <div className="h-2 bg-background rounded-full overflow-hidden">
              <div className="h-full bg-accent w-3/4" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex-1 bg-panel border border-border rounded-xl flex items-center justify-center mt-4">
        <div className="text-center text-foreground/40">
          <Share2 size={48} className="mx-auto mb-4 opacity-50" />
          <p className="text-xl">Feed aggregation offline</p>
          <p className="text-sm mt-2">Awaiting API keys.</p>
        </div>
      </div>
    </div>
  );
}
