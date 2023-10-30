
import './App.css';
import Modal from './Components/Modal';

function App() {
  return (
    <div className="App">
      <h1> Hey, click on the button to open the modal.</h1>
      <button className='openModalBtn'>Open</button>
      <Modal />
    </div>
  );
}

export default App;
