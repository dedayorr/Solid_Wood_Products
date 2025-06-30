import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import PriceAndServices from "../pages/prices&services/PriceAndServices";
import Gallery from "../pages/gallery/Gallery";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/priceAndServices" element={<PriceAndServices />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;
