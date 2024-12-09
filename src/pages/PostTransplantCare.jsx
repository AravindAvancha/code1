import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "./PostTransplantCare.css";

const PostTransplantCare = () => {
  const [sortOrder, setSortOrder] = useState("low-high");
  const navigate = useNavigate(); // Initialize navigate

  const services = [
    {
      name: "24 Hrs. Continuous Care",
      description:
        "Post-transplant home care nursing services involve providing specialized care and support to patients who have undergone organ transplantation, ensuring a smooth recovery at home. These services include managing complex medication regimens, monitoring for signs of complications like organ rejection or infections, and implementing strict infection control measures. Home care nurses also educate patients and their families on self-care practices, provide emotional and psychological support, and coordinate with the transplant team to ensure continuity of care. This comprehensive approach helps optimize the patientâs recovery, maintain their overall health, and improve their quality of life after the transplant.",
      price: 4500,
    },
    {
      name: "12 + 12 Hrs. shift (24 Hrs.)",
      description:
        "Post-transplant home care nursing services involve providing specialized care and support to patients who have undergone organ transplantation, ensuring a smooth recovery at home. These services include managing complex medication regimens, monitoring for signs of complications like organ rejection or infections, and implementing strict infection control measures. Home care nurses also educate patients and their families on self-care practices, provide emotional and psychological support, and coordinate with the transplant team to ensure continuity of care. This comprehensive approach helps optimize the patientâs recovery, maintain their overall health, and improve their quality of life after the transplant.",
      price: 6500,
    },
  ];

  // Navigate to the booking page
  const handleBook = (serviceName, price) => {
    navigate(`/book3/${serviceName}`, {
      state: { price: price },
    });
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const sortedServices = [...services].sort((a, b) => {
    if (sortOrder === "low-high") {
      return a.price - b.price;
    } else if (sortOrder === "high-low") {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <div className="care-container">
      {/* Header */}
      <header className="header">
        <h1>
          <span className="orange-text">Nursing</span>{" "}
          <span className="blue-text">Services</span>
        </h1>
      </header>

      {/* Breadcrumb */}
      <div className="breadcrumb-container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / <Link to="/nursing">Nursing</Link> / Transplant Care
        </div>
      </div>

      {/* Advertisement Image */}
      <div className="advertisement3">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQneaCviIaiFo9ICu9Zk3bdNUcaStfVu5RHhg&s"
          alt="Advertisement"
          className="ad-image3"
        />
      </div>

      {/* Main Content */}
      <main className="care-main-content">
        {/* Title */}
        <h3 className="care-title3">
          <span className="highlight-blue">Post Transplant</span>{" "}
          <span className="highlight-orange">Care</span>
        </h3>

        {/* Sorting Bar */}
        <div className="care-sorting-bar">
          <label htmlFor="sort-select">Sort By:</label>
          <select id="sort-select" value={sortOrder} onChange={handleSortChange}>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>

        {/* Service List */}
        <div className="service-list">
          {sortedServices.map((service, index) => (
            <div key={index} className="service-item">
              <h4>{service.name}</h4>
              <p>{service.description}</p>
              <p>Starts from</p>
              <strong>₹{service.price}</strong>
              <button onClick={() => handleBook(service.name, service.price)}>Proceed to Book</button>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Transplant Care. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PostTransplantCare;
