import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import SignUp from './pages/SignUp';
import Footer from './components/Footer/Footer';
import MyPage from './pages/MyPage';
import BootCamp from './pages/BootCamp';
import BootCampDetail from './pages/BootCampDetail';
import Test from './pages/Test';
import Forum from './pages/Forum';
import MainHeader from './components/Header/MainHeader';
import PageNotFound from './pages/PageNotFound';
import LoadMap from './pages/LoadMap';
import PageHeaderSide from './components/Header/PageHeaderSide';
import AuthoRoute from './components/Route/AuthRoute';

function App() {
  const { pathname } = useLocation();

  return (
    <>
      {pathname === '/users/login' || pathname === '/users/signup' ? null : pathname === '/' ? (
        <MainHeader />
      ) : (
        <PageHeaderSide />
      )}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/users/login" element={<Login />} />
        <Route path="/users/signup" element={<SignUp />} />
        <Route path="/test" element={<Test />} />
        <Route path="/loadmap" element={<LoadMap />} />
        <Route path="/bootcamp" element={<BootCamp />} />
        <Route path="/bootcamp/:id" element={<BootCampDetail />} />
        <Route path="/postscript" element={<Forum />} />
        <Route path="/postscript/:id" element={<Forum />} />
        <Route path="/study" element={<Forum />} />
        <Route path="/study/:id" element={<Forum />} />
        <Route path="/mentoring" element={<Forum />} />
        <Route path="/mentoring/:id" element={<Forum />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route element={<AuthoRoute />}>
          <Route path="/postscript/update" element={<Forum />} />
          <Route path="/mentoring/update" element={<Forum />} />
          <Route path="/study/update" element={<Forum />} />
          <Route path="/postscript/write" element={<Forum />} />
          <Route path="/mentoring/write" element={<Forum />} />
          <Route path="/study/write" element={<Forum />} />
          <Route path="/users/mypage" element={<MyPage />} />
        </Route>
      </Routes>
      {pathname === '/users/login' || pathname === '/users/signup' ? null : <Footer />}
    </>
  );
}

export default App;
