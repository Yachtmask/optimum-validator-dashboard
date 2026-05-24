export function AboutContent() {
  return (
    <div className="max-w-3xl space-y-6">
      <section className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6 fade-in">
        <h2 className="text-xl font-semibold mb-3">🚀 About This Dashboard</h2>
        <p className="text-sm text-[var(--text-muted)] mb-4">
          Built to help Ethereum validators monitor <a href="https://docs.getoptimum.xyz" target="_blank" className="text-[var(--accent-primary)] hover:underline">mump2p</a> performance metrics, quantify bandwidth savings vs legacy gossipsub, and track Optimum's development milestones.
        </p>
        <p className="text-sm text-[var(--text-muted)]">
          This dashboard uses mock data by default. Swap the <code>/api/metrics</code> endpoint with your Prometheus/GraphQL source to connect to live flexnode telemetry.
        </p>
      </section>

      <section className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6 fade-in">
        <h2 className="text-xl font-semibold mb-3">🔧 Tech Stack</h2>
        <ul className="text-sm text-[var(--text-muted)] space-y-2 list-disc list-inside">
          <li><strong>Next.js 14</strong> (App Router, Server/Client Components)</li>
          <li><strong>Tailwind CSS</strong> (Custom theme, Dark/Light mode)</li>
          <li><strong>Recharts</strong> (Responsive, animated charts)</li>
          <li><strong>Lucide</strong> (Consistent iconography)</li>
          <li><strong>TypeScript</strong> (Type safety, easy maintenance)</li>
          <li><strong>Vercel</strong> (Zero-config deployment, global CDN)</li>
        </ul>
      </section>

      <section className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6 fade-in">
        <h2 className="text-xl font-semibold mb-3">📈 Roadmap</h2>
        <div className="space-y-3 text-sm text-[var(--text-muted)]">
          <div className="flex items-start gap-2"><span className="text-[var(--accent-success)]">✅</span><span>Core metrics dashboard (latency, bandwidth, mesh)</span></div>
          <div className="flex items-start gap-2"><span className="text-[var(--accent-success)]">✅</span><span>Stories & Media hub with tag filtering</span></div>
          <div className="flex items-start gap-2"><span className="text-[var(--accent-success)]">✅</span><span>Dark/Light theme toggle + responsive design</span></div>
          <div className="flex items-start gap-2"><span className="text-[var(--accent-primary)]">◻️</span><span>OpenTelemetry trace visualization page</span></div>
          <div className="flex items-start gap-2"><span className="text-[var(--accent-primary)]">◻️</span><span>Real Prometheus API integration + auth</span></div>
          <div className="flex items-start gap-2"><span className="text-[var(--accent-primary)]">◻️</span><span>CSV export & alert thresholds</span></div>
        </div>
      </section>

      <div className="text-center pt-4 text-xs text-[var(--text-muted)]">
        <p>Built as an open-source contribution project. Licensed under MIT.</p>
        <p className="mt-1">🔗 <a href="https://www.getoptimum.xyz" target="_blank" className="text-[var(--accent-primary)] hover:underline">getoptimum.xyz</a> · <a href="https://github.com/getoptimum" target="_blank" className="text-[var(--accent-primary)] hover:underline">GitHub</a></p>
      </div>
    </div>
  );
}

