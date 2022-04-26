import Navbar from '../components/navbar'
import Announcement from '../components/announcemet'
import styled from 'styled-components'
import Footer from '../components/footer'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'


const Heading = styled.h1`
    display: flex;
    justify-content: center;
    font-size: 40px;
    color: #8BBEF7;
    padding-top: 40px;
    padding-bottom: 20px;
    font-family: 'Anton', sans-serif;

`;

const home = () => {
    return (
      <div className="container-fluid" >
      <div className="row">
          <div className="col-md-12">
          <Announcement/>
          </div>
  
      </div>
      <div className="row">
          <div className="col-md-12">
          <Navbar/>
          </div>
  
      </div>
      <div className="row">
          <div className="col-md-12">
          <Heading>Your car will never look the same!!! Book Now!!!</Heading>
          </div>
  
      </div>
      <div className="row">
          <div className="col-md-12">
          <Heading>Look what we can do!!!</Heading>

          </div>
  
      </div>
      <div className="row">
          <div className="col-md-4">
          <img src="../IMG_0739.jpg" alt='logo' height="275px"/>

          </div>
          <div className="col-md-4">
          <img src="../IMG_0602.jpg" alt='logo' height="275px"/>

          </div>
          <div className="col-md-4">
          <img src="../image312.jpeg" alt='logo' height="275px"/>
          </div>
  
      </div>
      <div className="row">
         
          <div className="col-md-4">
          <img src="../image5.jpeg" alt='logo' height="275px"/>
          </div>
          <div className="col-md-4">
          <img src="../image3.jpeg" alt='logo' height="275px"/>
          </div>
          <div className="col-md-4">
          <img src="../image6.jpeg" alt='logo' height="275px"/>
          </div>
  
      </div>
      <div className="row">
          <div className="col-md-12">
          <div className='service-button'>
            <Button href="https://booking-fresh-wash-305.zippity.cc/" size="lg">Book Now</Button>
          </div>
          </div>
  
      </div>
      <div className="row">
          <div className="col-md-12">
          <div>
            <Heading>Caring for your Vehicle is our Business</Heading>
          </div> 
          </div>
  
      </div>
      <div className="row">
          <div className="col-lg-12">
              <Footer/>
          </div>
  
      </div>
  
  </div>
    )
}

export default home
