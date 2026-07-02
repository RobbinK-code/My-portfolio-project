import { useEffect, useState } from 'react'

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/blog')
      .then((res) => {
        if (!res.ok) throw new Error('Request failed')
        return res.json()
      })
      .then((data) => {
        setPosts(data)
        setStatus('ready')
      })
      .catch(() => setStatus('error'))
  }, [])

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <p className="uppercase tracking-[0.3em] text-sm text-muted mb-2">Writing</p>
      <h1 className="text-5xl font-bold mb-12">Blog</h1>

      {status === 'loading' && <p className="text-muted">Loading posts…</p>}
      {status === 'error' && (
        <p className="text-muted">
          Couldn't reach the blog API. Is the Flask backend running on port
          5000?
        </p>
      )}
      {status === 'ready' && posts.length === 0 && (
        <p className="text-muted">No posts yet — first one's coming soon.</p>
      )}

      <div className="space-y-6">
        {posts.map((post) => (
          <article
            key={post.id}
            className="rounded-2xl border border-dark/10 bg-white/40 p-8"
          >
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags?.map((tag) => (
                <span
                  key={tag}
                  className="text-xs uppercase tracking-wide px-2 py-1 rounded-full bg-dark/5 text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-xs text-muted mb-4 uppercase tracking-wide">
              {post.date}
            </p>
            <p className="text-muted leading-relaxed mb-4">{post.excerpt}</p>
            <span className="text-sm font-medium">Read more →</span>
          </article>
        ))}
      </div>
    </section>
  )
}
