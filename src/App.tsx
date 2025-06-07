import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BusBookingPage from "./pages/BusBookingPage";
import FlightBookingPage from "./pages/FlightBookingPage";

function App() {
  return (
    <div className="App">
      {/* <Router> */}
      {/* <div className="App"> */}
      {/* <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/bus-booking" element={<BusBookingPage />} />
            <Route path="/flight-booking" element={<FlightBookingPage />} />
          </Routes> */}
      {/* </div> */}
      {/* </Router> */}
      <header className="App-header">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
