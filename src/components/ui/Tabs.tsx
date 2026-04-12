import { useState } from 'react';

interface Tab {
  id: string;
  label: string;
  color: string;
  content: { name: string; description: string }[];
}

interface Props {
  tabs: Tab[];
  badge?: string;
}

export default function Tabs({ tabs, badge }: Props) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id ?? '');
  const active = tabs.find((t) => t.id === activeTab) ?? tabs[0];

  return (
    <div>
      {/* Tab buttons */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === tab.id
                ? 'text-white shadow-lg'
                : 'text-[#94a3b8] hover:text-[#f1f5f9] bg-white/5 hover:bg-white/8 border border-white/10'
            }`}
            style={
              activeTab === tab.id
                ? { backgroundColor: tab.color + '20', borderColor: tab.color + '40', border: `1px solid ${tab.color}40`, boxShadow: `0 0 20px ${tab.color}15` }
                : undefined
            }
          >
            {tab.label}
            <span className="ml-2 text-xs opacity-60">({tab.content.length})</span>
          </button>
        ))}
      </div>

      {/* Badge */}
      {badge && (
        <div className="flex justify-center mb-6">
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#8b5cf6]/10 text-[#a78bfa] border border-[#8b5cf6]/20">
            {badge}
          </span>
        </div>
      )}

      {/* Tab content */}
      {active && (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {active.content.map((tool) => (
            <div
              key={tool.name}
              className="group p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <div
                  className="mt-1 w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: active.color }}
                />
                <div>
                  <code className="text-sm font-mono font-medium text-[#f1f5f9]">{tool.name}</code>
                  <p className="mt-1 text-xs text-[#94a3b8] leading-relaxed">{tool.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
