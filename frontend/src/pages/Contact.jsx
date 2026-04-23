import { useState } from 'react';
import api from '../api/axiosInstance';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); setStatus(null);
    try {
      await api.post('/contact', form);
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: '4rem 2rem' }}>
      <h1 style={{
        fontFamily: 'Syne, sans-serif', fontSize: '2.5rem', fontWeight: 800,
        color: '#e2e8f0', marginBottom: '0.5rem'
      }}>
        Contact Me
      </h1>
      <p style={{ color: '#64748b', marginBottom: '3rem' }}>
        Send me a message and I'll reply as soon as possible
      </p>

      {/* Contact info */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px,1fr))',
        gap: '1rem', marginBottom: '2.5rem'
      }}>
        {[
          { icon: '✉️', label: 'Email', value: 'dhiraendra542005@gmail.com' },
          { icon: '📍', label: 'Location', value: 'India' },
          { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/you' },
        ].map(item => (
          <div key={item.label} style={{
            background: '#13131a', border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 12, padding: '1.25rem', display: 'flex', gap: '0.75rem', alignItems: 'center'
          }}>
            <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
            <div>
              <p style={{ color: '#64748b', fontSize: '0.75rem' }}>{item.label}</p>
              <p style={{ color: '#e2e8f0', fontSize: '0.9rem' }}>{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Form */}
      <div style={{
        background: '#13131a', border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: 20, padding: '2.5rem'
      }}>
        {status === 'success' && (
          <div style={{
            background: 'rgba(110,231,183,0.1)', border: '1px solid rgba(110,231,183,0.3)',
            color: '#6ee7b7', borderRadius: 10, padding: '1rem', marginBottom: '1.5rem'
          }}>
            ✓ Message sent! I'll get back to you soon.
          </div>
        )}
        {status === 'error' && (
          <div style={{
            background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)',
            color: '#f87171', borderRadius: 10, padding: '1rem', marginBottom: '1.5rem'
          }}>
            ✕ Something went wrong. Please try again.
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {['name', 'email'].map(field => (
              <div key={field}>
                <label style={{ color: '#94a3b8', fontSize: '0.85rem', display: 'block', marginBottom: '0.4rem' }}>
                  {field === 'name' ? 'Your Name' : 'Email Address'}
                </label>
                <input
                  name={field}
                  type={field === 'email' ? 'email' : 'text'}
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
          </div>

          <div>
            <label style={{ color: '#94a3b8', fontSize: '0.85rem', display: 'block', marginBottom: '0.4rem' }}>
              Subject
            </label>
            <input
              name="subject"
              value={form.subject}
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

          <div>
            <label style={{ color: '#94a3b8', fontSize: '0.85rem', display: 'block', marginBottom: '0.4rem' }}>
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              style={{
                width: '100%', background: '#0a0a0f',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 8, padding: '0.65rem 1rem',
                color: '#e2e8f0', fontSize: '0.95rem', outline: 'none',
                resize: 'vertical', boxSizing: 'border-box', fontFamily: 'inherit'
              }}
            />
          </div>

          <button type="submit" disabled={loading} style={{
            background: 'linear-gradient(135deg,#6ee7b7,#818cf8)',
            color: '#0a0a0f', fontWeight: 700, border: 'none',
            borderRadius: 10, padding: '0.85rem', cursor: 'pointer',
            fontSize: '1rem', opacity: loading ? 0.7 : 1
          }}>
            {loading ? 'Sending...' : 'Send Message →'}
          </button>
        </form>
      </div>
    </div>
  );
}


