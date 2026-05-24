"use client";

import { useState } from "react";
import { StoryCard } from "./StoryCard";

interface Story {
  id: number;
  title: string;
  summary: string;
  tags: string[];
  image: string;
  date: string;
}

export function StoriesContent({ stories }: { stories: Story[] }) {
  const [filter, setFilter] = useState("All");
  const allTags = ["All", ...Array.from(new Set(stories.flatMap(s => s.tags)))];
  const filtered = filter === "All" ? stories : stories.filter(s => s.tags.includes(filter));

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {allTags.map(tag => (
          <button key={tag} onClick={() => setFilter(tag)} className={`px-4 py-1.5 rounded-full text-sm transition-colors ${filter === tag ? "bg-[var(--accent-primary)] text-white" : "bg-[var(--card)] border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)]"}`}>
            {tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(story => <StoryCard key={story.id} story={story} />)}
      </div>

      <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-5 fade-in">
        <h3 className="text-lg font-semibold mb-2">📸 Optimum Brand Assets</h3>
        <p className="text-sm text-[var(--text-muted)] mb-4">Official logos, icons, and visual guidelines for contributors and validator operators.</p>
        <div className="flex flex-wrap gap-4">
          <a href="https://getoptimum.notion.site/Optimum-Brand-Assets-1a6fe54341398098843bc5847670e5ed" target="_blank" className="bg-[var(--bg)] border border-[var(--border)] px-4 py-2 rounded-lg text-sm hover:border-[var(--accent-primary)] transition">Brand Kit ↗</a>
          <a href="https://file.notion.so/f/f/4693580a-b720-4878-a7fa-0c09c1b81012/7ca8805b-8904-41af-a4c7-316da4e0e302/Optimum_Brand-Guidelines.pdf?table=block&id=337fe543-4139-80f0-8815-ecc30760527f&spaceId=4693580a-b720-4878-a7fa-0c09c1b81012&expirationTimestamp=1775671200000&signature=8ce3Xq5Zt-hFRAKu3ZEQkOsDiy-D7s1BVoXslsKe0GU&downloadName=Optimum+Brand-Guidelines.pdf" target="_blank" className="bg-[var(--bg)] border border-[var(--border)] px-4 py-2 rounded-lg text-sm hover:border-[var(--accent-primary)] transition">Brand Guidelines PDF ↗</a>
        </div>
      </div>

      <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-5 fade-in">
        <h3 className="text-lg font-semibold mb-2">📖 About Optimum</h3>
        <p className="text-sm text-[var(--text-muted)] mb-4">
          Optimum is a universal data acceleration network for blockchains, built on MIT research in Random Linear Network Coding (RLNC).
          It accelerates block/blob delivery by 6-20x while reducing bandwidth usage by 90-95% — no consensus changes required.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="bg-[var(--bg)] border border-[var(--border)] rounded-lg p-4">
            <div className="text-2xl font-bold text-[var(--accent-success)] mb-1">6-20x</div>
            <div className="text-xs text-[var(--text-muted)]">Faster Delivery</div>
          </div>
          <div className="bg-[var(--bg)] border border-[var(--border)] rounded-lg p-4">
            <div className="text-2xl font-bold text-[var(--accent-primary)] mb-1">~150ms</div>
            <div className="text-xs text-[var(--text-muted)]">Avg Propagation</div>
          </div>
          <div className="bg-[var(--bg)] border border-[var(--border)] rounded-lg p-4">
            <div className="text-2xl font-bold text-[var(--accent-warning)] mb-1">90-95%</div>
            <div className="text-xs text-[var(--text-muted)]">Bandwidth Reduction</div>
          </div>
        </div>
      </div>
    </div>
  );
}

