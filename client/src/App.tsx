import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Mypage from './pages/Mypage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/users/me" element={<Mypage />} />
    </Routes>
  );
}

export default App;
