import { Settings, Cpu, HardDrive, Shield, Bell } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="p-8 h-full flex flex-col gap-8 max-w-4xl mx-auto">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-wider mb-2">System Prefs</h1>
          <p className="text-foreground/60">Configure Jarvis operating parameters.</p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <aside className="col-span-1 flex flex-col gap-2">
          {[
            { label: "Core", icon: Cpu, active: true },
            { label: "Storage", icon: HardDrive },
            { label: "Security", icon: Shield },
            { label: "Alerts", icon: Bell },
          ].map((item) => (
            <button
              key={item.label}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left ${
                item.active ? "bg-accent/10 text-accent border border-accent/20" : "text-foreground/60 hover:bg-panel hover:text-foreground"
              }`}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </aside>

        <div className="col-span-1 md:col-span-3 bg-panel border border-border rounded-xl p-6">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Cpu className="text-accent" /> Core Settings
          </h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground/80 mb-2">Voice Assistant Name</label>
              <input type="text" defaultValue="Jarvis" className="w-full bg-background border border-border rounded-lg px-4 py-2 focus:border-accent focus:outline-none" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground/80 mb-2">Response Verbosity</label>
              <select className="w-full bg-background border border-border rounded-lg px-4 py-2 focus:border-accent focus:outline-none appearance-none">
                <option>Concise</option>
                <option>Normal</option>
                <option>Detailed</option>
              </select>
            </div>
            
            <div className="pt-4 border-t border-border flex justify-end">
              <button className="px-6 py-2 bg-accent text-background font-bold rounded-lg hover:bg-accent/80 transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
