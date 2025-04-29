import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../service/authService";
import logoWhite from '../images/logo_white.jpg'; 
import { useUser } from '../context/UserContext';

export default function CreateAccountPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
    const { setUser } = useUser();

    const handleRegister = async () => {
        if (password !== confirmPassword) return;
        register(name, email, password).then(({ token, user }) => {
            localStorage.setItem('token', token);
            setUser(user);
            navigate('/dashboard');
        }).catch((error) => {
            console.error(error.response?.data.message);
        });
    };

    return (
        <div className="login-container">
            <div className="login-left">
                <div className="left-content">
                    <div className="logo-text">Ques.<span>AI</span></div>
                    <h1>Your podcast<br />will no longer<br />be just a hobby.</h1>
                    <p>Supercharge Your Distribution<br />using our AI assistant!</p>
                </div>
            </div>

            <div className="login-right">
                <div className="form-wrapper">
                    <div className="logo">
                        <img src={logoWhite} alt="Ques.AI Logo" />
                    </div>
                    <h2>Create Your Account</h2>
                    <form className="login-form">
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <button type="button" onClick={handleRegister} className="login-button">Sign Up</button>
                        <p>Already have an account? <Link to="/">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
}
