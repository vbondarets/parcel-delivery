import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages/login';

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<div>register</div>} />
      <Route path="*" element={<Navigate to={'/login'} replace />} />
    </Routes>
  );
};

export default PublicRoutes;
