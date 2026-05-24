export function StoryCard({ story }: { story: { id: number; title: string; summary: string; tags: string[]; image: string; date: string } }) {
  return (
    <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl overflow-hidden hover:shadow-lg transition-all hover:scale-[1.01]">
      <div className="h-40 overflow-hidden">
        <img src={story.image} alt={story.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-4">
        <div className="flex gap-2 mb-2">
          {story.tags.map(tag => (
            <span key={tag} className="text-xs bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] px-2 py-0.5 rounded-full">{tag}</span>
          ))}
        </div>
        <h3 className="text-lg font-semibold mb-1">{story.title}</h3>
        <p className="text-sm text-[var(--text-muted)] leading-snug mb-2">{story.summary}</p>
        <div className="flex justify-between items-center">
          <span className="text-xs text-[var(--text-muted)]">{story.date}</span>
          <button className="text-xs text-[var(--accent-primary)] hover:underline">Read more →</button>
        </div>
      </div>
    </div>
  );
}

