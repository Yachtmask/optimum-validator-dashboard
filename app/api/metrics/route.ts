import { NextResponse } from "next/server";

export async function GET() {
  const now = Date.now();
  return NextResponse.json({
    timestamp: now,
    latency: { p50: 0.082, p95: 0.148, p99: 0.310 },
    bandwidth: { gossipsubMB: 142.5, mump2pMB: 8.3, savingsPercent: 94.2 },
    mesh: { connected: 28, target: 32, health: 0.87 },
    packetLoss: { lostPerSec: 12, recoveredPerSec: 11 },
    regionLatency: [
      { region: "us-east", avg: 0.075 },
      { region: "eu-west", avg: 0.142 },
      { region: "ap-south", avg: 0.218 },
      { region: "sa-east", avg: 0.195 }
    ],
    history: Array.from({ length: 20 }, (_, i) => ({
      time: `T-${19 - i}s`,
      latency: 0.12 + Math.random() * 0.08,
      bandwidth: 8 + Math.random() * 2,
      mesh: 26 + Math.random() * 6
    })),
    stories: [
      {
        id: 1,
        title: "MIT Research Breakthrough",
        summary: "Random Linear Network Coding (RLNC) adapted for blockchain data propagation — achieving 6-20x faster delivery with 95% less bandwidth.",
        tags: ["Research", "RLNC"],
        image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=800",
        date: "2024-03-15"
      },
      {
        id: 2,
        title: "Hoodi Testnet Launch",
        summary: "mump2p goes live on Ethereum Hoodi testnet. Early validators report 150ms average block propagation vs ~1s on gossipsub.",
        tags: ["Milestone", "Testnet"],
        image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=800",
        date: "2024-05-10"
      },
      {
        id: 3,
        title: "Validator Economics Deep Dive",
        summary: "How reducing missed attestations and capturing MEV opportunities directly increases validator APY. Data-driven analysis from real testnet runs.",
        tags: ["Economics", "Validation"],
        image: "https://images.unsplash.com/photo-1642104704074-907c0698b98d?auto=format&fit=crop&w=800",
        date: "2024-06-22"
      },
      {
        id: 4,
        title: "DeRAM Architecture Preview",
        summary: "First look at Optimum's decentralized read-write memory layer. How mump2p's fast gossip enables novel consensus primitives.",
        tags: ["DeRAM", "Future"],
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800",
        date: "2024-07-08"
      },
      {
        id: 5,
        title: "Community Contributor Spotlight",
        summary: "Highlighting developers building monitoring tools, SDKs, and validator guides. Open-source is core to Optimum's growth.",
        tags: ["Community", "Open Source"],
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800",
        date: "2024-07-25"
      }
    ]
  });
}

