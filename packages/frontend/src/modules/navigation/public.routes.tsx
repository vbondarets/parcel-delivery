import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages/login';
import { RegisterPage } from '../pages/register';

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<Navigate to={'/login'} replace />} />
    </Routes>
  );
};

export default PublicRoutes;
