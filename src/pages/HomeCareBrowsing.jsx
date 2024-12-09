import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "../pages/HomeCareBrowsing.css";

const HomeCareBrowsing = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const servicesData = [
    { name: "24 Hrs. Bed Side Attendant- 2 weeks", price: 15000 },
    { name: "12 Hrs. Bed Side Attendant- 2 weeks", price: 17000 },
    { name: "24 Hrs. Bed Side Attendant- 1 month", price: 32000 },
    { name: "12 Hrs. Bed Side Attendant- 1 month", price: 30000 },
    { name: "6 Hrs. Bed Side Attendant- 2 weeks", price: 19000 },
    { name: "6 Hrs. Bed Side Attendant- 2 months", price: 21000 },
  ];

  const [sortedServices, setSortedServices] = useState(servicesData);

  // Handle the booking process
  const handleBook = (serviceName, price) => {
    const formattedServiceName = serviceName.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();
    navigate(`/book/${formattedServiceName}`, { state: { name: serviceName, price } });
  };

  // Sort services based on price
  const handleSort = (order) => {
    const sorted = [...servicesData].sort((a, b) => {
      if (order === "low-high") {
        return a.price - b.price;
      } else if (order === "high-low") {
        return b.price - a.price;
      }
      return 0;
    });
    setSortedServices(sorted);
  };

  return (
    <div className="browsing-page">
      {/* Fixed Header */}
      <header className="header">
        <h1>HomeCare Service</h1>
      </header>

      {/* Left Breadcrumb Container (Fixed) */}
      <div className="breadcrumb-container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / <Link to="/home-care">Home-Care</Link> / Bedside Attendant
        </div>
      </div>

      {/* Advertisement Image (Below Breadcrumb Container) */}
      <div className="advertisement">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXkjR71JAz-W_dOFf9bfEOp3iCkfqQksKF1A&s"
          alt="Advertisement"
          className="ad-image"
        />
      </div>

      {/* Right Content Area (Main) */}
      <div className="main-content">
        {/* Centered Heading */}
        <center>
          <h3 className="title">
            <span className="blue-text">
              Bedside Attendant <span className="orange-text">by</span> category
            </span>
          </h3>
        </center>

        {/* Sorting Bar Below Heading */}
        <div className="sorting-bar">
          <span>Sort By:</span>
          <select onChange={(e) => handleSort(e.target.value)} defaultValue="low-high">
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>

        {/* Card Grid */}
        <div className="card-grid">
          {sortedServices.map((service, index) => (
            <div key={index} className="service-card">
              <h4>{service.name}</h4>
              <center>
                <p>Starts from</p>
                <strong>₹{service.price}</strong>
              </center>
              <center>
                <button onClick={() => handleBook(service.name, service.price)}>Proceed to Book</button>
              </center>
            </div>
          ))}
        </div>
      </div>

      {/* Fixed Footer */}
      <footer className="footer">
        <p>&copy; 2024 Home-Care. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomeCareBrowsing;
