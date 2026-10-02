// Everything you are likely to edit lives here.
// Leave a link as an empty string and the page shows a "to be added" marker.
// Fill it in and the marker turns into a real link.

export const LINKS = {
  email: '', // e.g. 'you@example.com'
  github: '', // e.g. 'https://github.com/your-username'
  linkedin: '', // e.g. 'https://www.linkedin.com/in/your-handle'
  resume: '', // e.g. '/Mustafa-Tony-CV.pdf' (put the file in /public)
  kerbRepo: '',
  languageIdRepo: '',
  languageIdDemo: '',
}

// Test-set metrics for Kerb, copied from the project README.
// Held-out test set: 34,872 rows after outlier removal.
export const METRICS = {
  rf: { mae: 1123263, rmse: 3546205, medae: 110073, r2log: 0.9211 },
  lr: { mae: 1579525807, rmse: 294171352725, medae: 1839032, r2log: 0.7242 },
}
