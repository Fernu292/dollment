
import styled from "styled-components";
import {AiFillFacebook, AiFillInstagram, AiFillYoutube} from 'react-icons/ai';

const FooterMain = styled.footer`
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;

    .FlexFooter{
        max-width: 80%;
        margin: 0 auto;
        display: flex;
        margin-top: 7rem;
        gap: 5rem;


    }

    .SectionFooter{
        h3{
            font-size: 1.9rem;
        }

        ul{ 
            display: flex;
            flex-direction: column;
            list-style: none;
            justify-content: left;
            gap: 1rem;
            padding: 0;
            font-size: 1.5rem;
        }
    }
`;

const FooterContact = styled.div`
    margin-top: 10rem;
    display: flex;
    justify-content: space-around;
    gap: 5rem;
    font-size: 2rem;
    align-items: center;
    
    div{
        display: flex;
        gap: 1rem;
        align-items: center;
    }
`;

const Footer = () => {
    return ( 
        <FooterMain>
            <div className="FlexFooter">
                <div className="SectionFooter">
                    <h3>Why us</h3>
                    <ul>
                        <li>Our efficient</li>
                        <li>No waitings</li>
                        <li>Zero fees</li>
                    </ul>
                </div>


                <div className="SectionFooter">
                    <h3>Our clients in many contries</h3>
                    <ul>
                        <li>USA</li>
                        <li>CAD</li>
                        <li>MXN</li>
                    </ul>
                </div>


                <div className="SectionFooter">
                    <h3>Our projects </h3>
                    <ul>
                        <li>Banks</li>
                        <li>IA</li>
                        <li>Data Science</li>
                    </ul>
                </div>
            </div>

            <FooterContact>
                <h2>Dollment</h2>

                <p>Company registred 2021 Copyrigth</p>

                <div>
                    <AiFillFacebook />
                    <AiFillInstagram />
                    <AiFillYoutube />
                </div>
            </FooterContact>
        </FooterMain>
     );
}
 
export default Footer;