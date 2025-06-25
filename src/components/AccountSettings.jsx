import '../styles/AccountSettings.css'

function AccountSettings() {
    const user = {email:"meow@gmail.com"};
   return(
       <div className="card profile-card">
           <div className="profile-header">
                <h2>Account Settings</h2>
           </div>
           <div className="details-section">
               <h2>Account Email</h2>
               <p>This email is associated with your Learnly account</p>
               <input className="input-field" type="email" placeholder={user.email} disabled />
           </div>
           <div className="details-section">
               <h2>Change Password</h2>
               <p>Please enter your new password</p>
               <input className="input-field" type="password" placeholder="Change Password" />
               <button className="primary-btn">Change Password</button>
           </div>
           <div className="danger-zone">
               <h2>Danger Zone</h2>
               <div className="danger-zone-card">
                   <p>Deleting your account will:</p>
                   <ul>
                       <li>Permanently delete your profile, along with your authentication association</li>
                       <li>Permanently delete all your content</li>
                   </ul>
                   <p>
                       Important: deleting your account is unrecoverable and cannot be undone. feel free to
                       <br />
                        contact support with any questions
                   </p>
                   <button className="danger-btn">Delete Account</button>
               </div>
           </div>
       </div>
   )
}

export default AccountSettings