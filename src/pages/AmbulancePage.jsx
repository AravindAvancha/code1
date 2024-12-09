import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AmbulancePage.css";

const AmbulancePage = () => {
  const [patientName, setPatientName] = useState("");
  const [patientAge, setPatientAge] = useState("");
  const [patientMobile, setPatientMobile] = useState("");
  const [patientAddress, setPatientAddress] = useState("");
  const [hospitalSearch, setHospitalSearch] = useState("");
  const [locationSearch, setLocationSearch] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/thank-you", {
      state: {
        patientName,
        patientAge,
        patientMobile,
        patientAddress,
      },
    });
  };

  const makeEmergencyCall = () => {
    alert("Dialing the emergency number... 911");
    window.location.href = "tel:+911";
  };

  const searchHospitals = () => {
    alert(
      `Searching for hospitals with name: "${hospitalSearch}" and location: "${locationSearch}"`
    );
  };

  const useCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const address = `Lat: ${latitude}, Long: ${longitude}`;
          setPatientAddress(address);
        },
        () => {
          alert("Unable to retrieve your location.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="min-h-screen">
      {/* Fixed Header */}
      <header className="header"></header>

      <div>
        <center>
        <h2 className="services-heading1">
          <span className="orange-text">Ambulance</span> <span className="blue-text">Services</span>
        </h2>
        <p>
          <span className="blue-text">
            Details about <span className="orange-text">our</span> ambulance services.
          </span>
        </p>
        </center>
      </div>

      <div className="container">
        {/* Left Section - Patient Info Form */}
        <div className="form-container">
          <h2>
            <center>Patient Information</center>
          </h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="patientName" className="label-blue">Patient Name</label>
              <input
                type="text"
                id="patientName"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                required
                className="input-field"
                placeholder="Enter Patient Name"
              />
            </div>

            <div>
              <label htmlFor="patientAge" className="label-blue">Patient Age</label>
              <input
                type="number"
                id="patientAge"
                value={patientAge}
                onChange={(e) => setPatientAge(e.target.value)}
                required
                className="input-field"
                placeholder="Enter Patient Age"
              />
            </div>

            <div>
              <label htmlFor="patientMobile" className="label-blue">Patient Mobile Number</label>
              <input
                type="tel"
                id="patientMobile"
                value={patientMobile}
                onChange={(e) => setPatientMobile(e.target.value)}
                required
                className="input-field"
                placeholder="Enter Patient Mobile Number"
              />
            </div>

            <div>
              <label htmlFor="patientAddress" className="label-blue">Patient Address</label>
              <input
                type="text"
                id="patientAddress"
                value={patientAddress}
                onChange={(e) => setPatientAddress(e.target.value)}
                required
                className="input-field"
                placeholder="Enter Patient Address"
              />
            </div>

            <button type="button" onClick={useCurrentLocation} className="use-location-btn-sec">
              Use Current Location
            </button>
            <button type="submit" className="submit-btn">Book Ambulance</button>
          </form>
        </div>

        {/* Right Section - Find Hospital */}
        <div className="form-container">
          <h3><center>Find Hospital</center></h3>

          <div>
            <label htmlFor="hospitalSearch" className="label-orange">Hospital Name</label>
            <input
              type="text"
              id="hospitalSearch"
              value={hospitalSearch}
              onChange={(e) => setHospitalSearch(e.target.value)}
              className="input-field"
              placeholder="Enter Hospital Name"
            />
          </div>

          <div>
            <label htmlFor="locationSearch" className="label-orange">Location</label>
            <input
              type="text"
              id="locationSearch"
              value={locationSearch}
              onChange={(e) => setLocationSearch(e.target.value)}
              className="input-field"
              placeholder="Enter Location or City"
            />
          </div>

          <button onClick={searchHospitals} className="find-hospitals-btn">Find Hospitals</button>
          <button onClick={makeEmergencyCall} className="emergency-btn">Emergency Call</button>
        </div>
      </div>

      {/* Back Button */}
      <Link to="/" className="back-button">
        <i className="bi bi-arrow-left"></i> Back
      </Link>

      {/* Fixed Footer */}
      <footer className="footer">
        <p>&copy; 2024 Ambulance. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AmbulancePage;
