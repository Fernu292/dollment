import BgVideo from '../../Video/video.mp4';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
const HeaderBg = styled.div`
    font-size:  3rem ;

    video{
        height: 85rem;
        object-position: center center;
        object-fit: cover;
        width: 100%;
        position: absolute;
        z-index: -10;
        top: 0;
    }

`;

const Navigation = styled.div`
    align-items: center;
    color: white ;
    display: flex;
    justify-content: space-between;
    max-width: 80%;
    margin: 0 auto;
    
    div{
        display: flex;
        justify-content: space-between;
        gap: 3.5rem;
        align-items: center;

        a{
            cursor: pointer;
            font-size: 2.7rem;
            text-decoration: none;
            color: white;
        }
    }

    #inicio{
        background-color: #00BF45;
        padding: 1rem 2rem ;
        border-radius: 3rem;
        margin: 0;
    }
`;

const HeaderContent = styled.div`
    text-align: center;
    margin-top: 20rem;
    margin-bottom: 31rem;
    color: white;
    height: 100%;
    p{
        font-size: 2.5rem;
    }

    .Link{
        border: none;
        background-color: #00BF45;
        padding: 1rem 2rem;
        border-radius: 3rem;
        margin: 0;
        font-size: 2.2rem;
        cursor: pointer;
        color: black;
        text-decoration: none;
    }
`;

const Header = () => {
    return ( 
        <HeaderBg id='star'>
            <video src={BgVideo} autoPlay loop/>

            <Navigation>
                <h2>Dollment</h2>

                <div>
                    <a href='#services'>About</a>
                    <Link to='/'>Contar us</Link>
                    <Link to ='/register' id='inicio'>Sign In</Link>
                </div>
            </Navigation>

            <HeaderContent>
                <h1>Virtual Bank make easier</h1>
                <p>Create an acout with us and forgot the waitings in old banks</p>

                <Link to='/login' className='Link'>{'Get Started >'}</Link>
            </HeaderContent>
        </HeaderBg>
     );
}
 
export default Header;