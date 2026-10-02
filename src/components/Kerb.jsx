import MetricsCompare from './MetricsCompare.jsx'
import Slot from './Slot.jsx'
import { LINKS } from '../data.js'

const REQUEST = `{
  "location": "bangalore",
  "carpet_area_sqft": 1150,
  "floor": 4,
  "bathrooms": 2,
  "balconies": 2,
  "furnishing": "Furnished",
  "transaction": "Resale",
  "ownership": "Freehold",
  "facing": "North"
}`

const RESPONSE = `{
  "predicted_price_rupees": 8113391.52,
  "predicted_price_formatted": "₹8,113,392",
  "currency": "INR",
  "model_used": "RandomForestRegressor",
  "location_recognized": true
}`

export default function Kerb() {
  return (
    <article id="kerb">
      <div className="row">
        <h2 className="label">Work</h2>
        <div className="main">
          <div>
            <h3 className="project-title">Kerb</h3>
            <p className="eyebrow">Machine learning &middot; FastAPI &middot; React</p>
          </div>
          <p className="lead">
            A valuation app for Indian residential property. You enter a property's details and get a
            price estimate from a model trained on 187,531 real listings (the House Price dataset by
            Juhi Bhojani on Kaggle). No synthetic data is used anywhere in the project. Every metric
            and every prediction traces back to that dataset.
          </p>
        </div>
      </div>

      <div className="row">
        <p className="label">Built</p>
        <div className="main">
          <div className="items">
            <div className="item">
              <h4>Model</h4>
              <p>
                A random forest and a linear regression, trained on the same split with the same
                cleaning and preprocessing. The target is log-transformed, so every metric comes back
                in rupees. The packaged model shrank from 231 MB to 28.17 MB by capping tree depth at
                16, setting a minimum leaf size of 2 and compressing with joblib. A reload check
                confirmed identical predictions.
              </p>
            </div>
            <div className="item">
              <h4>API</h4>
              <p>
                A FastAPI service that loads the model once at startup and serves{' '}
                <code>POST /predict</code> with Pydantic v2 validation. The response says whether the
                submitted location was one the model learned individually. Tested with pytest and
                httpx, and packaged with a Dockerfile.
              </p>
            </div>
            <div className="item">
              <h4>Interface</h4>
              <p>
                A React 19, TypeScript and Vite single page with a valuation form and a result view,
                styled as an editorial property ledger instead of a dashboard. The backend address
                comes from an environment variable and is never hardcoded in a component.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <p className="label">Decisions</p>
        <div className="main">
          <figure className="figure">
            <div
              className="splitbar"
              role="img"
              aria-label="Held-out data split: 139,619 training rows and 34,872 test rows"
            >
              <div className="seg-train" style={{ flex: '139619 1 0' }}>
                Train
              </div>
              <div className="seg-test" style={{ flex: '34872 1 0' }}>
                Test
              </div>
            </div>
            <p className="legend">
              139,619 train rows &middot; 34,872 test rows &middot; 174,491 after outlier removal
            </p>
            <div className="scroll">
              <table className="matrix">
                <caption>What each split does with a value</caption>
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Train</th>
                    <th scope="col">Test</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Price per sq ft bounds', 'apply'],
                    ['Top 50 locations', 'apply'],
                    ['Model weights', 'score'],
                  ].map(([name, testUse]) => (
                    <tr key={name}>
                      <th scope="row">{name}</th>
                      <td>
                        <span className="chip fit">fit</span>
                      </td>
                      <td>
                        <span className="chip">{testUse}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="chips small muted">
              <span>
                <span className="chip fit">fit</span> learned from this split
              </span>
              <span>
                <span className="chip">apply</span> reused from train, never refit
              </span>
              <span>
                <span className="chip">score</span> evaluation only
              </span>
            </p>
          </figure>

          <div className="items">
            <div className="item">
              <h4>Fit on train only</h4>
              <p>
                The 1st and 99th percentile bounds on price per square foot (₹2,256 to ₹33,882) come
                from training rows and are applied to both splits. Removing outliers took the data
                from 177,847 to 174,491 rows.
              </p>
            </div>
            <div className="item">
              <h4>Locations</h4>
              <p>
                The 50 most common of 81 locations come from the training split. Every other location
                maps to a learned "other" category, which covers 2,243 training rows and 575 test rows.
                The API applies the same rule at inference.
              </p>
            </div>
            <div className="item">
              <h4>Missing area</h4>
              <p>
                Listings with a missing or non-positive area have no price per square foot. I kept
                them, flagged by an <code>area_missing</code> column, and let preprocessing impute the
                area. A ratio that cannot be computed is no reason to discard a usable listing.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <p className="label">Result</p>
        <div className="main">
          <div className="figures">
            <div className="fig">
              <span className="num">0.9188</span>
              <span className="cap">R&sup2;, random forest, raw rupees</span>
            </div>
            <div className="fig">
              <span className="num">₹110,073</span>
              <span className="cap">median absolute error</span>
            </div>
            <div className="fig">
              <span className="num">₹1,123,263</span>
              <span className="cap">mean absolute error</span>
            </div>
          </div>
          <p>
            Scored on 34,872 held-out listings the model never trained on. The random forest wins on
            every metric. I picked MAE in rupees as the deciding measure before looking at which model
            it favored.
          </p>

          <MetricsCompare />

          <div className="scroll">
            <table className="t-wide">
              <caption>Held-out test set, 34,872 rows. All figures are test-set metrics.</caption>
              <thead>
                <tr>
                  <th scope="col">Model</th>
                  <th scope="col">MAE (₹)</th>
                  <th scope="col">RMSE (₹)</th>
                  <th scope="col">R&sup2; raw</th>
                  <th scope="col">MedAE (₹)</th>
                  <th scope="col">R&sup2; log</th>
                  <th scope="col">R&sup2; (99th-pct trimmed)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Random forest</th>
                  <td>1,123,263</td>
                  <td>3,546,205</td>
                  <td>0.9188</td>
                  <td>110,073</td>
                  <td>0.9211</td>
                  <td>0.9138</td>
                </tr>
                <tr>
                  <th scope="row">Linear regression</th>
                  <td className="neg">1,579,525,807</td>
                  <td className="neg">294,171,352,725</td>
                  <td className="neg">&minus;559,042,837.30</td>
                  <td>1,839,032</td>
                  <td>0.7242</td>
                  <td className="neg">&minus;0.5938</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="row">
        <p className="label">API</p>
        <div className="main">
          <p>The request and response below are the example from the project README.</p>
          <div className="code-pair">
            <div className="code">
              <span className="eyebrow">Request &middot; POST /predict</span>
              <pre>
                <code>{REQUEST}</code>
              </pre>
            </div>
            <div className="code">
              <span className="eyebrow">Response</span>
              <pre>
                <code>{RESPONSE}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <p className="label">Stack and links</p>
        <div className="main">
          <p className="small">
            pandas, scikit-learn 1.8.0, joblib, Jupyter &middot; FastAPI, Pydantic v2, uvicorn,
            pytest, httpx, Docker &middot; React 19, TypeScript, Vite
          </p>
          <p>
            <Slot href={LINKS.kerbRepo} label="Repository" todo="Repository link to be added" />
          </p>
        </div>
      </div>
    </article>
  )
}
