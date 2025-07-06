import '../styles/NavBar.css'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import  logout  from '../utils/logout.js';
import getUserInfo from "../api/getUserInfo.js";

function NavBar(){
    const [user, setUser] = useState(null);
    const getInfo = async () => {
        const data = await getUserInfo();
        if(!data) {
            setUser(null);
            return;
        }

        setUser({
            ...data,
            url: data.url || data.image || "https://avatars.githubusercontent.com/u/84065638?v=4"
        });
    };

    //todo optimize code , remove duplicate code

    useEffect(() => {
        if (localStorage.getItem("token")) {
            getInfo();
        }
    });

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
