import '../styles/ProfileSidePanel.css'

function ProfileSidePanel() {
    let user = {
        name:"heeh" ,
        url:"https://avatars.githubusercontent.com/u/84065638?v=4" ,
        title:"Full Stack Developer"
    }
    return(
        <div className="profile-side-panel">
            <div className="summarized-profile">
                <img src={user.url} alt="User" className="profile-avatar" />
                <h2 className="profile-name">{user.name}</h2>
                <p className="profile-title">{user.title}</p>
            </div>

            <div className="section">
                <div className="menu-item">
                    <i className="fa-solid fa-user"></i>
                    <p>Profile Details</p>
                </div>

                <div className="menu-item">
                    <i className="fa-solid fa-envelope"></i>
                    <p>Account Settings</p>
                </div>
            </div>

            <div className="section">
                <div className="menu-item">
                    <i className="fa-solid fa-robot"></i>
                    <p>AI Settings</p>
                </div>

                <div className="menu-item">
                    <i className="fa-solid fa-location-arrow"></i>
                    <p>Preferred plan</p>
                </div>
            </div>

            <div className="section">
                <div className="menu-item">
                    <i className="fa-solid fa-circle-info"></i>
                    <p>Support</p>
                </div>

                <div className="menu-item logout">
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                    <p>Logout</p>
                </div>
            </div>
        </div>
    )

}

export default ProfileSidePanel