import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import VehicleStock from "./pages/VehicleStock";
import ContactPage from "./pages/ContactPage";

import ClickCollectPage from "./pages/ClickCollectPage";
import DeliveryPage from "./pages/DeliveryPage";
import PartsDecipherPage from "./pages/PartsDecipherPage";
import AccountPage from "./pages/AccountPage";

import FaqPage from "./pages/FaqPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import ShippingPage from "./pages/ShippingPage";
import WarrantyPage from "./pages/WarrantyPage";
import AboutPage from "./pages/AboutPage";
import ReturnsPage from "./pages/ReturnsPage";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex min-h-screen flex-col bg-white text-black">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vehicle-stock" element={<VehicleStock />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Header top-bar pages */}
            <Route path="/click-and-collect" element={<ClickCollectPage />} />
            <Route path="/delivery" element={<DeliveryPage />} />
            <Route path="/parts-decipher" element={<PartsDecipherPage />} />
            <Route path="/account" element={<AccountPage />} />

            {/* Footer info pages */}
            <Route path="/faqs" element={<FaqPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/shipping" element={<ShippingPage />} />
            <Route path="/warranty" element={<WarrantyPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/returns" element={<ReturnsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
