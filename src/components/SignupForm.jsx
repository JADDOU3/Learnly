import '../styles/SignupForm.css'


function SignupForm({onToggleForm}) {
    return (
        <div className="signup-form">
            <div className="header-group">
                <h2>Create your account</h2>
                <p className="subtitle">Join us to get started</p>
            </div>

            <form>
                <div className="input-group">
                    <label>Name</label>
                    <input type="text" placeholder="Enter your name" />
                </div>

                <div className="input-group">
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" />
                </div>

                <div className="input-group">
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" />
                </div>

                <div className="input-group">
                    <label>Confirm Password</label>
                    <input type="password" placeholder="Confirm your password" />
                </div>

                <div className="input-group">
                    <label>Date of Birth</label>
                    <input type="date" placeholder="Enter your date of birth" />
                </div>

                <button type="submit">Sign Up</button>
            </form>

            <div className="login-section">
                Already have an account? <span className="login-link" onClick={onToggleForm}>Log in</span>
            </div>
        </div>
    )
}

export default SignupForm