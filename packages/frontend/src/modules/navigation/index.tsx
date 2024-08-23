/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import PublicRoutes from './public.routes';
import PrivateRoutes from './private.routes';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '../common/components/header';
import { useGetSelf } from '../common/hooks';
import { useAuthStore } from '../store/auth.store';
import { useUserStore } from '../store/user.store';
export const MainRouter = () => {
  const [isLoadingPage, setIsLoadingPage] = useState(true);
  const { isLoading } = useGetSelf();
  const { user } = useUserStore();
  const [isAuth, setIsAuth] = useAuthStore((state) => [
    state.isAuth,
    state.setIsAuth,
  ]);

  useEffect(() => {
    setIsLoadingPage(isLoading);
    if (user?.token) {
      setIsAuth(true);
    }
  }, [isLoading]);
  if (isLoadingPage) {
    return <div>loading</div>;
  }
  return (
    <BrowserRouter>
      <Header />
      {isAuth ? <PrivateRoutes /> : <PublicRoutes />}
    </BrowserRouter>
  );
};
