export default function ProjectCard({ project }) {
  return (
    <div className="rounded-2xl border border-dark/10 bg-white/40 p-6 flex flex-col gap-3">
      <div className="flex flex-wrap gap-2">
        {project.tags?.map((tag) => (
          <span
            key={tag}
            className="text-xs uppercase tracking-wide px-2 py-1 rounded-full bg-dark/5 text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-2xl font-semibold">{project.title}</h3>
      <p className="text-muted leading-relaxed">{project.description}</p>
      <div className="flex gap-4 text-sm font-medium pt-2">
        {project.liveLink && (
          <a href={project.liveLink} target="_blank" rel="noreferrer" className="hover:underline">
            Live site →
          </a>
        )}
        <a href={project.repoLink} target="_blank" rel="noreferrer" className="hover:underline">
          View repo →
        </a>
      </div>
    </div>
  )
}
