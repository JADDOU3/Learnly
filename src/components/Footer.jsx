import { Link } from 'react-router-dom'
import '../styles/Footer.css'

function Footer(){

    return (
        <footer className="footer-container">
            <div className="footer-brand">
                <h2>Learnly</h2>
                <p>
                    Evaluate your studying experience with <br />
                    Learnly, your personalized learning assistant.
                </p>
            </div>
            <div className="footer-Navigation">
                <h2>Navigation</h2>
                <Link to="/">Home</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/profile">Profile</Link>
            </div>
            <div className="footer-get-in-touch">
                <h2>Get in touch</h2>
                <div className="contact-item">
                    <i className="fa-solid fa-envelope"></i>
                    <p>Learnly@gmail.com</p>
                </div>
                <div className="contact-item">
                    <i className="fa-solid fa-map"></i>
                    <p>
                        32.253393, 35.249961
                        <br />
                        Ijnisinya-Asira Ash Shamaliya
                    </p>
                </div>
            </div>
            <div className="footer-copyright">
                <p>©2025 Learnly, Jaddou3, All rights reserved</p>
                <div className="footer-social">
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-brands fa-discord"></i>
                </div>
            </div>
        </footer>
    )
}

export default Footer