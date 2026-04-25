import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/projects', label: 'Projects' },
    { to: '/resume', label: 'Resume' },
    { to: '/contact', label: 'Contact' },
    { to: '/admin', label: 'Admin' },

  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav style={{
      background: 'rgba(10,10,15,0.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      position: 'sticky', top: 0, zIndex: 50
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 64 }}>
        {/* Logo */}
        <Link to="/" style={{
          fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.25rem',
          background: 'linear-gradient(135deg,#6ee7b7,#818cf8)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
        }}>
          &lt;Dhirendra Kumar/&gt;
        </Link>

        {/* Links */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {navLinks.map(link => (
            <Link key={link.to} to={link.to} style={{
              color: isActive(link.to) ? '#6ee7b7' : '#94a3b8',
              fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s',
              fontSize: '0.95rem'
            }}>
              {link.label}
            </Link>
          ))}

          {user ? (
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <span style={{ color: '#64748b', fontSize: '0.85rem' }}>
                Hi, {user.username}
              </span>
              <button onClick={handleLogout} style={{
                background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)',
                color: '#f87171', borderRadius: 8, padding: '0.4rem 1rem',
                cursor: 'pointer', fontSize: '0.85rem'
              }}>
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" style={{
              background: 'linear-gradient(135deg,#6ee7b7,#818cf8)', color: '#0a0a0f',
              fontWeight: 700, borderRadius: 8, padding: '0.4rem 1.2rem',
              textDecoration: 'none', fontSize: '0.9rem'
            }}>
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

