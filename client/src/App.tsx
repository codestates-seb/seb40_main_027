import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/user/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
