import styled from "styled-components";

import Service from "./Service";

import bitcoin from '../../img/bitcoin.svg';
import control from '../../img/control.svg';
import transfer from '../../img/transfer.svg';

const ContainerServices = styled.div`
    color: white ;
    background-color: black;
    text-align: center;
    height: 65rem;

    h1{
        padding-top: 5rem;
        font-size: 3rem;
    }
    
`;

const ServicesGrid = styled.div`
    display: flex;
    margin: 0 auto;
    max-width: 80%;
    margin-top: 8rem ;
    justify-content: space-around;
`;



const Services = () => {
    return ( 
        <ContainerServices id='services'>

                <h1>Our Servicies</h1>

                <ServicesGrid>
                    <Service img={bitcoin}/>
                    <Service img={transfer}/>
                    <Service img={control}/>
                </ServicesGrid>
               
           
        </ContainerServices>
     );
}
 
export default Services;