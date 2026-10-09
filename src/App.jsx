import './App.css'

function App() {
  return (
     <>
      <nav className="navbar">

        <div className="nav-name">
          Rama Alturk
        </div>

        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

      </nav>

<main>

  <section className="hero">

    <div className="hero-content">

      <p className="hero-label">SOFTWARE DEVELOPMENT STUDENT</p>

      <h1>
        Hi, I'm <span>Rama Alturk.</span>
      </h1>

      <p className="hero-description">
        I am an Information Technology: Software Development student
        building applications and web projects while developing my
        programming and problem-solving skills.
      </p>

      <div className="hero-buttons">
        <a href="#projects" className="primary-button">
          View My Work
        </a>

        <a href="#about" className="secondary-button">
          About Me
        </a>
      </div>

    </div>

  </section>

      <section className="projects" id="projects">

        <div className="section-heading">
          <p className="section-label">MY WORK</p>
          <h2>Featured Projects</h2>
          <p className="section-description">
            A selection of projects that showcase my experience with
            software development, web technologies, and problem solving.
          </p>
        </div>

        <div className="project-grid">

          <article className="project-card">
            <div className="project-image">
              <p className="project-number">01</p>
              <p className="project-type">WEB DEVELOPMENT</p>
            </div>

            <div className="project-content">
              <h3>TechWise Emporium</h3>

              <p>
                A collaborative e-commerce website created to showcase
                products, shopping features, and team-based development.
              </p>

                <p className="project-role">
                 <strong>My Role:</strong> Created the initial project files and HTML
                 structure, set up the Git branches, and helped organize the repository
                 for the group.
                 </p>

              <div className="project-tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>Git</span>
              </div>
            </div>
          </article>


          <article className="project-card">
            <div className="project-image">
              <p className="project-number">02</p>
              <p className="project-type">JAVASCRIPT</p>
            </div>

            <div className="project-content">
              <h3>Contact List</h3>

              <p>
                A JavaScript contact management application that stores
                and retrieves contact information using JSON and local storage.
              </p>

              <p className="project-role">
              <strong>My Work:</strong> Built the contact functionality, used JSON
                to work with contact data, and used local storage to save the contacts.
              </p>

              <div className="project-tags">
                <span>JavaScript</span>
                <span>JSON</span>
                <span>Local Storage</span>
              </div>
            </div>
          </article>


          <article className="project-card">
            <div className="project-image">
              <p className="project-number">03</p>
              <p className="project-type">JAVA</p>
            </div>

            <div className="project-content">
              <h3>Flight Reservation System</h3>

              <p>
                A Java application for creating and displaying flight
                bookings with fare calculations and input validation.
              </p>

              <p className="project-role">
              <strong>My Work:</strong> Built the booking system using Java classes,
                input validation, and calculations for baggage fees, taxes, and the
                final booking total.
              </p>

              <div className="project-tags">
                <span>Java</span>
                <span>OOP</span>
                <span>Validation</span>
              </div>
            </div>
          </article>

        </div>

      </section>
            <section className="skills" id="skills">

        <div className="section-heading">
          <p className="section-label">MY SKILLS</p>
          <h2>Technologies I Work With</h2>
          <p className="section-description">
            Technologies and tools I have worked with throughout my
            software development program and projects.
          </p>
        </div>

        <div className="skills-grid">

          <div className="skill-group">
            <h3>Programming</h3>
            <div className="skill-list">
              <span>C#</span>
              <span>Java</span>
              <span>JavaScript</span>
              <span>SQL</span>
            </div>
          </div>

          <div className="skill-group">
            <h3>Web Development</h3>
            <div className="skill-list">
              <span>HTML</span>
              <span>CSS</span>
              <span>React</span>
              <span>Node.js</span>
              <span>Express</span>
            </div>
          </div>

          <div className="skill-group">
            <h3>Tools</h3>
            <div className="skill-list">
              <span>Git</span>
              <span>GitHub</span>
              <span>Visual Studio</span>
              <span>IntelliJ</span>
            </div>
          </div>

        </div>

      </section>
      <section className="about" id="about">

  <div className="section-heading">
    <p className="section-label">ABOUT ME</p>
    <h2>A Little About Me</h2>
  </div>

  <div className="about-content">

    <p>
      I am an Information Technology: Software Development student at NBCC
      with experience working with C#, Java, JavaScript, SQL, and web
      development technologies.
    </p>

    <p>
      Through my coursework and projects, I have gained experience building
      applications, working with databases, using Git and GitHub, and
      collaborating on group projects.
    </p>

    <p>
      My goal is to continue developing my programming and problem-solving
      skills while gaining professional experience in software development.
    </p>

  </div>

</section>
<section className="experience" id="experience">

  <div className="section-heading">
    <p className="section-label">EXPERIENCE</p>
    <h2>Work Experience</h2>
    <p className="section-description">
      Experience that has helped me develop teamwork, communication,
      leadership, and problem-solving skills.
    </p>
  </div>

  <div className="experience-grid">

    <div className="experience-card">
      <p className="experience-date">2021 - 2025</p>
      <h3>Customer Service & Team Leadership</h3>
      <p>
        Supported daily operations, helped customers, trained team members,
        handled cash and end-of-day tasks, helped with inventory, and handled
        customer concerns.
      </p>
    </div>

    <div className="experience-card">
      <p className="experience-date">2024 - 2025</p>
      <h3>Election Services</h3>
      <p>
        Worked in several election roles supporting voters, registration,
        polling procedures, and ballot processing while maintaining
        accuracy and confidentiality.
      </p>
    </div>

  </div>

</section>
<section className="education" id="education">

  <div className="section-heading">
    <p className="section-label">EDUCATION</p>
    <h2>Education</h2>
    <p className="section-description">
      My education and experience throughout the Software Development program.
    </p>
  </div>

  <div className="education-top">
    <p className="education-date">2025 - 2027</p>

    <h3>Information Technology: Software Development</h3>

    <p className="education-school">
      New Brunswick Community College (NBCC) - Fredericton, NB
    </p>
  </div>

  <div className="education-highlights">

    <div className="education-item">
      <p className="education-number">01</p>
      <h4>Application Development</h4>
      <p>
        Built desktop, web, and database applications through
        individual and team projects.
      </p>
    </div>

    <div className="education-item">
      <p className="education-number">02</p>
      <h4>Object-Oriented Programming</h4>
      <p>
        Worked with C# and Java using arrays, collections,
        input validation, exception handling, and debugging.
      </p>
    </div>

    <div className="education-item">
      <p className="education-number">03</p>
      <h4>Team Projects & Version Control</h4>
      <p>
        Used Git and GitHub for branching, commits, merging,
        and working on collaborative projects.
      </p>
    </div>

  </div>
</section>

<section className="contact" id="contact">

  <div className="contact-content">

    <p className="section-label">CONTACT</p>

    <h2>Let's Connect</h2>

    <p className="contact-description">
      I'm always interested in learning new things and gaining experience
      in software development. Feel free to get in touch with me.
    </p>

    <div className="contact-links">

      <a href="mailto:Ralturk01@mynbcc.ca" className="contact-button">
        Email Me
      </a>

      <a
        href="https://github.com/Ramaalt2312"
        target="_blank"
        rel="noreferrer"
        className="contact-button"
      >
        GitHub
      </a>

    </div>

  </div>

</section>

      </main>
      
<footer className="footer">
  <p>© 2026 Rama Alturk</p>
  <p>Software Development Portfolio</p>
</footer>


    </>
  )
}

export default App