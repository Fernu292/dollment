import styled from "styled-components";

const CardService = styled.div`
    background-color: white;
    padding: 2rem;
    color: black;
    width: 30rem;
    height: 35rem;
    border-radius: 5px;

    div{
        display: flex;
        max-width: 90%;
        max-height: 50%;
    }

    h2{
        font-size: 2.5rem;
    }

    p{
        font-size: 1.2rem;
    }
`;

const Service = ({img}) => {
    return ( 
        <CardService>
            <div>
                <img src = {img} alt = 'SVG-service' />
            </div>
            <h2>Make Easier</h2>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nostrum natus dolore architecto minima eius, omnis iste? Debitis maiores facere, quidem odit unde, nesciunt temporibus dolorem nulla, impedit voluptate reprehenderit?</p>
        </CardService>
     );
}
 
export default Service;
