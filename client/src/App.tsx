import Some from './some';
// import logo from './image/logo.png';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Header />
          {/* <img src={logo} alt="logo" /> */}
        </div>
        <div>hi</div>
        <Some />
      </header>
    </div>
  );
}

export default App;
