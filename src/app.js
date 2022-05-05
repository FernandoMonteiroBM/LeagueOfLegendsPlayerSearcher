import HomePage from './Pages/HomePage'
import './app.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import PlayerProfilePage from './Pages/PlayerProfilePage'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/playerProfile" element={<PlayerProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
