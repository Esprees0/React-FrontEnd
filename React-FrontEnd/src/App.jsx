import Contact from './assets/Contact';
import Counter from './assets/Counter';
import Hello from './assets/Hello';

function App() {
  const helloData = [
    { name: 'LOL', message: 'Hi there'},
    { name: 'Ton', message: 'Hello..'}
  ];
  return (
    <div className='App'>
      < Counter/>
      {helloData.map((data, index) => (
        <Hello key={index} name={data.name} message={data.message} />
      ))}
      <Contact email='Susuna@email.com' phone='0927285215' />
    </div>
  );
}

export default App;
