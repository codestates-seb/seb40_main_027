import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import SignUp from './pages/SignUp';
import Footer from './components/Footer/Footer';
import MyPage from './pages/MyPage';
import Test from './pages/Test';
import Forum from './pages/Forum';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/signup" element={<SignUp />} />
        <Route path="/test" element={<Test />} />
        <Route path="/users/me" element={<MyPage />} />
        <Route path="/postscript" element={<Forum />} />
        <Route path="/postscript/:id" element={<Forum />} />
        <Route path="/postscript/write" element={<Forum />} />
        <Route path="/study" element={<Forum />} />
        <Route path="/study/:id" element={<Forum />} />
        <Route path="/study/write" element={<Forum />} />
        <Route path="/mentoring" element={<Forum />} />
        <Route path="/mentoring/:id" element={<Forum />} />
        <Route path="/mentoring/write" element={<Forum />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
