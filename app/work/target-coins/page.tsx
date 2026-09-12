export default function TargetCoinsPage() {
  return (
    <main className="project-page">

      {/* NAV */}
      <nav className="project-nav">
        <a href="/">AZMI.</a>
        <a href="/#work">← BACK TO WORK</a>
      </nav>

      {/* HERO */}
      <section className="project-hero">
        <p>03 — BRAND / DIGITAL BUSINESS</p>

        <h1>TARGET COINS</h1>

        <p className="project-description">
          A digital gaming currency brand focused on
          online services, subscriptions and digital products.
        </p>
      </section>

      {/* META */}
      <section className="project-meta">

        <div>
          <span>CLIENT</span>
          <p>TARGET COINS</p>
        </div>

        <div>
          <span>SERVICES</span>
          <p>
            Branding · Digital Business · Marketing
          </p>
        </div>

        <div>
          <span>YEAR</span>
          <p>2026</p>
        </div>

      </section>

      {/* COVER */}
      <section className="project-cover">
        <a
          href="/projects/target-coins/cover.png"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/projects/target-coins/cover.png"
            alt="Target Coins Cover"
          />
        </a>
      </section>

    </main>
  );
}