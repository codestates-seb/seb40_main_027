import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Main from './pages/Main';
import MyPage from './pages/MyPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/users/me" element={<MyPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
