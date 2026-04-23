export default function Home() {
  const skills = {
    'Languages': ['Java', 'JavaScript', 'Python'],
    'Frontend': ['React', 'Vite', 'Tailwind CSS', 'HTML/CSS'],
    'Backend': ['Spring Boot', 'REST APIs', 'JWT'],
    'Database': ['MySQL','MongoDB'],
    'Tools': ['Git', 'Docker', 'Postman', 'IntelliJ IDEA'],
  };

  const education = [
    { year: '2022–2026', degree: 'B.Tech in Computer Science', college: 'Maharishi Markandeshwar Deemed to be University, Mullana, Ambala, Haryana', grade: '6.8 CGPA' },
    { year: '2020–2022', degree: 'Intermediate (PCM)', college: 'Asarfi Kuar Ramratan Ray College, Kotwa, East-Champaran, Bihar, 845437', grade: '75.8%' },
    { year: '2018–2020', degree: 'Matriculation (10th)', college: ' High School Tenua, East-Champaran, Bihar, 845437', grade: '77.8%' },
  ];

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '4rem 2rem' }}>

      {/* Hero */}
      <section style={{ marginBottom: '6rem' }}>
        <p style={{ color: '#6ee7b7', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '1rem' }}>
          HELLO, I'M
        </p>
        <h1 style={{
          fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', color: '#e2e8f0'
        }}>
          Dhirendra Kumar<br />
          <span style={{
            background: 'linear-gradient(135deg,#6ee7b7,#818cf8)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
          }}>
            Java Developer
          </span>
        </h1>
        <p style={{
          color: '#94a3b8', fontSize: '1.1rem', maxWidth: 600,
          lineHeight: 1.7, marginBottom: '2.5rem'
        }}>
          I build modern web applications with Java Spring Boot and React.
          Passionate about clean code, great UX, and scalable architecture.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="/contact" style={{
            background: 'linear-gradient(135deg,#6ee7b7,#818cf8)', color: '#0a0a0f',
            fontWeight: 700, borderRadius: 10, padding: '0.75rem 2rem',
            textDecoration: 'none', fontSize: '1rem'
          }}>
            Contact Me →
          </a>
          <a href="/projects" style={{
            background: 'transparent', border: '1px solid rgba(255,255,255,0.15)',
            color: '#e2e8f0', borderRadius: 10, padding: '0.75rem 2rem',
            textDecoration: 'none', fontSize: '1rem'
          }}>
            View Projects
          </a>
        </div>
      </section>

      {/* About */}
      <section style={{ marginBottom: '5rem' }}>
        <h2 style={{
          fontFamily: 'Syne, sans-serif', fontSize: '2rem', fontWeight: 700,
          color: '#e2e8f0', marginBottom: '1.5rem'
        }}>
          About Me
        </h2>
        <div style={{
          background: '#13131a', border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: 16, padding: '2rem'
        }}>
          <p style={{ color: '#94a3b8', lineHeight: 1.8, fontSize: '1.05rem' }}>
            I'm a passionate Java developer from India, specializing in building scalable
            web applications using Java Spring Boot and React. I love solving complex problems
            and turning ideas into real products. Currently open to full-time opportunities
            and freelance projects.
          </p>
        </div>
      </section>

      {/* Education */}
      <section style={{ marginBottom: '5rem' }}>
        <h2 style={{
          fontFamily: 'Syne, sans-serif', fontSize: '2rem', fontWeight: 700,
          color: '#e2e8f0', marginBottom: '1.5rem'
        }}>
          Education
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {education.map((edu, i) => (
            <div key={i} style={{
              background: '#13131a', border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 16, padding: '1.5rem 2rem',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem'
            }}>
              <div>
                <p style={{ color: '#6ee7b7', fontSize: '0.85rem', marginBottom: '0.25rem' }}>{edu.year}</p>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: '#e2e8f0', marginBottom: '0.25rem' }}>
                  {edu.degree}
                </h3>
                <p style={{ color: '#64748b' }}>{edu.college}</p>
              </div>
              <div style={{
                background: 'rgba(110,231,183,0.1)', border: '1px solid rgba(110,231,183,0.2)',
                borderRadius: 8, padding: '0.4rem 1rem', color: '#6ee7b7', fontWeight: 600
              }}>
                {edu.grade}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 style={{
          fontFamily: 'Syne, sans-serif', fontSize: '2rem', fontWeight: 700,
          color: '#e2e8f0', marginBottom: '1.5rem'
        }}>
          Skills
        </h2>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem'
        }}>
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} style={{
              background: '#13131a', border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 16, padding: '1.5rem'
            }}>
              <h4 style={{
                fontFamily: 'Syne, sans-serif', color: '#818cf8',
                fontWeight: 600, marginBottom: '1rem', fontSize: '0.9rem', letterSpacing: '0.05em'
              }}>
                {category.toUpperCase()}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {items.map(skill => (
                  <li key={skill} style={{ color: '#94a3b8', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: '#6ee7b7' }}>▸</span> {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
