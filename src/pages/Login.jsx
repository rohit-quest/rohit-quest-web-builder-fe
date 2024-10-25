import React, { useEffect, useState } from 'react'
import './styles/Login.css'
import EmailSVG from '../assets/EmailSVG.svg'
import axios from 'axios'
// import { toast } from 'react-toastify';
import Cookies from 'universal-cookie'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('eve.holt@reqres.in')
    const [password, setPassword] = useState('cityslicka')
    const baseUrl = 'https://reqres.in';

    const navigate = useNavigate();
    const cookies = new Cookies();
    const handleLogin = async () => {
        try {
            axios.post(`${baseUrl}/api/login`, {
                email: email,
                password: password
            })
                .then((res) => {
                    console.log("Login Res:", res.data);


                    const ExpireTime = new Date();
                    ExpireTime.setHours(ExpireTime.getHours() + 24);

                    cookies.set("employwiseToken", res.data, {
                        path: "/",
                        expires: ExpireTime,
                    });

                    navigate('/userslist');
                })
        } catch (error) {
            console.log(error)
            General.shareInstance.hideLoader();
            toast.error(`Error Occurred!\nUnable to connect to Mixpanel`);
        }
    }

    useEffect(() => {
        const token = cookies.get("employwiseToken");
        console.log("token", token);
        if (token?.token) {
            navigate('/userslist');
        }
    }, []);

    return (
        <div className='w-screen'>
            <div className='employ-login-page'>
                <div className='login-page-left-div'>

                </div>
                <div className='login-page-right-div'>
                    <div className='login-page-form-cont'>
                        <div className='login-page-input--cont'>
                            <div className='login-page-input-label'>
                                <p>Email Address</p>
                                <div>
                                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <img src={EmailSVG} alt="" />
                                </div>
                            </div>
                            <div className='login-page-input-label'>
                                <p>Password</p>
                                <div>
                                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    <img src={EmailSVG} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className='login-page-submit-btn'>
                            <button onClick={handleLogin}>
                                <p>Login</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login