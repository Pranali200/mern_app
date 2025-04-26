import { Link } from "react-router-dom";

export default function CreateAccountPage(){
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
                    <input type="email" placeholder="Email Address" required></input>
                    <input type ="password" placeholder="Password" required></input>
                    <input type="password" placeholder="Confirm Password" required></input>
                    <button type="submit" className="login-button">Sign Up</button>
                    <p> Already have an account?<Link to="/">Login</Link></p>
                </form>
            </div>
        </div>
    )
}