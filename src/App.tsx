import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProjectsPage from "./pages/Projects";
import ContactPage from "./pages/Contact";
import BlogList from "./pages/BlogList";
import BlogPostPage from "./pages/BlogPost";
import ServiceDetail from "./pages/ServiceDetail";
import ProjectDetail from "./pages/ProjectDetail";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import GridHome from './pages/GridHome';

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
function App() {
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
            <Route path="/contact" element={<ContactPage isAr={isAr} />} />
            <Route path="/blog" element={<BlogList isAr={isAr} />} />
            <Route path="/blog/:id" element={<BlogPostPage isAr={isAr} />} />
            <Route path="/services/:id" element={<ServiceDetail isAr={isAr} />} />
            <Route path="/projects/:id" element={<ProjectDetail isAr={isAr} />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy isAr={isAr} />} />
            <Route path="/terms-conditions" element={<TermsConditions isAr={isAr} />} />
          </Routes>
        </main>
        <Footer isAr={isAr} />
      <div className={`min-h-screen ${isAr ? 'rtl' : 'ltr'}`} dir={isAr ? 'rtl' : 'ltr'}>
        <Routes>
          <Route path="/" element={<Home isAr={isAr} />} />
          <Route path="/grid" element={<GridHome isAr={isAr} />} />
          <Route path="/projects" element={<ProjectsPage isAr={isAr} />} />
          <Route path="/contact" element={<ContactPage isAr={isAr} />} />
          <Route path="/blog" element={<BlogList isAr={isAr} />} />
          <Route path="/blog/:id" element={<BlogPostPage isAr={isAr} />} />
          <Route path="/services/:id" element={<ServiceDetail isAr={isAr} />} />
          <Route path="/projects/:id" element={<ProjectDetail isAr={isAr} />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy isAr={isAr} />} />
          <Route path="/terms-conditions" element={<TermsConditions isAr={isAr} />} />
        </Routes>

        {/* Language Toggle */}
        <button
          onClick={() => setIsAr(!isAr)}
          className="fixed bottom-6 right-6 bg-emerald-600 text-white p-3 rounded-full shadow-lg hover:bg-emerald-700 transition-colors z-50"
          aria-label={isAr ? "Switch to English" : "التبديل للعربية"}
        >
          {isAr ? "EN" : "ع"}
        </button>
      </div>
    </Router>
  );
}

export default App;
