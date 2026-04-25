export default function Resume() {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '4rem 2rem' }}>
      <h1 style={{
        fontFamily: 'Syne, sans-serif', fontSize: '2.5rem', fontWeight: 800,
        color: '#e2e8f0', marginBottom: '0.5rem'
      }}>
        My Resume
      </h1>
      <p style={{ color: '#64748b', marginBottom: '2rem' }}>
        Download or view my resume below
      </p>

      <a
        href="/Resume_Latex.pdf"
        download="My Resume"
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          background: 'linear-gradient(135deg,#6ee7b7,#818cf8)',
          color: '#0a0a0f', fontWeight: 700, borderRadius: 10,
          padding: '0.75rem 2rem', textDecoration: 'none',
          fontSize: '1rem', marginBottom: '2rem'
        }}
      >
        ↓ Download PDF
      </a>

      {/* Inline PDF viewer */}
      <div style={{
        background: '#13131a', border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: 16, overflow: 'hidden', height: '85vh'
      }}>
        <iframe
          src="/"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
          title="Resume"
        />
      </div>
    </div>
  );
}

