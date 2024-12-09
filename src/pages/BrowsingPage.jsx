import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./BrowsingPage.css";

const BrowsingPage = () => {
  const navigate = useNavigate();

  // State to manage current category view
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("low-high");

  const services = [
    { name: "Minor Surgical Dressing", price: 600 },
    { name: "Intramuscular Injection", price: 600 },
    { name: "Vitals Checkup", price: 700 },
    { name: "Nebulization", price: 700 },
    { name: "Enema", price: 700 },
    { name: "IV Cannula - Insertion and / or removal", price: 800 },
    { name: "IV therapy per session", price: 800 },
    { name: "Foleys Catheter Removal and / or Insertion", price: 800 },
    { name: "Ryles Tube Removal and / or Insertion", price: 900 },
  ];
  // Handle the booking process
  const handleBook = (serviceName, price) => {
    const formattedServiceName = serviceName.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();
    navigate(`/book1/${formattedServiceName}`, { state: { name: serviceName, price } });
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

  const filteredServices =
    selectedCategory === "Episodic Care" ? sortedServices : sortedServices;

  return (
    <div className="browsing-page">
      {/* Fixed Header */}
      <header className="header">
        <h1>
          <span className="orange-text">Nursing</span>{" "}
          <span className="blue-text">Services</span>
        </h1>
      </header>

      {/* Breadcrumb */}
      <div className="breadcrumb-container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / <Link to="/nursing">Nursing</Link> / Episodic Care
        </div>
      </div>

      {/* Advertisement Image */}
      <div className="advertisement1">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/021/926/895/small_2x/world-health-day-background-is-a-global-health-awareness-day-vector.jpg"
          alt="Advertisement"
          className="ad-image1"
        />
      </div>

      {/* Main Content */}
      <div className="content">
        <main className="main-content">
          <center>
            <h3 className="title1">
              <span className="blue-text1">
                Episodic<span className="orange-text1"> Care</span>
              </span>
            </h3>
          </center>
          {/* Sorting Bar */}
          <div className="sorting-bar1">
            <label htmlFor="sort-select">Sort By:</label>
            <select id="sort-select" value={sortOrder} onChange={handleSortChange}>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </div>

          {/* Service Cards */}
          <div className="card-grid">
            {filteredServices.map((service, index) => (
              <div key={index} className="service-card">
                <h5>{service.name}</h5>
                <p>Starts from</p>
                <strong>₹{service.price}</strong>
                <button onClick={() => handleBook(service.name, service.price)}>Proceed to Book</button>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Nursing. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default BrowsingPage;
