import { Navigate, Route, Routes } from 'react-router-dom';

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<div>login</div>} />
      <Route path="/register" element={<div>register</div>} />
      <Route path="*" element={<Navigate to={'/login'} replace />} />
    </Routes>
  );
};

export default PublicRoutes;
