import styled from "styled-components"

const Container = styled.div`
   height: 35px;
   background-color: red;
   color: white;
   display:flex;
   align-items: center;
   justify-content: center;
   font-size: 15px;
   font-weight: 500;
   `;

const announcemet = () => {
    return (
        <Container>
            15% New Customer Discount
        </Container>
    )
}

export default announcemet
