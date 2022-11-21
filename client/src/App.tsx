import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Footer from './components/Footer/Footer';
import Main from './pages/Main';
import MyPage from './pages/MyPage';
import Forum from './pages/Forum';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/user/login" element={<Login />} />
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
