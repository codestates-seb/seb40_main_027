import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Footer from './components/Footer/Footer';
import Main from './pages/Main';
import MyPage from './pages/MyPage';
import BootCamp from './pages/BootCamp';
import BootCampSpecific from './pages/BootCampSpecific';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/users/me" element={<MyPage />} />
        <Route path="/bootcamp" element={<BootCamp />} />
        <Route path="/bootcamp/1" element={<BootCampSpecific />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
