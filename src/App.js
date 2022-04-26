import Home from './pages/home'
import About from './pages/about';
import Booking from './pages/booking';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './app.css';


function App() {
  return (
    <>
      <Router>
        <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/about' element={<About/>} />
           <Route path='/booking' element={<Booking/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
