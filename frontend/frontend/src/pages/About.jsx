const stack = [
  { label: 'Frontend', value: 'React · JavaScript · HTML/CSS · Tailwind' },
  { label: 'Backend', value: 'Python · Flask (this site\'s own API)' },
  { label: 'Environment', value: 'Git · GitHub · Command-line first' },
]

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">
      <div className="rounded-2xl border border-dark/10 p-8">
        <p className="uppercase tracking-[0.3em] text-sm text-muted mb-2">About</p>
        <h1 className="text-4xl font-bold mb-6">Robbin Kimani</h1>
        <p className="text-muted leading-relaxed mb-4">
          I'm a developer based in Kenya, currently building practical
          full-stack projects — from a React admin portal with a real test
          suite to a Python CLI tool with role-based auth. I care more about
          whether something actually works end-to-end than how many
          frameworks it name-drops.
        </p>
        <p className="text-muted leading-relaxed">
          Right now I'm focused on tools with real-world relevance —
          consumer protection and accessibility challenges in African
          markets are what pull me in most.
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
