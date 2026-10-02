import { useState } from 'react'
import { METRICS } from '../data.js'

const money = (n) => '₹' + Math.round(n).toLocaleString('en-US')
const score = (n) => n.toFixed(4)

const VIEWS = {
  mae: {
    button: 'Mean error',
    fmt: money,
    note: () =>
      'Mean absolute error, in rupees. A small number of test rows get an extremely large prediction from the linear model. The inverse log transform (expm1) turns each one into an astronomical rupee amount, and those rows dominate the average. This is a known failure of plain least squares on high-cardinality one-hot categories combined with a log target. I reported it as it came out and did not clip the predictions to improve the metric.',
  },
  rmse: {
    button: 'RMSE',
    fmt: money,
    note: () =>
      'Root mean squared error. Squaring the errors before averaging gives those same few predictions even more weight.',
  },
  medae: {
    button: 'Median error',
    fmt: money,
    note: (d) =>
      `Median absolute error. The median ignores the handful of extreme rows, so this is the fairer comparison of a typical prediction. The linear model’s typical error is large but not absurd: about ${(
        d.lr.medae / d.rf.medae
      ).toFixed(1)} times the random forest’s.`,
  },
  r2log: {
    button: 'R² on log price',
    fmt: score,
    note: () =>
      'R² computed on log price. It is also resistant to a few extreme predictions, and the random forest explains more of the variance on this scale too.',
  },
}

const MODELS = [
  { id: 'rf', name: 'Random forest', selected: true },
  { id: 'lr', name: 'Linear regression', selected: false },
]

export default function MetricsCompare() {
  const [key, setKey] = useState('mae')
  const view = VIEWS[key]
  const max = Math.max(METRICS.rf[key], METRICS.lr[key])

  return (
    <div className="compare">
      <div style={{ display: 'grid', gap: '0.9rem' }}>
        <p className="compare-q" id="cmp-label">
          Same two models, four ways to score them. Switch the measure.
        </p>
        <div className="ctl" role="group" aria-labelledby="cmp-label">
          {Object.entries(VIEWS).map(([k, v]) => (
            <button key={k} type="button" aria-pressed={k === key} onClick={() => setKey(k)}>
              {v.button}
            </button>
          ))}
        </div>
      </div>

      <div className="bars">
        {MODELS.map((m) => {
          const value = METRICS[m.id][key]
          return (
            <div className={`bar-row ${m.id}`} key={m.id}>
              <div className="bar-meta">
                <span className="bar-name">
                  {m.name}
                  {m.selected && <span className="chip fit">selected</span>}
                </span>
                <span className="bar-val">{view.fmt(value)}</span>
              </div>
              <div className="track">
                <div className={`fill fill-${m.id}`} style={{ width: `${(value / max) * 100}%` }} />
              </div>
            </div>
          )
        })}
      </div>

      <p className="compare-note" aria-live="polite">
        {view.note(METRICS)}
      </p>
    </div>
  )
}
