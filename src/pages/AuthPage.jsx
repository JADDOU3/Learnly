import {useState} from 'react'
import LoginForm from "../components/LoginForm";
import SignForm from "../components/SignupForm";



function AuthPage() {

    const [showLogin, setShowLogin] = useState(true)

    const ToggleForm = () => {
        setShowLogin(!showLogin)
    }

    return (
        <div className="auth-page">
            {showLogin ?
                    <LoginForm onToggleForm={ToggleForm}/>
                 :
                    <SignForm onToggleForm={ToggleForm}/>
            }
        </div>

    )
}

export default AuthPage