import './App.css'
import Navbar from './components/NavBar.jsx'
import { Route , Routes } from 'react-router-dom'
import AuthPage from './pages/AuthPage.jsx'
// import HomePage from './pages/Home.jsx'
import ProfilePage from './pages/ProfilePage.jsx'

function App() {
  return (
      <>
      <Navbar />
      <main>
          <Routes>
              {/*<Route path="/" element={<HomePage />} />*/}
              <Route path="/dashboard" element={null} />
              <Route path="/login" element={<AuthPage />} />
              <Route path="/profile" element={<ProfilePage />} />
          </Routes>
      </main>
      </>
  )
}


export default App
