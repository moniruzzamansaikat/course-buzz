import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { useAuth } from '../hooks/auth/useAuth';

function PrivatePage() {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/sign-in" state={{ from: location }} />;
  }

  return <Outlet />;
}

export default PrivatePage;
