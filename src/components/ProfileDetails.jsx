import '../styles/ProfileDetails.css'

function ProfileDetails() {
    return(
        <div className="profile-card">
            <div className="profile-header">
                <h2>Profile</h2>
                <button>Save</button>
            </div>
            <div className="picture-section">
                <img src="" alt="" />
                <button>Change Picture</button>
            </div>
            <div className="details-section">
                <h2>Account Information</h2>
                <div className="details-item">
                    <label>Name</label>
                    <input type="text" placeholder="Enter your name" />
                </div>
                <div className="details-item">
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" />
                </div>
            </div>
            <div className="social-link-section">
                <h2>Social Links</h2>
                <div className="social-link">
                    <i className="fa-brands fa-github"></i>
                    <input type="text" placeholder="Enter your github username or URL" />
                </div>
                <div className="social-link">
                    <i className="fa-brands fa-linkedin"></i>
                    <input type="text" placeholder="Enter your linkedin username or URL" />
                </div>
            </div>
        </div>
    )
}

export default ProfileDetails