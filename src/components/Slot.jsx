// Shows a real link when the value is set, and a visible "to be added" marker when it is not.
export default function Slot({ href, label, todo, mail = false }) {
  if (!href) return <span className="todo">{todo}</span>
  if (mail) {
    return (
      <span>
        <a href={`mailto:${href}`}>{href}</a>
      </span>
    )
  }
  return (
    <a href={href} target="_blank" rel="noreferrer noopener">
      {label}
    </a>
  )
}
