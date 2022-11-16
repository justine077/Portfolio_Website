import './App.css';
import Homepage from './components/Homepage/Homepage';
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Resume from './components/Resume';
import About from './components/About';
import Contact from './components/Contact';
function App() {
  return (
    <div className='bg-light'>
       <Navbar/>
   <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Homepage/>} />
        <Route path='/Portfolio' exact element={<Portfolio/>} />
        <Route path='/Skills' exact element={<Skills/>} />
        <Route path='/Resume' exact element={<Resume/>} />
        <Route path='/About' exact element={<About/>} />
        <Route path='/Contact' exact element={<Contact/>} />
      </Routes>
    </BrowserRouter>
   
      
    </div>
  );
}

export default App;
