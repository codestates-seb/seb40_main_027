import { Navigate, Route, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { logUser } from '../../atoms';

// 로그인 저장 정보 확립 시 재수정 필요 - 다른 branch로 작업 예정
const { isLog } = useRecoilValue(logUser);

const PrivateRoute = ({ children }: any) => {
  // const { pathname } = useLocation();
  // console.log(pathname);

  return !isLog ? <Navigate to="/users/login" /> : children;
};

export default PrivateRoute;
