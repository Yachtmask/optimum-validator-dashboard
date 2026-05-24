"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { DashboardContent } from "@/components/DashboardContent";
import { StoriesContent } from "@/components/StoriesContent";
import { AboutContent } from "@/components/AboutContent";

export default function Page() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/metrics").then(r => r.json()).then(d => {
      setData(d);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const theme = localStorage.getItem("optimum-theme");
    if (theme === "light") document.documentElement.setAttribute("data-theme", "light");
  }, []);

  const toggleTheme = () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("optimum-theme", next);
  };

  if (loading) return <div className="flex h-screen items-center justify-center text-[var(--text-muted)]">Loading Optimum dashboard...</div>;

  return (
    <main className="min-h-screen p-6 md:p-10 max-w-7xl mx-auto">
      <Header activeTab={activeTab} onTabChange={setActiveTab} onToggleTheme={toggleTheme} />
      <div className="fade-in">
        {activeTab === "Dashboard" && data && <DashboardContent data={data.metrics || data} />}
        {activeTab === "Stories & Media" && <StoriesContent stories={data.stories || []} />}
        {activeTab === "About" && <AboutContent />}
      </div>
    </main>
  );
}

