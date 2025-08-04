import '../styles/ProfileSidePanel.css'
import logout from '../utils/logout.js'
import useUserInfo from "../hooks/useUserInfo";

function ProfileSidePanel({setCurretCard}) {
    const user = useUserInfo();

    if (!user) {
        return null;
    }

    return(
        <div className="card profile-side-panel">
            <div className="summarized-profile">
                <img src={user.url} alt="User" className="profile-avatar" />
                <h2 className="profile-name">{user.name}</h2>
            </div>

            <div className="section">
                <div className="menu-item" onClick={() => setCurretCard(1)}>
                    <i className="fa-solid fa-user"></i>
                    <p>Profile Details</p>
                </div>

                <div className="menu-item" onClick={() => setCurretCard(2)}>
                    <i className="fa-solid fa-envelope"></i>
                    <p>Account Settings</p>
                </div>

                <div className="menu-item" onClick={() => setCurretCard(3)}>
                    <i className="fa-solid fa-graduation-cap"></i>
                    <p>Grades</p>
                </div>

            </div>

            <div className="section">
            <div className="menu-item" onClick={() => setCurretCard(4)}>
                    <i className="fa-solid fa-robot"></i>
                    <p>AI Settings</p>
                </div>

                <div className="menu-item" onClick={() => setCurretCard(5)}>
                    <i className="fa-solid fa-location-arrow"></i>
                    <p>Preferred plan</p>
                </div>
            </div>

            <div className="section">
                <div className="menu-item" onClick={() => setCurretCard(6)}>
                    <i className="fa-solid fa-circle-info"></i>
                    <p>Support</p>
                </div>

                <div className="menu-item logout" onClick={logout}>
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                    <p>Logout</p>
                </div>
            </div>
        </div>
    )

}

export default ProfileSidePanel