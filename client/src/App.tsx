import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import SignUp from './pages/SignUp';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
