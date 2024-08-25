import { Navigate, Route, Routes } from 'react-router-dom';
import { MainPage } from '../pages/main/main.styled';
import { CreatePage } from '../pages/create';

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/requests" element={<MainPage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/create/order" element={<CreatePage creationType="order" />} />
      <Route path="/create/deliver" element={<CreatePage creationType="deliver" />} />
      <Route path="*" element={<Navigate to={'/requests'} replace />} />
    </Routes>
  );
};

export default PrivateRoutes;
