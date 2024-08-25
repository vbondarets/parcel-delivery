/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import PublicRoutes from './public.routes';
import PrivateRoutes from './private.routes';
import { Header } from '../common/components/header';
import { useAuthStore } from '../store/auth.store';
import { useUserStore } from '../store/user.store';
import { useGetSelf } from '../common/hooks/getSelf.hook';
export const MainRouter = () => {
  const [isLoadingPage, setIsLoadingPage] = useState(true);
  const { isSelfLoading } = useGetSelf();
  const { user } = useUserStore();
  const { isAuth, setIsAuth } = useAuthStore();

  useEffect(() => {
    setIsLoadingPage(isSelfLoading);
    if (user?.token) {
      setIsAuth(true);
    }
  }, [isSelfLoading]);
  if (isLoadingPage) {
    return <div>loading</div>;
  }
  return (
    <>
      <Header />
      {isAuth ? <PrivateRoutes /> : <PublicRoutes />}
    </>
  );
};
