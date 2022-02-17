import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Spinner from "./custom/Spinner/Spinner";

const LandingPage = lazy(() => import("./components/LandingPage/LandingPage"));
const Services = lazy(() => import("./components/Services/Services"));
const BlogList = lazy(() => import("./components/BlogList/BlogList"));
const About = lazy(() => import("./components/About/About"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const NotFound = lazy(() => import("./components/NotFound/NotFound"));

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
