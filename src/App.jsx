import './App.css'
import Navbar from './components/NavBar.jsx'
import { Route , Routes } from 'react-router-dom'
import Login from './pages/Login.jsx'

function App() {
  return (
      <>
      <Navbar />
      <main>
          <Routes>
              <Route path="/" element={null} />
              <Route path="/dashboard" element={null} />
              <Route path="/login" element={<Login />} />
              <Route path="/signin" element={null} />
          </Routes>
      </main>
      </>
  )
}


export default App
