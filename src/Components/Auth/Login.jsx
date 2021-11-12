import styled from "styled-components";
import img from '../../img/login.svg';
import { Link } from "react-router-dom";

const LoginBg = styled.div`
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: contain;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    a{
        text-decoration: none;
        font-size: 1.5rem;
        color: gray;
        text-align: left;
    }
`;

export const StyleFrom = styled.div`
    width: 50rem;
    background-color: black;
    color: #fff;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    border-radius: 2rem;
    font-size: 2.5rem;
    text-align: center;

    form{

        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        text-align: left;
        gap: 1rem;
        
        label{
            margin-right: 1rem;
        }
        
        input{
            padding: 0.7rem;
            border: none;
            border-radius: 1rem;
            font-size: 2rem;
        }

        button{
            background-color: #00BF45;
            color: white;
            font-size: 2rem;
            border: none;
            border-radius: 1rem;
            padding: 0.5rem 2rem;
            cursor: pointer;
            margin-top: 2rem;
        }

    }
`;

const Login = () => {
    return ( 
        <LoginBg>
            <StyleFrom>

                <h2>Login</h2>  


                <form>
                    <label>Your email</label>
                    <input 
                        type='email'
                        name='email'
                        placeholder='Your email'
                    />

                    <label>Your Password</label>
                    <input 
                        type='password'
                        name='password'
                        placeholder='Your password'
                    />

                    <button type='submit'>Log in</button>
                </form>

                <Link to ='/register'>First time?, Get an account</Link>
            </StyleFrom>
        </LoginBg>
     );
}
 
export default Login;
