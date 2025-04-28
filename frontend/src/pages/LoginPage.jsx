import '../styles/LoginPage.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import logoWhite from '../images/logo_white.jpg';
import { login } from '../service/authService'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = async () => {
    login(email, password).then(({ token, user }) => {
      localStorage.setItem('token', token)
      navigate('/dashboard')
    }).catch((error) => {
      console.error(error.response?.data.message)
    })
  }

  return (
    <div className="login-container">
      {/* Left Section */}
      <div className="login-left">
        <div className="overlay"></div>
        <div className="left-content">
          {/* <img src={logoWhite} alt="Ques.AI Logo" className="left-logo" /> */}
          <div className="logo-text">Ques.<span>AI</span></div>
          <h1>Your podcast<br />will no longer<br />be just a hobby.</h1>
          <p>Supercharge Your Distribution<br />using our AI assistant!</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="login-right">
        <div className="form-wrapper">
          <div className="logo">
            <img src= {logoWhite} alt="Logo" />
          </div>
          <h2>Welcome to <br></br><span>Ques.AI</span></h2>

          <form className="login-form">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="form-options">
              <label><input type="checkbox" /> Remember me</label>
              <Link to="/forgot-password">Forgot password?</Link>
            </div>

            <button type="button" onClick={handleLogin} className="login-button">Login</button>

            <p className="create-account">
              Don't have an account? <Link to="/create-account">Create Account</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}