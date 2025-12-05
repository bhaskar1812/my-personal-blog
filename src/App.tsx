import "./App.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { Header } from "./components/Header";
import ArticlePage from "./pages/ArticlePage";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import Expertise from "./pages/Expertise";
import Gear from "./pages/Gear";
import CookiePolicy from "./pages/CookiePolicy";
import Disclaimer from "./pages/Disclaimer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Credits from "./pages/Credits";
import Terms from "./pages/Terms";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles" element={<ArticlePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/gear" element={<Gear />} />
          <Route path="/CookiePolicy" element={<CookiePolicy />} />
          <Route path="/Disclaimer" element={<Disclaimer />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<Terms />} />
          <Route path="/credits" element={<Credits />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
