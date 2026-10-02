const ENTRIES = [
  { area: 'Modeling', tools: 'pandas, NumPy, scikit-learn, joblib', used: 'Kerb, Language Identifier' },
  { area: 'Serving', tools: 'FastAPI, Pydantic v2, uvicorn, pytest, Docker', used: 'Kerb' },
  { area: 'Interface', tools: 'React 19, TypeScript, Vite, Streamlit', used: 'Kerb, Language Identifier' },
  { area: 'Learning', tools: 'Generative and agentic AI', used: 'DEPI track, 2026' },
]

export default function Tools() {
  return (
    <section id="tools">
      <div className="row">
        <h2 className="label">Tools</h2>
        <div className="main">
          <div className="ledger">
            {ENTRIES.map((e) => (
              <div className="entry" key={e.area}>
                <span className="when">{e.area}</span>
                <span className="what">
                  <strong>{e.tools}</strong>
                  <span className="muted small">{e.used}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
