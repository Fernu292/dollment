import styled from "styled-components";

import Information from "./Information";


const SectionContainer = styled.div`
    
    height: 75rem;
    background-color: ${props => props.BgColor};
    margin-top: -5px;
    max-width: 100%;
    color: ${props => props.letterColor};
    display: flex;

    #Section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
        max-width: 70%;
        margin: 0 auto;
        align-items: center;
    }
`;

const Section = ({img, order, BgColor, title}) => {

    let letterColor;
    if(BgColor==='Black'){
        letterColor='White';
    }
    else{
        letterColor='Black'
    }

    if(order===1){
        return ( 
            <SectionContainer BgColor={BgColor} letterColor={letterColor}>
                <div id='Section'>
                    <Information title={title}/>
                    <img src={img} alt = 'Svg content' /> 
                </div>
            </SectionContainer>
         ); 
    }
    else if(order===2){
        return ( 
            <SectionContainer >
                <div id='Section'>
                    <img src={img} alt = 'Svg content' /> 
                    <Information title={title}/>
                </div>
            </SectionContainer>
         );
    }
    
}
 
export default Section;