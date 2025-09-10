import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      
      {/* Temporary sections for navigation */}
      <section id="about" className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Section</h2>
          <p className="text-gray-600">Coming soon...</p>
        </div>
      </section>
      
      <section id="services" className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Services Section</h2>
          <p className="text-gray-600">Coming soon...</p>
        </div>
      </section>
      
      <section id="portfolio" className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Portfolio Section</h2>
          <p className="text-gray-600">Coming soon...</p>
        </div>
      </section>
      
      <section id="team" className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Team Section</h2>
          <p className="text-gray-600">Coming soon...</p>
        </div>
      </section>
      
      <section id="blog" className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Blog Section</h2>
          <p className="text-gray-600">Coming soon...</p>
        </div>
      </section>
      
      <section id="contact" className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Section</h2>
          <p className="text-gray-600">Coming soon...</p>
        </div>
      </section>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;