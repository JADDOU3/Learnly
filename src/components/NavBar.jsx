import '../styles/NavBar.css'
import { Link } from 'react-router-dom'


function NavBar(){
    let user = {name:"heeh" , url:"https://avatars.githubusercontent.com/u/84065638?v=4"}
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
    return (
        <div className="logged-in">
            <img src={user.url} alt="User img" />
            <p>{user.name}</p>
        </div>
    )
}


export default NavBar
