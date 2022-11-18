import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import Footer from './components/Footer/Footer';
import Test from './pages/Test';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/test" element={<Test />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
