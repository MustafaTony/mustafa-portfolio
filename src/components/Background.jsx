const ENTRIES = [
  {
    when: 'Senior year',
    title: 'Assiut University',
    text: 'Faculty of Computers and Artificial Intelligence',
  },
  {
    when: 'Jul 2026',
    title: 'Digital Egypt Pioneers Initiative (DEPI)',
    text: 'Trainee, Generative and Agentic AI track',
  },
  {
    when: 'Aug 2026',
    title: 'Information Technology Institute (ITI)',
    text: 'Summer training, AI and machine learning fundamentals, Level 01',
  },
  {
    when: 'Also',
    title: 'Embedded systems and security practice',
    text: 'Automation and embedded projects with Arduino and Tinkercad. Ethical hacking practice on TryHackMe with Burp Suite.',
  },
]

export default function Background() {
  return (
    <section id="background">
      <div className="row">
        <h2 className="label">Background</h2>
        <div className="main">
          <div className="ledger">
            {ENTRIES.map((e) => (
              <div className="entry" key={e.when}>
                <span className="when">{e.when}</span>
                <span className="what">
                  <strong>{e.title}</strong>
                  <span>{e.text}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
