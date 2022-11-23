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
import PrivateRoute from './components/Route/PrivateRoute';
import MainHeader from './components/Header/MainHeader';
import PageHeader from './components/Header/PageHeader';
import PageNotFound from './pages/PageNotFound';

function App() {
  const location = useLocation().pathname;

  return (
    <>
      {location === '/users/login' || location === '/users/signup' ? null : location === '/' ? (
        <MainHeader />
      ) : (
        <PageHeader />
      )}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/users/login" element={<Login />} />
        <Route path="/users/signup" element={<SignUp />} />
        <Route path="/users/mypage" element={<MyPage />} />
        <Route path="/test" element={<Test />} />
        <Route path="/bootcamp" element={<BootCamp />} />
        <Route path="/bootcamp/1" element={<BootCampDetail />} />
        <Route path="/postscript" element={<Forum />} />
        <Route path="/postscript/:id" element={<Forum />} />
        <Route path="/postscript/write" element={<Forum />} />
        <Route path="/study" element={<Forum />} />
        <Route path="/study/:id" element={<Forum />} />
        <Route path="/study/write" element={<Forum />} />
        <Route path="/mentoring" element={<Forum />} />
        <Route path="/mentoring/:id" element={<Forum />} />
        <Route path="/mentoring/write" element={<Forum />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      {location === '/users/login' || location === '/users/signup' ? null : <Footer />}
    </>
  );
}

export default App;
