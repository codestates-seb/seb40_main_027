import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Main from './pages/Main';
import Mypage from './pages/Mypage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/users/me" element={<Mypage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
