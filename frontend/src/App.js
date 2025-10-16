import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
import { Blog } from "./components/Blog";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

// Import new pages
import { ServiceDetail } from "./pages/ServiceDetail";
import { CaseStudyDetail } from "./pages/CaseStudyDetail";
import { BlogDetail } from "./pages/BlogDetail";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfService } from "./pages/TermsOfService";
import { CookiePolicy } from "./pages/CookiePolicy";
import { Sitemap } from "./pages/Sitemap";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Team />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service/:serviceId" element={<ServiceDetail />} />
          <Route path="/case-study/:caseId" element={<CaseStudyDetail />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/sitemap" element={<Sitemap />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;