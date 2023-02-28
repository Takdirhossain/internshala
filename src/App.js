import logo from './logo.svg';
import './App.scss';
import Nav from './components/nav/Nav';
import Interships from './components/internships/Interships';
import Traning from './components/traning/Traning';
import Cources from './components/courses/Cources';
import Jobs from './components/jobs/Jobs';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Interships></Interships>
     <Traning></Traning>
     <Cources></Cources>
     <Jobs></Jobs>
     <Footer></Footer>
    </div>
  );
}

export default App;
