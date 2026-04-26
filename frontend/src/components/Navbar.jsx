import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

const ADMIN_USERNAME = 'DhirendraKumar001';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
    setMenuOpen(false);
  };

  const isAdmin = user && user.username === ADMIN_USERNAME;

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/projects', label: 'Projects' },
    { to: '/resume', label: 'Resume' },
    { to: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav style={{
      background: 'rgba(10,10,15,0.95)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      position: 'sticky', top: 0, zIndex: 50,
      width: '100%'
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        padding: '0 1.25rem',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', height: 64
      }}>
        {/* Logo */}
        <Link to="/" style={{
          fontFamily: 'Syne, sans-serif', fontWeight: 800,
          fontSize: '1.1rem',
          background: 'linear-gradient(135deg,#6ee7b7,#818cf8)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          flexShrink: 0
        }}>
          &lt;DhirendraKumar /&gt;
        </Link>

        {/* Desktop Links */}
        <div style={{
          display: 'flex', gap: '1.5rem', alignItems: 'center',
          '@media (max-width: 768px)': { display: 'none' }
        }} className="desktop-nav">
          {navLinks.map(link => (
            <Link key={link.to} to={link.to} style={{
              color: isActive(link.to) ? '#6ee7b7' : '#94a3b8',
              fontWeight: 500, textDecoration: 'none', fontSize: '0.95rem'
            }}>
              {link.label}
            </Link>
          ))}

          {isAdmin && (
            <Link to="/admin" style={{
              color: '#818cf8', fontWeight: 700,
              textDecoration: 'none', fontSize: '0.9rem',
              background: 'rgba(129,140,248,0.1)',
              border: '1px solid rgba(129,140,248,0.3)',
              borderRadius: 8, padding: '0.3rem 0.9rem'
            }}>
              ⚙ Admin
            </Link>
          )}

          {user ? (
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <span style={{ color: '#64748b', fontSize: '0.85rem' }}>
                Hi, {user.username}
              </span>
              <button onClick={handleLogout} style={{
                background: 'rgba(239,68,68,0.1)',
                border: '1px solid rgba(239,68,68,0.3)',
                color: '#f87171', borderRadius: 8,
                padding: '0.35rem 0.9rem',
                cursor: 'pointer', fontSize: '0.85rem'
              }}>
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" style={{
              background: 'linear-gradient(135deg,#6ee7b7,#818cf8)',
              color: '#0a0a0f', fontWeight: 700, borderRadius: 8,
              padding: '0.4rem 1.2rem', textDecoration: 'none',
              fontSize: '0.9rem'
            }}>
              Login
            </Link>
          )}
        </div>

        {/* Hamburger Button — mobile only */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hamburger"
          style={{
            background: 'none', border: 'none',
            cursor: 'pointer', display: 'none',
            flexDirection: 'column', gap: 5,
            padding: '0.5rem'
          }}>
          <span style={{
            display: 'block', width: 24, height: 2,
            background: menuOpen ? '#6ee7b7' : '#94a3b8',
            borderRadius: 2,
            transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
            transition: 'all 0.2s'
          }} />
          <span style={{
            display: 'block', width: 24, height: 2,
            background: menuOpen ? '#6ee7b7' : '#94a3b8',
            borderRadius: 2,
            opacity: menuOpen ? 0 : 1,
            transition: 'all 0.2s'
          }} />
          <span style={{
            display: 'block', width: 24, height: 2,
            background: menuOpen ? '#6ee7b7' : '#94a3b8',
            borderRadius: 2,
            transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
            transition: 'all 0.2s'
          }} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: '#13131a',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          padding: '1rem 1.25rem',
          display: 'flex', flexDirection: 'column', gap: '1rem'
        }} className="mobile-menu">
          {navLinks.map(link => (
            <Link key={link.to} to={link.to}
              onClick={() => setMenuOpen(false)}
              style={{
                color: isActive(link.to) ? '#6ee7b7' : '#94a3b8',
                fontWeight: 500, textDecoration: 'none',
                fontSize: '1rem', padding: '0.5rem 0',
                borderBottom: '1px solid rgba(255,255,255,0.04)'
              }}>
              {link.label}
            </Link>
          ))}

          {isAdmin && (
            <Link to="/admin" onClick={() => setMenuOpen(false)} style={{
              color: '#818cf8', fontWeight: 700,
              textDecoration: 'none', fontSize: '1rem',
              padding: '0.5rem 0',
              borderBottom: '1px solid rgba(255,255,255,0.04)'
            }}>
              ⚙ Admin
            </Link>
          )}

          {user ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingTop: '0.5rem' }}>
              <span style={{ color: '#64748b', fontSize: '0.9rem' }}>
                Hi, {user.username}
              </span>
              <button onClick={handleLogout} style={{
                background: 'rgba(239,68,68,0.1)',
                border: '1px solid rgba(239,68,68,0.3)',
                color: '#f87171', borderRadius: 8,
                padding: '0.6rem 1rem',
                cursor: 'pointer', fontSize: '0.9rem',
                textAlign: 'left'
              }}>
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" onClick={() => setMenuOpen(false)} style={{
              background: 'linear-gradient(135deg,#6ee7b7,#818cf8)',
              color: '#0a0a0f', fontWeight: 700, borderRadius: 8,
              padding: '0.6rem 1.2rem', textDecoration: 'none',
              fontSize: '0.95rem', textAlign: 'center'
            }}>
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}