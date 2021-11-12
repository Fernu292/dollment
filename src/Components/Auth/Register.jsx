
import LoginBg from '../../img/register.svg';
import styled from 'styled-components';
import {StyleFrom} from './Login';

const RegisterBg = styled.div`
    background-image: url(${LoginBg});
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;



const Register = () => {
    return ( 
        <RegisterBg>
            <StyleFrom>
                
                <h2>Register</h2>

                <form>
                    <label>Name</label>
                    <input
                        type='text'
                        name='name'
                        placeholder='Your name'
                    />
                    <label>Email</label>
                    <input 
                        type='email'
                        name='email'
                        placeholder='Your email'
                    />

                    <label>Password</label>
                    <input 
                        type='password'
                        name='password'
                        placeholder='Your password'
                    />

                    <label>Confirm Password</label>
                    <input 
                        type='password'
                        name='password'
                        placeholder='Your password'
                    />

                    <button type='submit'>Sig In</button>
                </form>
            </StyleFrom>

        </RegisterBg>
     );
}
 
export default Register;