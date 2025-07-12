import '../styles/WhyUs.css'

function WhyUs(){
    return(
        <div className="whyus-container">
            <h1>Why Us</h1>
            <div className="whyus-steps">
                <div className="whyus-step">
                    <i className="fa-solid fa-clipboard"></i>
                    <p>
                        Add your grades <br />
                        and study habits.
                    </p>
                </div>
                <i className="fa-solid fa-chevron-right whyus-chevron"></i>
                <div className="whyus-step">
                    <i className="fa-solid fa-robot"></i>
                    <p>
                        Get personalized <br />
                        study plans.
                    </p>
                </div>
                <i className="fa-solid fa-chevron-right whyus-chevron"></i>
                <div className="whyus-step">
                    <i className="fa-solid fa-route"></i>
                    <p>
                        Track your progress <br />
                        and get feedback.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WhyUs;