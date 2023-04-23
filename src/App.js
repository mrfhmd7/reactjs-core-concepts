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
      {/* <div className="music">
        <p>Number: {4321 + number}</p>
        <p style={singerStyle}>Name: {singer.name} {singer.job}</p>
        <p style={{ color: 'black', backgroundColor: 'powderblue' }}>Name: {singer2.name} {singer2.job}</p>
      </div> */}
      <Person name='Salman Shah' nayika='Sabnur'></Person>
      <Person name='Rebel' nayika='Moushumi'></Person>
      <Person name='Bappa Raz' nayika='ChekaKhay'></Person>
      <h3>Here new component !!!</h3>
      <Friend name='Sobuj' address='Tangail' phone='017********'></Friend>
      <Friend name='Ashik' address='Pabna' phone='018********'></Friend>
    </div>
  );
};

function Person(props) {
  return (
    <div className='person'>
      <h1>Nayok: {props.name}</h1>
      <h3>Nayika: {props.nayika}</h3>
    </div>
  );
};

function Friend(props) {
  return (
    <div className='container'>
      <h2>Name: {props.name}</h2>
      <h5>Address: {props.address}</h5>
      <p>Phone: {props.phone}</p>
    </div>
  );
};

export default App;
