import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/user/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
