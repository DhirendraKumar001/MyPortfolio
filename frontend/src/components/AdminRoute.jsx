import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ADMIN_USERNAME = 'DhirendraKumar001';
const ADMIN_EMAIL = 'dhiraendra542005@gmail.com';

export default function AdminRoute({ children }) {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" replace />;

  if (user.username !== ADMIN_USERNAME && user.email !== ADMIN_EMAIL) {
    return <Navigate to="/" replace />;
  }

  return children;
}