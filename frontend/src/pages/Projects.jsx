import { useEffect, useState } from 'react'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [status, setStatus] = useState('loading') // loading | ready | error

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/projects')
      .then((res) => {
        if (!res.ok) throw new Error('Request failed')
        return res.json()
      })
      .then((data) => {
        setProjects(data)
        setStatus('ready')
      })
      .catch(() => setStatus('error'))
  }, [])

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <p className="uppercase tracking-[0.3em] text-sm text-muted mb-2">Work</p>
      <h1 className="text-5xl font-bold mb-4">Projects</h1>
      <p className="text-muted max-w-2xl mb-12 leading-relaxed">
        {/* TODO: replace with your own summary of what's below */}
        A selection of things I've built, pulled live from my GitHub.
      </p>

      {status === 'loading' && <p className="text-muted">Loading projects…</p>}
      {status === 'error' && (
        <p className="text-muted">
          Couldn't reach the projects API. Is the Flask backend running on
          port 5000?
        </p>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
