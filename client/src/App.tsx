import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
