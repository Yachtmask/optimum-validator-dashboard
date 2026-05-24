"use client";
import { useState, useEffect } from "react";

export default function Page() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Mock data - works without Prometheus
    setData({
      latency: { p50: 0.082, p95: 0.148, p99: 0.310 },
      bandwidth: { savingsPercent: 94.2 },
      mesh: { health: 0.87 },
      packetLoss: { lostPerSec: 12, recoveredPerSec: 11 },
      regionLatency: [
        { region: "us-east", avg: 0.075 },
        { region: "eu-west", avg: 0.142 },
        { region: "ap-south", avg: 0.218 }
      ],
      history: Array.from({ length: 20 }, (_, i) => ({
        time: `T-${19 - i}s`,
        latency: 0.12 + Math.random() * 0.08
      })),
      stories: [
        { id: 1, title: "MIT Research Breakthrough", summary: "RLNC for blockchain: 6-20x faster, 95% less bandwidth.", tags: ["Research"], image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=800", date: "2024-03-15" },
        { id: 2, title: "Hoodi Testnet Launch", summary: "mump2p live: ~150ms propagation vs ~1s gossipsub.", tags: ["Testnet"], image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=800", date: "2024-05-10" }
      ]
    });
    setLoading(false);
    const saved = localStorage.getItem("optimum-theme");
    if (saved) setTheme(saved);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("optimum-theme", next);
    document.documentElement.setAttribute("data-theme", next);
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">Loading...</div>;

  return (
    <main className={`min-h-screen p-4 md:p-8 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-xl md:text-2xl font-bold">⚡ Optimum Validator Ops</h1>
          <p className="text-sm opacity-70">mump2p metrics + project stories</p>
        </div>
        <div className="flex gap-2">
          {["Dashboard", "Stories", "About"].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`px-3 py-1.5 rounded text-sm ${activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-800/50"}`}>{tab}</button>
          ))}
          <button onClick={toggleTheme} className="px-3 py-1.5 rounded bg-gray-800/50">{theme === "dark" ? "☀️" : "🌙"}</button>
        </div>
      </header>

      {/* Dashboard Tab */}
      {activeTab === "Dashboard" && data && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <p className="text-xs opacity-70">Latency p95</p>
              <p className="text-lg font-bold">{(data.latency.p95 * 1000).toFixed(0)}ms</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <p className="text-xs opacity-70">Bandwidth Savings</p>
              <p className="text-lg font-bold text-green-400">{data.bandwidth.savingsPercent}%</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <p className="text-xs opacity-70">Mesh Health</p>
              <p className="text-lg font-bold">{(data.mesh.health * 100).toFixed(0)}%</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <p className="text-xs opacity-70">Packet Recovery</p>
              <p className="text-lg font-bold">{((data.packetLoss.recoveredPerSec / (data.packetLoss.lostPerSec + data.packetLoss.recoveredPerSec)) * 100).toFixed(0)}%</p>
            </div>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <p className="font-semibold mb-2">📈 Latency Trend</p>
            <div className="h-32 flex items-end gap-1">
              {data.history.map((h: any, i: number) => (
                <div key={i} className="flex-1 bg-blue-500 rounded-t" style={{ height: `${h.latency * 300}px` }} title={`${h.time}: ${(h.latency * 1000).toFixed(0)}ms`} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Stories Tab */}
      {activeTab === "Stories" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data?.stories?.map((story: any) => (
            <div key={story.id} className="bg-gray-800/50 rounded-lg overflow-hidden">
              <img src={story.image} alt={story.title} className="w-full h-32 object-cover" />
              <div className="p-4">
                <div className="flex gap-2 mb-2">{story.tags.map((t: string) => <span key={t} className="text-xs bg-blue-600/20 text-blue-400 px-2 py-0.5 rounded">{t}</span>)}</div>
                <h3 className="font-semibold">{story.title}</h3>
                <p className="text-sm opacity-70">{story.summary}</p>
                <p className="text-xs opacity-50 mt-2">{story.date}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* About Tab */}
      {activeTab === "About" && (
        <div className="bg-gray-800/50 p-4 rounded-lg space-y-3">
          <h2 className="text-lg font-bold">About This Dashboard</h2>
          <p className="text-sm opacity-70">Built to monitor mump2p performance for Ethereum validators. Mock data by default — connect Prometheus for live metrics.</p>
          <div className="text-xs opacity-50">
            <p>🔗 <a href="https://www.getoptimum.xyz" className="text-blue-400">getoptimum.xyz</a></p>
            <p>📦 <a href="https://github.com/Yachtmask/optimum-validator-dashboard" className="text-blue-400">GitHub Repo</a></p>
          </div>
        </div>
      )}
    </main>
  );
}

