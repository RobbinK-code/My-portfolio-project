const stack = [
  { label: 'Frontend', value: 'React · Vite · Tailwind CSS' },
  { label: 'Backend', value: 'Python · Flask · REST APIs' },
  { label: 'Environment', value: 'Git · GitHub · Command-line first' },
]

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">
      <div className="rounded-2xl border border-dark/10 p-8">
        <p className="uppercase tracking-[0.3em] text-sm text-muted mb-2">About</p>
        {/* TODO: replace with your name */}
        <h1 className="text-4xl font-bold mb-6">Your Name</h1>
        <p className="text-muted leading-relaxed mb-4">
          {/* TODO: replace with your own bio, first paragraph */}
          A short paragraph about how you got into development and what
          you're focused on now.
        </p>
        <p className="text-muted leading-relaxed">
          {/* TODO: replace with your own bio, second paragraph */}
          A second paragraph — what you believe good software should feel
          like, or what you're building toward.
        </p>
      </div>

      <div className="rounded-2xl border border-dark/10 p-8 bg-dark/5">
        <p className="uppercase tracking-[0.3em] text-sm text-muted mb-2">
          Technical Arsenal
        </p>
        <h2 className="text-3xl font-bold mb-6">My Stack</h2>
        <dl className="space-y-4">
          {stack.map((item) => (
            <div key={item.label}>
              <dt className="text-xs uppercase tracking-wide text-muted mb-1">
                {item.label}
              </dt>
              <dd className="font-medium">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
