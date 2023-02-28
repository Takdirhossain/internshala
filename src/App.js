import logo from './logo.svg';
import './App.scss';
import Nav from './components/nav/Nav';
import Interships from './components/internships/Interships';
import Traning from './components/traning/Traning';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Interships></Interships>
     <Traning></Traning>
    </div>
  );
}

export default App;
