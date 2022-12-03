import { useEffect } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { logUser } from '../../atoms';

const AuthLayout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { isLog } = useRecoilValue(logUser);

  useEffect(() => {
    if (!isLog) {
      alert('로그인 후 이용해주세요');
      navigate('/users/login', { state: pathname });
    }
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
