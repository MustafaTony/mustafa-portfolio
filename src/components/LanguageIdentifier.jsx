import Slot from './Slot.jsx'
import { LINKS } from '../data.js'

export default function LanguageIdentifier() {
  return (
    <article id="language-identifier">
      <div className="row">
        <p className="label">Project</p>
        <div className="main">
          <div>
            <h3 className="sub-title">Language Identifier</h3>
            <p className="eyebrow">Machine learning &middot; Streamlit</p>
          </div>
          <p className="lead">
            Detects whether a text is English, Arabic, French, German or Spanish, so nobody has to
            pick the language by hand.
          </p>
          <div className="items">
            <div className="item">
              <h4>Built</h4>
              <p>
                I prepared the data, chose the features and the model (Multinomial Naive Bayes),
                trained and evaluated it with scikit-learn, saved it with joblib and wrapped it in a
                Streamlit web app.
              </p>
            </div>
            <div className="item">
              <h4>Result</h4>
              <p>
                About 99.88% accuracy on the dataset I used. Telling five languages apart is an easy
                task, so this figure confirms the pipeline works and says little beyond that.
              </p>
            </div>
          </div>
          <p className="small">Python, pandas, NumPy, scikit-learn, joblib, Streamlit</p>
          <p>
            <Slot href={LINKS.languageIdRepo} label="Repository" todo="Repository link to be added" />
            &nbsp;&nbsp;
            <Slot href={LINKS.languageIdDemo} label="Streamlit demo" todo="Streamlit demo link to be added" />
          </p>
        </div>
      </div>
    </article>
  )
}
