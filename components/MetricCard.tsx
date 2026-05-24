export function MetricCard({ title, value, unit, status, icon }: { title: string; value: string; unit?: string; status?: "ok" | "warn" | "danger"; icon?: React.ReactNode }) {
  const colors = { ok: "text-accent-success", warn: "text-accent-warning", danger: "text-accent-danger" };
  return (
    <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-5 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-2 mb-2">
        {icon && <span className="text-[var(--accent-primary)]">{icon}</span>}
        <p className="text-sm text-[var(--text-muted)]">{title}</p>
      </div>
      <div className="flex items-baseline gap-2">
        <span className={`text-2xl font-semibold ${status ? colors[status] : ""}`}>{value}</span>
        {unit && <span className="text-[var(--text-muted)] text-sm">{unit}</span>}
      </div>
    </div>
  );
}

