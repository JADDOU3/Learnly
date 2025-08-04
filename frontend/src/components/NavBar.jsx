import '../styles/NavBar.css'
import { Link, useNavigate } from 'react-router-dom'
import  logout  from '../utils/logout.js';
import useUserInfo from "../hooks/useUserInfo";

function NavBar(){
    const user = useUserInfo();

    return (
       <nav className="navbar">
           <div className="navbar-brand">
                <Link to="/">Learnly</Link>
           </div>
           <div className="navbar-links">
               <Link to="/dashboard">Dashboard</Link>
               {user && user.url && user.name ? <Login user={user}/> : <Link to="/login">Login</Link>}
           </div>
       </nav>
    )
}

function Login({user}){
    const navigate = useNavigate();
    return (
        <div className="user-dropdown">
            <div onClick={() => navigate("/profile")} className="logged-in">
                <img src={user.url} alt="User img" />
                <p>{user.name}</p>
            </div>
            <div className="dropdown-menu">
             <Link to="/profile">Profile</Link>
             <span onClick={logout}><Link >Logout</Link></span>
             </div>
        </div>
    )
}


export default NavBar
