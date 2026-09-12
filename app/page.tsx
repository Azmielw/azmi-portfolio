export default function Home() {
  return (
    <main>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">AZMI.</div>

       <nav>
  <a href="#home">Home</a>
  <a href="#work">Work</a>
  <a href="#about">About</a>
  <a href="#cv">CV</a>
  <a href="#contact">Contact</a>
</nav>
      </header>

      {/* HERO */}
      <section id="home" className="hero">
        <p className="eyebrow">
          CREATIVE DESIGNER / SOCIAL MEDIA
        </p>

        <h1>
          I BUILD
          <br />
          <span>BRANDS & IDEAS.</span>
        </h1>

        <p className="description">
          Creative designer focused on branding, social media,
          visual design and digital experiences.
        </p>

        <div className="buttons">
          <a href="#work" className="button primary">
            View My Work →
          </a>

          <a href="#contact" className="button secondary">
            Contact Me
          </a>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="work">
        <div className="section-title">
          <p className="eyebrow">SELECTED WORK</p>

          <h2>
            Projects that
            <br />
            <span>define my work.</span>
          </h2>
        </div>

        <div className="projects">

         {/* AUREN */}
<article className="project">
  <a
    href="/work/auren"
    className="project-card"
  >
    <div className="project-image">
      <img
        src="/projects/auren/cover.png"
        alt="AUREN Project"
      />

      <span>01</span>
    </div>

    <div className="project-info">
      <div>
        <h3>AUREN</h3>

        <p>
          Social media management & creative direction.
        </p>
      </div>

      <span>↗</span>
    </div>
  </a>
</article>

          {/* VYRE */}
          <article className="project">
            <a
              href="/work/vyre"
              className="project-card"
            >
              <div className="project-image">
                <img
                  src="/projects/vyre/cover.png"
                  alt="VYRE Project"
                />

                <span>02</span>
              </div>

              <div className="project-info">
                <div>
                  <h3>VYRE</h3>

                  <p>
                    Brand Concept / Visual Identity / Social Media
                  </p>
                </div>

                <span>↗</span>
              </div>
            </a>
          </article>


          {/* TARGET COINS */}
          <article className="project">
            <a
              href="/work/target-coins"
              className="project-card"
            >
              <div className="project-image">
                <img
                  src="/projects/target-coins/cover.png"
                  alt="Target Coins Project"
                />

                <span>03</span>
              </div>

              <div className="project-info">
                <div>
                  <h3>TARGET COINS</h3>

                  <p>
                    Branding / Digital Business / Marketing
                  </p>
                </div>

                <span>↗</span>
              </div>
            </a>
          </article>


          {/* AYORA FLOWERS */}
          <article className="project">
            <a
              href="/work/ayora-flowers"
              className="project-card"
            >
              <div className="project-image">
                <img
                  src="/projects/ayora-flowers/cover.png"
                  alt="Ayora Flowers Project"
                />

                <span>04</span>
              </div>

              <div className="project-info">
                <div>
                  <h3>AYORA FLOWERS</h3>

                  <p>
                    E-Commerce / UI/UX / User Experience
                  </p>
                </div>

                <span>↗</span>
              </div>
            </a>
          </article>

        </div>
      </section>


      {/* ABOUT */}
<section id="about" className="about">
  <p className="eyebrow">ABOUT ME</p>

  <h2>
    I turn ideas into
    <br />
    <span>visual experiences.</span>
  </h2>

  <p>
    I’m a creative designer and digital creator focused on
    branding, social media, UI/UX and digital experiences.
    I enjoy turning ideas into clean, modern and meaningful
    visual solutions that help businesses communicate better
    with their audience.
  </p>

  <p>
    My work combines creative direction, visual design and
    user-focused thinking to build brands and digital
    experiences that feel clear, distinctive and purposeful.
  </p>
  <div className="skills">
  <span>BRANDING</span>
  <span>SOCIAL MEDIA</span>
  <span>UI/UX</span>
  <span>CREATIVE DIRECTION</span>
  <span>E-COMMERCE</span>
  <span>VISUAL DESIGN</span>
</div>
</section>


      {/* CV */}
<section id="cv" className="cv">
  <p className="eyebrow">MY CV</p>

  <h2>
    Experience, skills
    <br />
    <span>& education.</span>
  </h2>

  <div className="cv-grid">

    <div className="cv-item">
      <span>FOCUS</span>
      <p>Branding · Social Media · UI/UX</p>
    </div>

    <div className="cv-item">
      <span>EDUCATION</span>
      <p>Bachelor of Business Administration — MIS
Arab Open University · 2026 — Present
Bachelor of Computer Science — CS
Al-Azhar University — Gaza</p>
    </div>

    <div className="cv-item">
      <span>EXPERIENCE</span>
      <p>Creative Design · Digital Projects</p>
    </div>

  </div>

  <a
    href="/cv.pdf"
    className="button primary"
  >
    Download CV ↓
  </a>
</section>


      {/* CONTACT */}
      <section id="contact" className="contact">
        <p className="eyebrow">GET IN TOUCH</p>

        <h2>
          Have a project
          <br />
          <span>in mind?</span>
        </h2>

       <a
  href="mailto:azmielw@gmail.com"
  className="email"
>
  azmielw@gmail.com →
</a>
      </section>


      {/* FOOTER */}
      <footer>
        <p>© 2026 AZMI ELWAHEDI</p>
        <p>Built with Next.js</p>
      </footer>

    </main>
  );
}