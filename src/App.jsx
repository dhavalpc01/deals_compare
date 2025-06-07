import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import BusBookingPage from "./pages/BusBookingPage"
import FlightBookingPage from "./pages/FlightBookingPage"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bus-booking" element={<BusBookingPage />} />
          <Route path="/flight-booking" element={<FlightBookingPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
