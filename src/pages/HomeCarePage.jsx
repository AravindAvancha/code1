// src/pages/HomeCarePage.js
import React from 'react';
import { Link } from "react-router-dom";
import "./HomeCarePage.css";

const HomeCarePage = () => (
  <div>
    {/* Fixed Header */}
    <header className="header"></header>

    <center>
      <h2 className="services-heading">
        <span className="orange-text">Home-Care</span>{" "}
        <span className="blue-text">Services</span>
      </h2>
      <p>
        <span className="blue-text">
          Details about <span className="orange-text"> our </span>Home-care
          services.
          <br />
          REQUIRE SUPPORT DURING STEP-DOWN CARE BEDSIDE CARE AT HOME
        </span>
      </p>
      <center>
          <h3 className="title2">
            <span className="blue-text">
              Home-Care<span className="orange-text"> by </span> category
            </span>
          </h3>
        </center>
      {/* Card Section */}
      <div className="card-container">
        <Link to="/home-care/homecare-by-category/bedside-attendant" className="card">
          <div className="card-image-container">
            <img
              src="https://cphateststorage.s3.ap-south-1.amazonaws.com/mobile-images-new/bedside-attendant/basic_bedside_attendant.png"
              alt="Bedside Attendant"
              className="card-image"
            />
          </div>
          <h3 className="card-title"><span className="blue-text">Bedside Attendant</span></h3>
        </Link>
      </div>
    </center>
    {/* About Nursing Section */}
    <div className="about-nursing-container">
      <div className="about-nursing">
        <h3 className="about-title">About Bedside Attendant</h3>
        <p className="about-description">
        A bedside attendant, also known as a caregiver or personal care aide, provides personalized care and support to those who require assistance with daily activities such as ambulating, feeding, dressing, personal hygiene (bathing, brushing, nail care, hair care), toileting and diaper change. They provide care and companionship to those who need it due to illness, injury, disability, or age-related limitations. These professionals work in various settings, including private residences, hospitals, nursing homes, rehabilitation centers, and hospice care facilities. They play a crucial role in promoting the well-being, comfort, and independence of the individuals under their care, while also providing peace of mind to family members
        </p>
        <p className="about-description">
          MaharajuHealthCare provides Bed Side Attendant services on daily, weekly, and monthly basis - either for 12hrs or 24 hrs. The 12hr service starts from INR 1,300 and 24hrs service starts from INR 1,400 per day and can go higher based on skills needed and experience.
        </p>
        <p className="about-note">
          <strong style={{ color: "red" }}>Note:</strong>
          <br />
          <i class="bi bi-diamond-fill small-icon"></i> The actual price may
          vary depending upon the type of service chosen.
          <br />
          <i class="bi bi-diamond-fill small-icon"></i> Services are currently
          available in Hyderabad only.
        </p>
      </div>
      <div className="about-image-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH-NLF6LS4eLJ0a6uww3pQnBqBs-EFPeMQdA&s"
          alt="Home Care"
          className="about-image"
        />
      </div>
    </div>

    <Link to="/" className="back-button">
      <i className="bi bi-arrow-left"></i> Back
    </Link>

    {/* Fixed Footer */}
    <footer className="footer">
      <p>&copy; 2024 Home-Care. All rights reserved.</p>
    </footer>

  </div>
);

export default HomeCarePage;
