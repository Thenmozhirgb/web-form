import logo from './logo.svg';
import './App.css';
import Banner1 from './components/Banner1';
import Banner2 from './components/Banner2';
import Banner3 from './components/Banner3';
import Banner4 from './components/Banner4';
import Banner5 from './components/Banner5';
import Banner6 from './components/Banner6';
import Banner7 from './components/Banner7';

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header>*/}
<Banner1 />
<Banner2 />
<Banner3 />
<Banner4 />
<Banner5 />
<Banner6 />
<Banner7 />
    </div>
  );
}

export default App;
