import { useEffect, useState } from 'react';
import api from '../api/axiosInstance';

// Helper to ensure URL has proper protocol
const formatUrl = (url) => {
  if (!url || url.trim() === '') return null;
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  return 'https://' + url;
};

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/projects')
      .then(res => setProjects(res.data))
      .catch(() => setProjects([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return (
    <div style={{
      minHeight: '60vh', display: 'flex',
      alignItems: 'center', justifyContent: 'center',
      color: '#6ee7b7'
    }}>
      Loading projects...
    </div>
  );

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '4rem 1.25rem' }}>
      <h1 style={{
        fontFamily: 'Syne, sans-serif', fontSize: '2.5rem',
        fontWeight: 800, color: '#e2e8f0', marginBottom: '0.5rem'
      }}>
        My Projects
      </h1>
      <p style={{ color: '#64748b', marginBottom: '3rem' }}>
        Things I've built and shipped
      </p>

      {projects.length === 0 ? (
        <div style={{
          textAlign: 'center', padding: '4rem',
          background: '#13131a', borderRadius: 16,
          border: '1px dashed rgba(255,255,255,0.1)',
          color: '#64748b'
        }}>
          No projects yet.
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}>
          {projects.map(project => (
            <div key={project.id} style={{
              background: '#13131a',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 16, overflow: 'hidden'
            }}>
              {project.imageUrl && (
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  style={{ width: '100%', height: 180, objectFit: 'cover' }}
                />
              )}
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{
                  fontFamily: 'Syne, sans-serif', fontWeight: 700,
                  color: '#e2e8f0', marginBottom: '0.5rem', fontSize: '1.1rem'
                }}>
                  {project.title}
                </h3>
                <p style={{
                  color: '#64748b', fontSize: '0.9rem',
                  lineHeight: 1.6, marginBottom: '1rem'
                }}>
                  {project.description}
                </p>
                <div style={{
                  display: 'flex', flexWrap: 'wrap',
                  gap: '0.4rem', marginBottom: '1.5rem'
                }}>
                  {project.techStack?.split(',').map(tech => (
                    <span key={tech} style={{
                      background: 'rgba(129,140,248,0.1)',
                      border: '1px solid rgba(129,140,248,0.2)',
                      color: '#818cf8', borderRadius: 6,
                      padding: '0.25rem 0.6rem', fontSize: '0.75rem'
                    }}>
                      {tech.trim()}
                    </span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  {formatUrl(project.githubUrl) && (
                    <a
                      href={formatUrl(project.githubUrl)}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: '#6ee7b7', fontSize: '0.85rem',
                        textDecoration: 'none',
                        border: '1px solid rgba(110,231,183,0.3)',
                        borderRadius: 8, padding: '0.4rem 1rem'
                      }}
                    >
                      GitHub →
                    </a>
                  )}
                  {formatUrl(project.liveUrl) && (
                    <a
                      href={formatUrl(project.liveUrl)}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        background: 'linear-gradient(135deg,#6ee7b7,#818cf8)',
                        color: '#0a0a0f', fontWeight: 700,
                        fontSize: '0.85rem', textDecoration: 'none',
                        borderRadius: 8, padding: '0.4rem 1rem'
                      }}
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}