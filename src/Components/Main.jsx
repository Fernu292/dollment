import { Fragment } from "react";

import MobileApp from '../img/MobileApp.svg';
import Pig from  '../img/Bank-Pig.svg';
import data from '../img/data.svg';


//Components
import Header from "./Layout/Header";
import Services from "./Layout/Services";
import Section from './Layout/Section';
import Footer from "./Layout/Footer";

const Main = () => {
    return ( 
        <Fragment>
            <Header />

            <Section 
                img={MobileApp} 
                order={1} 
                BgColor={'Black'} 
                title={'Unlimited Transaction with zero fees'}
            />

            <Section 
                img={Pig} 
                order={2} 
                BgColor={'White'}
                title={"Login to your account at any time"}
            />


            <Services />
            
            <Section 
                img={data}
                order={2}
                BgColor={'White'}
                title={'Create an acount is earier and fast'}
            />

            <Footer />
        </Fragment>
     );
}
 
export default Main;
