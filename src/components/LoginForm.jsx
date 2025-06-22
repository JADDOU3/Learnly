import { Link } from 'react-router-dom'
import '../styles/LoginForm.css'

function LoginForm() {
    return (
        <div className="login-form">
            <h2>Welcome back</h2>
            <p className="subtitle">Please enter your details to sign in</p>

            <form>
                <div className="input-group">
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" />
                </div>

                <div className="input-group">
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" />
                </div>

                <div className="form-options">
                    <div className="remember-me">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <a className="forgot-password" href="#">Forgot password?</a>
                </div>

                <button type="submit">Sign In</button>
            </form>

            <div className="signup-section">
                Don't have an account? <Link className="signup-link" to="/signup">Sign up</Link>
            </div>

            <div className="social-divider">or continue with</div>

            <div className="social-icons">
                <div className="social-icon">
                    <i className="fa-brands fa-google"></i>
                </div>
                <div className="social-icon">
                    <i className="fa-brands fa-github"></i>
                </div>
            </div>
        </div>
    )
}


export default LoginForm