import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Spinner from "./custom/Spinner/Spinner";

import LandingPage from "./components/LandingPage/LandingPage";
import Services from "./components/LandingPage/Services/Services";
import BlogList from "./components/BlogList/BlogList";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <Router>
      <Navbar />

      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/services" element={<Services />} />

          <Route path="/blog-list" element={<BlogList />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Footer />
    </Router>
  );
}

export default App;
