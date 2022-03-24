import Home from './pages/home'
import Services from './pages/services';
import About from './pages/about';
import Blog from './pages/blog'
import Booking from './pages/booking';
import Error from './pages/error';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './app.css';


function App() {
  return (
    <>
      <Router>
        <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/blog' element={<Blog/>} />
           <Route path='/about' element={<About/>} />
           <Route path='/services' element={<Services/>} />
           <Route path='/booking' element={<Booking/>} />
           <Route path='*' element={<Error/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
