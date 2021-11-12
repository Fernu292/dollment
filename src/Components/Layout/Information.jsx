import styled from "styled-components";

const InformationContainer = styled.div`
    display: flex;
    flex-direction: column;
    span{
        font-family: 'Roboto Slab', serif;
        color: #00BF45;
        font-weight: bold;
        font-size: 1.5rem;
        margin-bottom: 0;
    }

    h1{
        font-size: 5.5rem;
        margin-top: 0;
    }

    p{
        font-size: 1.8rem;
    }

    button{
        background-color: #00BF45;
        border: none;
        border-radius: 3rem;
        padding: 1rem 2rem;
        display: block;
        max-width: 30%;
        font-weight: bold;
        cursor: pointer;
    }
`;

const Information = ({title}) => {
    return ( 
        <InformationContainer>
            <span>The smartest solution for you</span>
            <h1>{title}</h1>

            <p>
                Take the controll of your finances with our aplication and make 
                many transactions without fees.
                Share with your friends and enjoy the better bank experience
            </p>

            <button>Get Started</button>
        </InformationContainer>
     );
}
 
export default Information;