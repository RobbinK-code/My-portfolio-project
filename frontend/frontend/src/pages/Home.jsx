import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ProjectCard from '../components/ProjectCard'

export default function Home() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/projects')
      .then((res) => res.json())
      .then((data) => setProjects(data.slice(0, 2)))
      .catch(() => setProjects([]))
  }, [])

  return (
    <div>
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-16 text-center animate-fade-in-up">
        <p className="uppercase tracking-[0.3em] text-sm text-muted mb-4">
          Developer · Builder
        </p>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Robbin Kimani × Full-Stack
        </h1>
        <p className="text-muted text-lg leading-relaxed max-w-2xl mx-auto mb-8">
          I build across the stack — React and JavaScript on the frontend,
          Python underneath — and I'd rather ship something that works than
          something that just compiles.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/projects"
            className="px-6 py-3 rounded-full bg-dark text-cream text-sm uppercase tracking-wide hover:opacity-90 transition"
          >
            View Projects
          </Link>
          <Link
            to="/blog"
            className="px-6 py-3 rounded-full border border-dark/20 text-sm uppercase tracking-wide hover:bg-dark/5 transition"
          >
            Read the Blog
          </Link>
          <Link
            to="/about"
            className="px-6 py-3 rounded-full border border-dark/20 text-sm uppercase tracking-wide hover:bg-dark/5 transition"
          >
            About Me
          </Link>
        </div>
      </section>

      {/* Featured projects preview */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <p className="uppercase tracking-[0.3em] text-sm text-muted text-center mb-8">
          Projects
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Mission statement band */}
      <section className="bg-dark/5 py-24 text-center">
        <p className="uppercase tracking-[0.3em] text-sm text-muted mb-4">
          My Mission
        </p>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Code is my medium.
          <br />
          Shipping is my proof.
        </h2>
      </section>
    </div>
  )
}
