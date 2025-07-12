import '../styles/WelcomeSection.css'
import AiCoach from "../assets/Ai-coach.png";
import { useNavigate } from 'react-router-dom'

function WelcomeSection() {

    const navigate = useNavigate();

    const navigateToDashboard = () => {
        if (localStorage.getItem("token")) {
          navigate("/dashboard");
        } else {
            navigate("/login");
        }
    };

    return (
        <div className="welcome-section">
            <div className="text-container">
                <h1>
                    Your Personal <br />
                    <span>AI Study Coach</span>
                </h1>
                <p>
                    Smarter study plans based on <br />
                    your real performance and nits.
                </p>
                <button onClick={navigateToDashboard} className="primary-btn big-btn">Get your plan now</button>
            </div>
            <div className="image-container">
                <img src={AiCoach} alt="AI studying coach" />
            </div>
        </div>
    );
}




export default WelcomeSection;
