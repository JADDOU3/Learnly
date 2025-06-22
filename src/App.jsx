import './App.css'
import Navbar from './components/NavBar.jsx'
import { Route , Routes } from 'react-router-dom'

function App() {
  return (
      <>
      <Navbar />
      <main>
          <Routes>
              <Route path="/" element={null} />
              <Route path="/dashboard" element={null} />
              <Route path="/login" element={null} />
              <Route path="/signin" element={null} />
          </Routes>
      </main>
      </>
  )
}


export default App
