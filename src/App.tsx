import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProjectsPage from "./pages/Projects";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const [isAr, setIsAr] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col" dir={isAr ? "rtl" : "ltr"}>
        <Navbar isAr={isAr} setIsAr={setIsAr} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home isAr={isAr} />} />
            <Route path="/projects" element={<ProjectsPage isAr={isAr} />} />
          </Routes>
        </main>
        <Footer isAr={isAr} />
      </div>
    </Router>
  );
}
