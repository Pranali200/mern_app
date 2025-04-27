import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../service/authService";
import {useUser} from '../context/UserContext'

export default function CreateAccountPage(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const { setUser } = useUser();
    const navigate = useNavigate()


    const handleRegister = async ()=>{
        register(email,password).then(({token,user}) =>{
            localStorage.setItem('token', token)
            setUser(user);
            navigate('/dashboard')
        }).catch((error) =>{
            console.error(error.response?.data.message )
        })
    }
    return(
        <div className="login-container">
            <div className="login-left">
            <h1>Ques.AI</h1>
                <h2>Your podcast will no longer be just a hobby.</h2>
                <p>Supercharge Your Distribution using our AI assistant!</p>
            </div>

            <div className="login-right">
                <h2>Create Your Account</h2>
                <form className="login-form">
                    <input type="email" placeholder="Email Address" value = {email} onChange ={(e) =>setEmail(e.target.value)}></input>
                    <input type ="password" placeholder="Password" value = {password} onChange = {(e) =>setPassword(e.target.value)}></input>
                    <input type="password" placeholder="Confirm Password" value ={confirmPassword} onChange = {(e) =>setconfirmPassword(e.target.value)}></input>
                    <button type ="button" onClick ={handleRegister} className="login-button">Sign Up</button>
                    <p> Already have an account?<Link to="/">Login</Link></p>
                </form>
            </div>
        </div>
    )
}