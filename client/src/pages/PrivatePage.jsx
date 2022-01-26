import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/auth/useAuth';

function PrivatePage() {
  const { user } = useAuth();
  const location = useLocation();

  return user ? (
    <Outlet />
  ) : (
    <Navigate to={'/sign-in'} state={{ from: location }} />
  );
}

export default PrivatePage;
