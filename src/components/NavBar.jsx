import '../styles/NavBar.css'
import { Link, useNavigate } from 'react-router-dom'


function NavBar(){
    let user = {name:"heeh" , url:"https://avatars.githubusercontent.com/u/84065638?v=4"}
    // let user = {}
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
    const navigate = useNavigate()
    return (
        <div className="user-dropdown">
            <div onClick={() => navigate("/profile")} className="logged-in">
                <img src={user.url} alt="User img" />
                <p>{user.name}</p>
            </div>
            <div className="dropdown-menu">
             <Link to="/profile">Profile</Link>
             <Link to="/">Logout</Link>
             </div>
        </div>
    )
}


export default NavBar
