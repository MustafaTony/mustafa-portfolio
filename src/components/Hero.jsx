import { LINKS } from '../data.js'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <p className="role">AI and Software engineering &middot; Senior student</p>
      <h1 className="name">
        <span className="name-en">Mustafa Tony</span>
        <span className="name-ar" lang="ar" dir="rtl">
        </span>
      </h1>
      <div className="hero-body">
        <p className="thesis">
          I take machine learning models from the notebook to a working web app, <span className="mark">I care about turning experiments into useful products.</span>
        </p>
        <dl className="facts">
          <div>
            <dt>Studying</dt>
            <dd>Senior year, Faculty of Computers and Artificial Intelligence, Assiut University</dd>
          </div>
          <div>
            <dt>Based in</dt>
            <dd>Egypt</dd>
          </div>
          <div>
            <dt>Open to</dt>
            <dd>Freelance work and full-time roles</dd>
          </div>
        </dl>
        <div className="actions">
          <a className="btn btn-solid" href="#kerb">
            Read the Kerb case study &darr;
          </a>
          <a className="btn btn-line" href="#contact">
            Contact
          </a>
          {LINKS.resume && (
            <a className="btn btn-line" href={LINKS.resume} download>
              Download CV
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
