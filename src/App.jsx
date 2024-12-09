import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HospitalsPage from "./pages/HospitalPage"; // Your HospitalsPage component
import HomePage from "./pages/HomePage"; // Your HomePage component
import AmbulancePage from "./pages/AmbulancePage";
import "./index.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MedicalStorePage from "./pages/MedicalStore";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import NursingPage from "./pages/NursingPage";
import ThankYouPage from "./pages/ThankYouPage";
import BrowsingPage from "./pages/BrowsingPage";
import HomeCarePage from "./pages/HomeCarePage";
import HomeCareBrowsing from "./pages/HomeCareBrowsing";
import EpisodicBookingPage from "./pages/EpisodicBookingPage";
import BookingPage from "./pages/BookingPage"; // Create this component
// import './styles.css'; // Adjust the path according to your folder structure
import ContinuousCarePage from "./pages/ContinuousCarePage";
import PostTransplantCare from "./pages/PostTransplantCare";
import ContinuousBookingPage from "./pages/ContinuousBookingPage";
import TransplantBookingPage from "./pages/TransplantBookingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Home Page */}
          <Route path="/hospitals" element={<HospitalsPage />} />
          <Route path="/ambulance" element={<AmbulancePage />} />
          <Route path="/medical-store" element={<MedicalStorePage />} />
          <Route path="/nursing" element={<NursingPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route
            path="/nursing/nursing-by-category/:category"
            element={<BrowsingPage />}
          />
          <Route path="/book1/:serviceName" element={<EpisodicBookingPage />} />
          <Route
            path="/book2/:serviceName"
            element={<ContinuousBookingPage />}
          />
          <Route
            path="/book3/:serviceName"
            element={<TransplantBookingPage />}
          />
          <Route path="/home-care" element={<HomeCarePage />} />
          <Route
            path="home-care/homecare-by-category/:category"
            element={<HomeCareBrowsing />}
          />
          {/* <Route path="home-care/homecare-by-category/:category" element={<BedsideAttendant />} /> */}
          <Route path="/book/:serviceName" element={<BookingPage />} />
          <Route path="/continuous-care" element={<ContinuousCarePage />} />
          <Route
            path="/post-transplant-care"
            element={<PostTransplantCare />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
