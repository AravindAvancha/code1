import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ContinuousCarePage.css";

const ContinuousCarePage = () => {
  const [sortOrder, setSortOrder] = useState("low-high");

  const services = [
    {
      name: "12 Hrs. Continuous Care",
      description:
        "Nursing care refers to healthcare services provided by General Nursing and Midwifery (GNM) or a BSc Nursing nurse. These professionals work in various settings, including private residences, hospitals, nursing homes, rehabilitation centers, and hospice care facilities.",
      price: 2300,
    },
    {
      name: "24 Hrs. Continuous Care",
      description:
        "Nursing care refers to healthcare services provided by General Nursing and Midwifery (GNM) or a BSc Nursing nurse. These professionals work in various settings, including private residences, hospitals, nursing homes, rehabilitation centers, and hospice care facilities.",
      price: 3000,
    },
    {
      name: "12 + 12 Hrs. Shift (24 Hrs.)",
      description:
        "Nursing care refers to healthcare services provided by General Nursing and Midwifery (GNM) or a BSc Nursing nurse. These professionals work in various settings, including private residences, hospitals, nursing homes, rehabilitation centers, and hospice care facilities. This type of care is designed to meet the medical needs of individuals who require skilled nursing services at the convenience of their own homes.",
      price: 4200,
    },
  ];

  const navigate = useNavigate();

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

  // Navigates to the booking page
  const handleBook = (serviceName, price) => {
    navigate(`/book2/${serviceName}`, {state: { price: price },});
  };

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
          <Link to="/">Home</Link> / <Link to="/nursing">Nursing</Link> / Continuous Care
        </div>
      </div>

      {/* Advertisement Image */}
      <div className="advertisement2">
        <img
          src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/096f122c-47ee-4ead-98c1-4a11d5547c0d/2c88ceda-0117-4cc2-96e9-cfaa233a6f11.png"
          alt="Advertisement"
          className="ad-image2"
        />
      </div>

      {/* Main Content */}
      <main className="care-main-content">
        {/* Title */}
        <h3 className="care-title">
          <span className="highlight-blue">Continuous</span>{" "}
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
        <p>&copy; 2024 Home-Care. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContinuousCarePage;
