import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axiosInstance';
import { useAuth } from '../context/AuthContext';

export default function Admin() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    title: '', description: '', techStack: '',
    githubUrl: '', liveUrl: '', imageUrl: ''
  });
  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!user) { navigate('/login'); return; }
    fetchProjects();
  }, []);

  const fetchProjects = () => {
    api.get('/projects').then(res => setProjects(res.data));
  };

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await api.post('/images/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setForm(prev => ({ ...prev, imageUrl: res.data.url }));
      setMessage('✓ Image uploaded!');
    } catch {
      setMessage('✕ Image upload failed');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/projects', form);
      setMessage('✓ Project added!');
      setForm({ title: '', description: '', techStack: '', githubUrl: '', liveUrl: '', imageUrl: '' });
      setImageFile(null);
      fetchProjects();
    } catch {
      setMessage('✕ Failed to add project');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this project?')) return;
    await api.delete(`/projects/${id}`);
    fetchProjects();
  };

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '4rem 2rem' }}>
      <h1 style={{
        fontFamily: 'Syne, sans-serif', fontSize: '2rem',
        fontWeight: 800, color: '#e2e8f0', marginBottom: '2rem'
      }}>
        Admin — Manage Projects
      </h1>

      <div style={{
        background: '#13131a', border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: 16, padding: '2rem', marginBottom: '3rem'
      }}>
        <h2 style={{ color: '#6ee7b7', fontFamily: 'Syne, sans-serif', marginBottom: '1.5rem' }}>
          Add New Project
        </h2>

        {message && (
          <div style={{
            background: message.startsWith('✓') ? 'rgba(110,231,183,0.1)' : 'rgba(239,68,68,0.1)',
            border: `1px solid ${message.startsWith('✓') ? 'rgba(110,231,183,0.3)' : 'rgba(239,68,68,0.3)'}`,
            color: message.startsWith('✓') ? '#6ee7b7' : '#f87171',
            borderRadius: 8, padding: '0.75rem 1rem', marginBottom: '1rem'
          }}>{message}</div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {[
            { name: 'title', label: 'Project Title' },
            { name: 'description', label: 'Description' },
            { name: 'techStack', label: 'Tech Stack (comma separated)' },
            { name: 'githubUrl', label: 'GitHub URL' },
            { name: 'liveUrl', label: 'Live URL' },
          ].map(field => (
            <div key={field.name}>
              <label style={{ color: '#94a3b8', fontSize: '0.85rem', display: 'block', marginBottom: '0.4rem' }}>
                {field.label}
              </label>
              {field.name === 'description' ? (
                <textarea
                  name={field.name}
                  value={form[field.name]}
                  onChange={handleChange}
                  rows={3}
                  style={{
                    width: '100%', background: '#0a0a0f',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 8, padding: '0.65rem 1rem',
                    color: '#e2e8f0', fontSize: '0.95rem',
                    outline: 'none', boxSizing: 'border-box',
                    fontFamily: 'inherit', resize: 'vertical'
                  }}
                />
              ) : (
                <input
                  name={field.name}
                  value={form[field.name]}
                  onChange={handleChange}
                  style={{
                    width: '100%', background: '#0a0a0f',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 8, padding: '0.65rem 1rem',
                    color: '#e2e8f0', fontSize: '0.95rem',
                    outline: 'none', boxSizing: 'border-box'
                  }}
                />
              )}
            </div>
          ))}

          {/* Image Upload */}
          <div>
            <label style={{ color: '#94a3b8', fontSize: '0.85rem', display: 'block', marginBottom: '0.4rem' }}>
              Project Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{
                width: '100%', background: '#0a0a0f',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 8, padding: '0.65rem 1rem',
                color: '#e2e8f0', fontSize: '0.95rem',
                outline: 'none', boxSizing: 'border-box'
              }}
            />
            {uploading && <p style={{ color: '#6ee7b7', fontSize: '0.85rem', marginTop: '0.5rem' }}>Uploading...</p>}
            {form.imageUrl && (
              <img
                src={form.imageUrl}
                alt="Preview"
                style={{ width: '100%', height: 150, objectFit: 'cover', borderRadius: 8, marginTop: '0.5rem' }}
              />
            )}
          </div>

          <button type="submit" style={{
            background: 'linear-gradient(135deg,#6ee7b7,#818cf8)',
            color: '#0a0a0f', fontWeight: 700, border: 'none',
            borderRadius: 8, padding: '0.75rem', cursor: 'pointer', fontSize: '1rem'
          }}>
            + Add Project
          </button>
        </form>
      </div>

      {/* Existing Projects */}
      <h2 style={{ color: '#e2e8f0', fontFamily: 'Syne, sans-serif', marginBottom: '1rem' }}>
        Existing Projects ({projects.length})
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {projects.map(p => (
          <div key={p.id} style={{
            background: '#13131a', border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 12, padding: '1.25rem',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem'
          }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              {p.imageUrl && (
                <img src={p.imageUrl} alt={p.title}
                  style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: 8 }} />
              )}
              <div>
                <h3 style={{ color: '#e2e8f0', fontFamily: 'Syne, sans-serif', marginBottom: '0.25rem' }}>
                  {p.title}
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.85rem' }}>{p.techStack}</p>
              </div>
            </div>
            <button onClick={() => handleDelete(p.id)} style={{
              background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)',
              color: '#f87171', borderRadius: 8, padding: '0.4rem 1rem',
              cursor: 'pointer', whiteSpace: 'nowrap'
            }}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}