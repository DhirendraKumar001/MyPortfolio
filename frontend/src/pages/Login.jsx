import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/axiosInstance';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); setError('');
    try {
      const res = await api.post('/auth/login', form);
      login(res.data);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: '#0a0a0f', padding: '2rem'
    }}>
      <div style={{
        width: '100%', maxWidth: 420,
        background: '#13131a', border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: 20, padding: '2.5rem'
      }}>
        <h2 style={{
          fontFamily: 'Syne, sans-serif', fontSize: '1.8rem', fontWeight: 800,
          marginBottom: '0.5rem', color: '#e2e8f0'
        }}>
          Welcome back
        </h2>
        <p style={{ color: '#64748b', marginBottom: '2rem' }}>
          Don't have an account?{' '}
          <Link to="/register" style={{ color: '#6ee7b7' }}>Register</Link>
        </p>

        {error && (
          <div style={{
            background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)',
            color: '#f87171', borderRadius: 8, padding: '0.75rem 1rem', marginBottom: '1rem'
          }}>{error}</div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {['username', 'password'].map(field => (
            <div key={field}>
              <label style={{ color: '#94a3b8', fontSize: '0.85rem', display: 'block', marginBottom: '0.4rem' }}>
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                name={field}
                type={field === 'password' ? 'password' : 'text'}
                value={form[field]}
                onChange={handleChange}
                required
                style={{
                  width: '100%', background: '#0a0a0f',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 8, padding: '0.65rem 1rem',
                  color: '#e2e8f0', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box'
                }}
              />
            </div>
          ))}

          <button type="submit" disabled={loading} style={{
            background: 'linear-gradient(135deg,#6ee7b7,#818cf8)',
            color: '#0a0a0f', fontWeight: 700, border: 'none',
            borderRadius: 8, padding: '0.75rem', cursor: 'pointer',
            fontSize: '1rem', marginTop: '0.5rem', opacity: loading ? 0.7 : 1
          }}>
            {loading ? 'Signing in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}


