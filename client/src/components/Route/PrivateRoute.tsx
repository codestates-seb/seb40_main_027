import { Navigate } from 'react-router-dom';
// import { useRecoilValue } from 'recoil';
// import { isLogin } from '../atoms';

// 로그인 저장 정보 확립 시 재수정 필요
// const status = useRecoilValue(isLogin);

const status = false;

const PrivateRoute = ({ children }: any) => {
  return !status ? <Navigate to="/users/login" /> : children;
};

export default PrivateRoute;
