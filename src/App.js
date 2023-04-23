import logo from './logo.svg';
import './App.css';

const number = 1234;
// const singer = { name: 'Dr. Mahfuz', job: 'Singer' };
// const singer2 = { name: 'Eva Rahman', job: 'Singer' };

const singers = [
  { name: 'Dr. Mahfuz', job: 'Singer' },
  { name: 'Eva Rahman', job: 'Singer' },
  { name: 'Agun', job: 'Amar Shopno' },
  { name: 'Kumar Sanu', job: 'Aguner Din' }
]

const singerStyle = {
  color: 'purple',
  backgroundColor: 'cyan',
  padding: '5px',
  borderRadius: '5px'
};

function App() {
  const nayoks = ['Salman Shah', 'Rubel', 'Bappa Raz', 'Joshim', 'Shakib Khan', 'Riyaz', 'Razzak'];
  return (
    <div className="App">
      {/* <div className="music">
        <p>Number: {4321 + number}</p>
        <p style={singerStyle}>Name: {singer.name} {singer.job}</p>
        <p style={{ color: 'black', backgroundColor: 'powderblue' }}>Name: {singer2.name} {singer2.job}</p>
      </div> */}
      {
        nayoks.map(nayok => <li>Name: {nayok}</li>)
      }
      {/* <Person name='Salman Shah' nayika='Sabnur'></Person>
      <Person name='Rubel' nayika='Moushumi'></Person>
      <Person name='Bappa Raz' nayika='Cheka Khay'></Person> */}
      {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      }
      <h3>Here new Component!!</h3>
      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }

      <h3>Here new component !!!</h3>
      <Friend name='Sobuj' address='Tangail' phone='017********'></Friend>
      <Friend name='Ashik' address='Pabna' phone='018********'></Friend>
    </div>
  );
};

function Person(props) {
  return (
    <div className='person'>
      <h1>Name: {props.name}</h1>
      <h3> {props.nayika}</h3>
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
