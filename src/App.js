import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Hero from "./components/hero";
import Features from "./components/features";
import Pricing from "./components/pricing"; 
// import Solutions from "./components/Solutions"; // Create a Solutions component
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />       
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
