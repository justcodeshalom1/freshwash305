import Navbar from '../components/navbar'
import Announcement from '../components/announcemet'
import styled from 'styled-components'
import Footer from '../components/footer'
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'


const Heading = styled.h2`
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
        <>
          <Announcement/>
          <Navbar/>
          <Carousel fade className='carousel'>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="../IMG_3425 (1).jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="../IMG_0739.jpg"
                alt="Second slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="../IMG_0602.jpg"
                alt="Third slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
          <div className='service-button'>
            <Button href="https://booking-fresh-wash-305.zippity.cc/" size="lg">Book Now</Button>
          </div>
          <div>
            <Heading>Caring for your Vehicle is our Business</Heading>
          </div> 
          <Footer/>
        </>
    )
}

export default home
