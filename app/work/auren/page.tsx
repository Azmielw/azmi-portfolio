export default function AurenPage() {
  return (
    <main className="project-page">

      <nav className="project-nav">
        <a href="/">AZMI.</a>
        <a href="/#work">← BACK TO WORK</a>
      </nav>

      <section className="project-hero">
        <p>01 — BRAND / SOCIAL MEDIA</p>

        <h1>AUREN</h1>

        <p className="project-description">
          A social media management brand focused on creative direction,
          visual identity, and digital presence.
        </p>
      </section>

      <section className="project-meta">
        <div>
          <span>CLIENT</span>
          <p>AUREN</p>
        </div>

        <div>
          <span>SERVICES</span>
          <p>Branding · Social Media · Creative Direction</p>
        </div>

        <div>
          <span>YEAR</span>
          <p>2026</p>
        </div>
      </section>

      {/* COVER */}
      <section className="project-cover">
        <a href="/projects/auren/cover.png" target="_blank">
          <img
            src="/projects/auren/cover.png"
            alt="AUREN Cover"
          />
        </a>
      </section>

      {/* SLIDES */}
      <section className="project-images">

        <a href="/projects/auren/01.png" target="_blank">
          <img src="/projects/auren/01.png" alt="AUREN Slide 01" />
        </a>

        <a href="/projects/auren/02.png" target="_blank">
          <img src="/projects/auren/02.png" alt="AUREN Slide 02" />
        </a>

        <a href="/projects/auren/03.png" target="_blank">
          <img src="/projects/auren/03.png" alt="AUREN Slide 03" />
        </a>

        <a href="/projects/auren/04.png" target="_blank">
          <img src="/projects/auren/04.png" alt="AUREN Slide 04" />
        </a>

        <a href="/projects/auren/05.png" target="_blank">
          <img src="/projects/auren/05.png" alt="AUREN Slide 05" />
        </a>

        <a href="/projects/auren/06.png" target="_blank">
          <img src="/projects/auren/06.png" alt="AUREN Slide 06" />
        </a>

        <a href="/projects/auren/07.png" target="_blank">
          <img src="/projects/auren/07.png" alt="AUREN Slide 07" />
        </a>

      </section>

    </main>
  );
}