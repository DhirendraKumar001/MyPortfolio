export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', to: '/' },
    { label: 'Projects', to: '/projects' },
    { label: 'Resume', to: '/resume' },
    { label: 'Contact', to: '/contact' },
  ];

  const socialLinks = [
    { label: 'GitHub', url: 'https://github.com/DhirendraKumar001' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/dhirendra-kumar-832880288' },
    { label: 'Twitter', url: 'https://twitter.com/yourhandle' },
  ];

  return (
    <footer style={{
      background: '#13131a',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      marginTop: 'auto'
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '3rem 1.25rem 2rem'
      }}>

        {/* Top Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '2rem',
          marginBottom: '2.5rem'
        }}>

          {/* Brand */}
          <div>
            <h3 style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800,
              fontSize: '1.1rem',
              marginBottom: '0.75rem',
              background: 'linear-gradient(135deg,#6ee7b7,#818cf8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              &lt;DhirendraKumar /&gt;
            </h3>
            <p style={{
              color: '#64748b',
              fontSize: '0.88rem',
              lineHeight: 1.7,
              maxWidth: 220
            }}>
              Java Developer passionate about building scalable web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 700,
              color: '#e2e8f0',
              fontSize: '0.95rem',
              marginBottom: '1rem'
            }}>
              Quick Links
            </h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.6rem'
            }}>
              {quickLinks.map(link => (
                <a
                  key={link.to}
                  href={link.to}
                  style={{
                    color: '#64748b',
                    textDecoration: 'none',
                    fontSize: '0.9rem'
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#6ee7b7'}
                  onMouseLeave={e => e.currentTarget.style.color = '#64748b'}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 700,
              color: '#e2e8f0',
              fontSize: '0.95rem',
              marginBottom: '1rem'
            }}>
              Contact
            </h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.6rem'
            }}>
              <a
                href="mailto:dhiraendra542005@gmail.com"
                style={{
                  color: '#64748b',
                  textDecoration: 'none',
                  fontSize: '0.88rem'
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#6ee7b7'}
                onMouseLeave={e => e.currentTarget.style.color = '#64748b'}
              >
                dhiraendra542005@gmail.com
              </a>
              <span style={{ color: '#64748b', fontSize: '0.88rem' }}>
                India
              </span>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 700,
              color: '#e2e8f0',
              fontSize: '0.95rem',
              marginBottom: '1rem'
            }}>
              Connect
            </h4>
            <div style={{
              display: 'flex',
              gap: '0.75rem',
              flexWrap: 'wrap'
            }}>
              {socialLinks.map(social => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: '#94a3b8',
                    borderRadius: 8,
                    padding: '0.4rem 0.9rem',
                    textDecoration: 'none',
                    fontSize: '0.85rem'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = '#6ee7b7';
                    e.currentTarget.style.borderColor = 'rgba(110,231,183,0.3)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = '#94a3b8';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                  }}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Divider */}
        <div style={{
          height: 1,
          background: 'rgba(255,255,255,0.06)',
          marginBottom: '1.5rem'
        }} />

        {/* Bottom */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <p style={{ color: '#64748b', fontSize: '0.85rem', margin: 0 }}>
            © {currentYear} Dhirendra Kumar. All rights reserved.
          </p>
          <p style={{ color: '#64748b', fontSize: '0.85rem', margin: 0 }}>
            Built with{' '}
            <span style={{ color: '#6ee7b7' }}>React</span>
            {' + '}
            <span style={{ color: '#6ee7b7' }}>Spring Boot</span>
          </p>
        </div>

      </div>
    </footer>
  );
}