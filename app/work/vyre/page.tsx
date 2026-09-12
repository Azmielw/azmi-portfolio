export default function VyrePage() {
  return (
    <main className="project-page">

      <nav className="project-nav">
        <a href="/">AZMI.</a>
        <a href="/#work">← BACK TO WORK</a>
      </nav>

      <section className="project-hero">
        <p>02 — BRAND / VISUAL IDENTITY</p>

        <h1>VYRE</h1>

        <p className="project-description">
          A bold visual concept built around modern aesthetics,
          strong identity and digital presence.
        </p>
      </section>

      <section className="project-meta">
        <div>
          <span>CLIENT</span>
          <p>VYRE</p>
        </div>

        <div>
          <span>SERVICES</span>
          <p>Branding · Visual Identity · Social Media</p>
        </div>

        <div>
          <span>YEAR</span>
          <p>2026</p>
        </div>
      </section>

      {/* COVER */}
      <section className="project-cover">
        <a
          href="/projects/vyre/cover.png"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/projects/vyre/cover.png"
            alt="VYRE Cover"
          />
        </a>
      </section>

      {/* SLIDES */}
      <section className="project-images">

        <a
          href="/projects/vyre/01.png"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/projects/vyre/01.png"
            alt="VYRE Slide 01"
          />
        </a>

        <a
          href="/projects/vyre/02.png"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/projects/vyre/02.png"
            alt="VYRE Slide 02"
          />
        </a>

        <a
          href="/projects/vyre/03.png"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/projects/vyre/03.png"
            alt="VYRE Slide 03"
          />
        </a>

        <a
          href="/projects/vyre/04.png"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/projects/vyre/04.png"
            alt="VYRE Slide 04"
          />
        </a>

        <a
          href="/projects/vyre/05.png"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/projects/vyre/05.png"
            alt="VYRE Slide 05"
          />
        </a>

        <a
          href="/projects/vyre/06.png"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/projects/vyre/06.png"
            alt="VYRE Slide 06"
          />
        </a>

        <a
          href="/projects/vyre/07.png"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/projects/vyre/07.png"
            alt="VYRE Slide 07"
          />
        </a>

      </section>

    </main>
  );
}