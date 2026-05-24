export function Header({ activeTab, onTabChange, onToggleTheme }: { activeTab: string; onTabChange: (tab: string) => void; onToggleTheme: () => void }) {
  const tabs = ["Dashboard", "Stories & Media", "About"];
  return (
    <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--accent-primary)]">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
          Optimum Validator Ops
        </h1>
        <p className="text-sm text-[var(--text-muted)] mt-1">mump2p performance, bandwidth tracking & project stories</p>
      </div>
      <div className="flex items-center gap-4">
        <nav className="flex bg-[var(--card)] border border-[var(--border)] rounded-lg p-1">
          {tabs.map(tab => (
            <button key={tab} onClick={() => onTabChange(tab)} className={`px-4 py-1.5 text-sm rounded-md transition-colors ${activeTab === tab ? "bg-[var(--accent-primary)] text-white" : "text-[var(--text-muted)] hover:text-[var(--text)]"}`}>
              {tab}
            </button>
          ))}
        </nav>
        <button onClick={onToggleTheme} className="p-2 bg-[var(--card)] border border-[var(--border)] rounded-lg hover:bg-[var(--bg)] transition" title="Toggle theme">
          {document?.documentElement?.getAttribute("data-theme") === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </header>
  );
}

