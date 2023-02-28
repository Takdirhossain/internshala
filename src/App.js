import logo from './logo.svg';
import './App.scss';
import Nav from './components/nav/Nav';
import Interships from './components/internships/Interships';
import Traning from './components/traning/Traning';
import Cources from './components/courses/Cources';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Interships></Interships>
     <Traning></Traning>
     <Cources></Cources>
    </div>
  );
}

export default App;
