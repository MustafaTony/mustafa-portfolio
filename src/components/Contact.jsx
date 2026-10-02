import Slot from './Slot.jsx'

export default function Contact() {
  // ضع روابطك هنا
  const GITHUB_URL = 'https://github.com/MustafaTony'
  const LINKEDIN_URL = 'PUT_YOUR_LINKEDIN_LINK_HERE'

  return (
    <section id="contact">
      <div className="row">
        <h2 className="label">Contact</h2>

        <div className="main">
          <p className="contact-line">
            Open for freelance work and full-time roles.
          </p>

          <div className="ledger">

            {/* Email */}
            <div className="entry">
              <span className="when">Email</span>
              <span className="what">
                <Slot
                  href="mailto:mustafatony.dev@gmail.com"
                  todo="mustafatony.dev@gmail.com"
                  mail
                />
              </span>
            </div>

            {/* GitHub */}
            <div className="entry">
              <span className="when">GitHub</span>
              <span className="what">
                <Slot
                  href={GITHUB_URL}
                  label="GitHub Profile"
                />
              </span>
            </div>

            {/* LinkedIn */}
            <div className="entry">
              <span className="when">LinkedIn</span>
              <span className="what">
                <Slot
                  href={LINKEDIN_URL}
                  label="LinkedIn Profile"
                />
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}