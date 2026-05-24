"use client";

import { useState } from "react";
import { Activity, Zap, Network, AlertTriangle, Globe } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, AreaChart, Area } from "recharts";
import { MetricCard } from "./MetricCard";

interface Metrics {
  latency: { p50: number; p95: number; p99: number };
  bandwidth: { gossipsubMB: number; mump2pMB: number; savingsPercent: number };
  mesh: { connected: number; target: number; health: number };
  packetLoss: { lostPerSec: number; recoveredPerSec: number };
  regionLatency: { region: string; avg: number }[];
  history: { time: string; latency: number; bandwidth: number; mesh: number }[];
}

export function DashboardContent({ data }: { data: Metrics }) {
  const recoveryRate = ((data.packetLoss.recoveredPerSec / (data.packetLoss.lostPerSec + data.packetLoss.recoveredPerSec)) * 100).toFixed(1);
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard title="Propagation Latency (p95)" value={`${(data.latency.p95 * 1000).toFixed(0)}`} unit="ms" status="ok" icon={<Zap size={16} />} />
        <MetricCard title="Bandwidth Savings" value={`${data.bandwidth.savingsPercent.toFixed(1)}`} unit="%" status="ok" icon={<Activity size={16} />} />
        <MetricCard title="Mesh Health" value={`${(data.mesh.health * 100).toFixed(0)}`} unit="%" status={data.mesh.health > 0.8 ? "ok" : "warn"} icon={<Network size={16} />} />
        <MetricCard title="Packet Recovery" value={`${recoveryRate}`} unit="%" status="ok" icon={<AlertTriangle size={16} />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-[var(--card)] border border-[var(--border)] rounded-xl p-5 fade-in">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2"><Activity size={18} className="text-[var(--accent-primary)]" /> Latency Over Time</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data.history}>
                <XAxis dataKey="time" stroke="var(--text-muted)" fontSize={12} />
                <YAxis stroke="var(--text-muted)" fontSize={12} domain={[0, 0.3]} />
                <Tooltip contentStyle={{ backgroundColor: "var(--card)", border: "1px solid var(--border)", borderRadius: "8px" }} />
                <Area type="monotone" dataKey="latency" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.15} strokeWidth={2} dot={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-5 fade-in">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2"><Globe size={18} className="text-[var(--accent-primary)]" /> Regional Latency</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.regionLatency}>
                <XAxis dataKey="region" stroke="var(--text-muted)" fontSize={12} />
                <YAxis stroke="var(--text-muted)" fontSize={12} domain={[0, 0.25]} />
                <Tooltip contentStyle={{ backgroundColor: "var(--card)", border: "1px solid var(--border)", borderRadius: "8px" }} />
                <Bar dataKey="avg" fill="#10B981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-5 fade-in">
        <h2 className="text-lg font-semibold mb-2 flex items-center gap-2"><AlertTriangle size={18} className="text-[var(--accent-warning)]" /> Validator Impact Notes</h2>
        <ul className="text-sm text-[var(--text-muted)] space-y-2 list-disc list-inside">
          <li>p95 latency <150ms → reduces missed attestation risk by ~60%</li>
          <li>Bandwidth savings directly lower egress costs for cloud-hosted validators</li>
          <li>Mesh health >85% ensures stable RLNC shard distribution</li>
          <li>Connect real Prometheus endpoint by replacing <code>/api/metrics</code> fetch</li>
        </ul>
      </div>
    </div>
  );
}

