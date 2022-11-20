import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Footer from './components/Footer/Footer';
import Main from './pages/Main';
import MyPage from './pages/MyPage';
import BootCamp from './pages/BootCamp';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/users/me" element={<MyPage />} />
        <Route path="/bootcamp" element={<BootCamp />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
