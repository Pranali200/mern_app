import '../styles/LoginPage.css'
import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import {useUser} from '../context/UserContext'
import { login } from '../service/authService'

export default function LoginPage(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { setUser } = useUser();
    const navigate = useNavigate();

    const handleLogin = async ()=>{
        login(email, password).then(({token,user}) =>{
            localStorage.setItem('token', token);
            setUser(user);
            console.log("Userdata from login",user._id)
            navigate('/dashboard');
        }).catch((error) =>{
            console.error(error.response?.data.message)
        })
    }
    return (
        <div className="login-container">
            <div className="login-left">
                <h1>Ques.AI</h1>
                <h2>Your podcast will no longer be just a hobby.</h2>
                <p>Supercharge Your Distribution using our AI assistant!</p>
            </div>

            <div className="login-right">
                <h2>Welcome to Ques.AI</h2>
                <form className="login-form">
                    <input type="email" placeholder="Email Address" value = {email} onChange = {(e) =>setEmail(e.target.value)}></input>
                    <input type="password" placeholder="Password" value = {password} onChange = {(e) =>setPassword(e.target.value)}></input>
                    <button type ="button" onClick = {handleLogin} className="login-button">Login</button>

                    <p>Don't have an account?<Link to ="/create-account"> Create Account</Link></p>
                </form>
            </div>
        </div>
    )
}