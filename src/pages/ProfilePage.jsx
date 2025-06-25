import ProfileSidePanel from "../components/ProfileSidePanel";
import ProfileDetails from "../components/ProfileDetails";
import AccountSettings from "../components/AccountSettings";
import Help from "../components/Help";
import {useState} from 'React'
import '../styles/ProfilePage.css'

function ProfilePage() {
    const [showCard , setShowCard] = useState(1)
    return (
        <div className="profile-page">
            <div className="profile-layout">
                <ProfileSidePanel setCurretCard={setShowCard} />
                <main className="profile-content">
                    { showCard === 1 && <ProfileDetails />}
                    { showCard === 2 && <AccountSettings />}
                    { showCard === 5 && <Help />}
                </main>
            </div>
        </div>
    )
}

export default ProfilePage