import Contact from './components/Contact.js';

function App() {
  return (
    <div className="App">
      <Contact 
      name="Ron Hudson"
      avatar="https://randomuser.me/api/portraits/men/36.jpg"
      online={true}
      />
      <Contact 
      name="Peter Harper"
      avatar="https://randomuser.me/api/portraits/men/13.jpg"
      online={false}
      />
      <Contact 
      name="Kathy Watts"
      avatar="https://randomuser.me/api/portraits/women/3.jpg"
      online={true}
      />
    </div>
  );
}

export default App;
