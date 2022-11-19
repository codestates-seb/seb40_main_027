import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Footer from './components/Footer/Footer';
import Main from './pages/Main';
import MyPage from './pages/Mypage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/users/me" element={<MyPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
