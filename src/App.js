import logo from './logo.svg';
import './App.css';
import Inputstudent from './components/Inputstudent';
import Liststudent from './components/Liststudent';

function App() {
  return (
    <div className="App">
      <button className='btn btn-primary'>click me</button>
      <Inputstudent/>
      <Liststudent/>
    </div>
  );
}

export default App;
