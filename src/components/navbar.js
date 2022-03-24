import styled from "styled-components"
import logo from '../FullLogo_Transparent.png'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'


const Container = styled.div`
   background-color: clear; 
   height: 175px;
`;

const Wrapper = styled.div` 
   height: ${(props) => props.height};
   position: absolute;
   left: 80px;
`;

const Wrapper2 = styled.div` 
   height: ${(props) => props.height};
   position: absolute;
   right: 70px;
   padding-top: 50px;
`;


const navbar = () => {
    return (
        <Container>
            
            <Wrapper>       
                   <Link to='/'><img src={logo} alt='logo' height="175px"/></Link>
            </Wrapper>
            <Wrapper2>
                <h2>Your car will never look the same!</h2>
            </Wrapper2>

        </Container>
    )
}

export default navbar
