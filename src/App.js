import logo from './logo.svg';
import './App.css';

const number = 1234;
const singer = { name: 'Dr. Mahfuz', job: 'Singer' };
const singer2 = { name: 'Eva Rahman', job: 'Singer' };
const singerStyle = {
  color: 'purple',
  backgroundColor: 'cyan',
  padding: '5px',
  borderRadius: '5px'
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        <div className="container">
          <h3>Hello Dude, React. How are you?</h3>
        </div>
        <div className="music">
          <p>Number: {4321 + number}</p>
          <p style={singerStyle}>Name: {singer.name} {singer.job}</p>
          <p style={{ color: 'black', backgroundColor: 'powderblue' }}>Name: {singer2.name} {singer2.job}</p>
        </div>
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
      </header>
    </div>
  );
}

export default App;
