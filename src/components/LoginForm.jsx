
import '../styles/LoginForm.css'

function LoginForm({onToggleForm}) {
    return (
        <div className="card login-form">
            <h2>Welcome back</h2>
            <p className="subtitle">Please enter your details to sign in</p>

            <form>
                <div className="input-group">
                    <label>Email</label>
                    <input className="input-field" type="email" placeholder="Enter your email" />
                </div>

                <div className="input-group">
                    <label>Password</label>
                    <input className="input-field" type="password" placeholder="Enter your password" />
                </div>

                <div className="form-options">
                    <div className="remember-me">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <a className="forgot-password" href="#">Forgot password?</a>
                </div>

                <button className="primary-btn" type="submit">Sign In</button>
            </form>

            <div className="signup-section">
                Don't have an account? <span className="signup-link" onClick={onToggleForm}>Sign up</span>
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