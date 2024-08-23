import { Navigate, Route, Routes } from 'react-router-dom';

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/requests" element={<div>requests</div>} />
      <Route path="/create" element={<div>create</div>} />
      <Route path="/create/order" element={<div>order</div>} />
      <Route path="/create/deliver" element={<div>deliver</div>} />
      <Route path="*" element={<Navigate to={'/requests'} replace />} />
    </Routes>
  );
};

export default PrivateRoutes;
