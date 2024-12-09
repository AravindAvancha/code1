import React, { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const EpisodicBookingPage = () => {
  const { serviceName } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [price, setPrice] = useState(location.state?.price || 0);
  const [bookingStep, setBookingStep] = useState("details");
  const [formData, setFormData] = useState({
    patientName: "",
    relation: "",
    age: "",
    disease: "",
    treatment: "",
    address: "",
    district: "",
    state: "",
    pincode: "",
    mobile: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleConfirmClick = () => {
    setBookingStep("form");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.patientName ||
      !formData.relation ||
      !formData.age ||
      !formData.disease ||
      !formData.treatment ||
      !formData.address ||
      !formData.district ||
      !formData.state ||
      !formData.pincode ||
      !formData.mobile
    ) {
      alert("Please fill out all fields.");
      return;
    }

    setBookingStep("success");

    setTimeout(() => {
      navigate(`/nursing/nursing-by-category/${serviceName}`);
    }, 5000);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#333", marginTop: "30px" }}>
      {/* Fixed Header */}
      <header className="header" style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1 style={{ fontFamily: "Poltawski Nowy, Arial, sans-serif", fontSize: "2rem", color: "#684FA4" }}>
          Nursing Service
        </h1>
      </header>

      {bookingStep === "details" && (
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <h2 style={{ fontSize: "1.8rem", marginBottom: "10px" }}>Selected Service</h2>
          <div
            style={{
              display: "inline-block",
              margin: "20px 0",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          >
            <p style={{ fontSize: "1.2rem", margin: "5px 0" }}>
              <strong>Service Name:</strong>{" "}
              <span style={{ color: "#684FA4" }}>{serviceName.replace(/-/g, " ")}</span>
            </p>
            <p style={{ fontSize: "1.2rem", margin: "5px 0" }}>
              <strong>Price:</strong> <span style={{ color: "orange" }}>₹{price}</span>
            </p>
            <button
              onClick={handleConfirmClick}
              style={{
                background: "#684FA4",
                color: "#fff",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "1rem",
                fontWeight: "bold",
                marginTop: "20px",
              }}
            >
              Confirm Booking
            </button>
          </div>
        </div>
      )}

      {bookingStep === "form" && (
        <div>
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <p style={{ fontSize: "1.2rem", color: "#555", marginBottom: "20px",marginTop:"55px" }}>
              <strong>Service:</strong>{" "}
              <span style={{ color: "#684FA4" }}>{serviceName.replace(/-/g, " ")}</span>
              <br />
              <strong>Price:</strong> <span style={{ color: "orange" }}>₹{price}</span>
            </p>
            
          </div>

          <form
            onSubmit={handleFormSubmit}
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              border: "1px solid #ddd",
              padding: "30px",
              borderRadius: "8px",
              boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#f9f9f9",
            }}
          >
            {/* Form Fields: Flexbox Layout for Side-by-Side Label and Input */}
            <h2 style={{ color: "orange", fontSize: "1.8rem", marginBottom: "20px", textAlign: "center" }}>
              Enter Patient Details
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
              {/* Left Column */}
              <div style={{ flex: "1 1 45%" }}>
                <div style={{ marginBottom: "15px", display: "flex", alignItems: "center" }}>
                  <label
                    htmlFor="patientName"
                    style={{
                      fontWeight: "bold",
                      display: "block",
                      marginRight: "15px",
                      width: "30%",
                    }}
                  >
                    Patient Name:
                  </label>
                  <input
                    type="text"
                    id="patientName"
                    name="patientName"
                    value={formData.patientName}
                    onChange={handleInputChange}
                    required
                    style={{ width: "65%", padding: "10px", borderRadius: "5px", border: "1px solid #ddd" }}
                  />
                </div>

                <div style={{ marginBottom: "15px", display: "flex", alignItems: "center" ,marginTop:"65px"}}>
                  <label
                    htmlFor="age"
                    style={{
                      fontWeight: "bold",
                      display: "block",
                      marginRight: "15px",
                      width: "30%",
                    }}
                  >
                    Age:
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    required
                    style={{ width: "65%", padding: "10px", borderRadius: "5px", border: "1px solid #ddd" }}
                  />
                </div>

                <div style={{ marginBottom: "15px", display: "flex", alignItems: "center" }}>
                  <label
                    htmlFor="disease"
                    style={{
                      fontWeight: "bold",
                      display: "block",
                      marginRight: "15px",
                      width: "30%",
                    }}
                  >
                    Disease:
                  </label>
                  <input
                    type="text"
                    id="disease"
                    name="disease"
                    value={formData.disease}
                    onChange={handleInputChange}
                    required
                    style={{ width: "65%", padding: "10px", borderRadius: "5px", border: "1px solid #ddd" }}
                  />
                </div>

                <div style={{ marginBottom: "15px", display: "flex", alignItems: "center" }}>
                  <label
                    htmlFor="treatment"
                    style={{
                      fontWeight: "bold",
                      display: "block",
                      marginRight: "15px",
                      width: "30%",
                    }}
                  >
                    Treatment Type:
                  </label>
                  <input
                    type="text"
                    id="treatment"
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleInputChange}
                    required
                    style={{ width: "65%", padding: "10px", borderRadius: "5px", border: "1px solid #ddd" }}
                  />
                </div>

                <div style={{ marginBottom: "15px", display: "flex", alignItems: "center" }}>
                  <label
                    htmlFor="mobile"
                    style={{
                      fontWeight: "bold",
                      display: "block",
                      marginRight: "15px",
                      width: "30%",
                    }}
                  >
                    Mobile Number:
                  </label>
                  <input
                    type="text"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                    style={{ width: "65%", padding: "10px", borderRadius: "5px", border: "1px solid #ddd" }}
                  />
                </div>
              </div>

              {/* Right Column */}
              <div style={{ flex: "1 1 45%" }}>
                <div style={{ marginBottom: "15px", display: "flex", alignItems: "center" }}>
                  <label
                    htmlFor="guardianName"
                    style={{
                      fontWeight: "bold",
                      display: "block",
                      marginRight: "15px",
                      width: "30%",
                    }}
                  >
                    Guardian Name:
                  </label>
                  <input
                    type="text"
                    id="guardianName"
                    name="guardianName"
                    value={formData.guardianName}
                    onChange={handleInputChange}
                    required
                    style={{ width: "65%", padding: "10px", borderRadius: "5px", border: "1px solid #ddd" }}
                  />
                </div>

                <div style={{ marginBottom: "15px", display: "flex", alignItems: "center",}}>
                  <label
                    htmlFor="relation"
                    style={{
                      fontWeight: "bold",
                      display: "block",
                      marginRight: "15px",
                      width: "30%",
                    }}
                  >
                    Relation:
                  </label>
                  <select
                    id="relation"
                    name="relation"
                    value={formData.relation}
                    onChange={handleInputChange}
                    required
                    style={{ width: "65%", padding: "10px", borderRadius: "5px", border: "1px solid #ddd" }}
                  >
                    <option value="">Select Relation</option>
                    <option value="Father">Father</option>
                    <option value="Mother">Mother</option>
                    <option value="Brother">Brother</option>
                    <option value="Sister">Sister</option>
                    <option value="Spouse">Spouse</option>
                  </select>
                </div>

                <div style={{ marginBottom: "15px", display: "flex", alignItems: "center" }}>
                  <label
                    htmlFor="address"
                    style={{
                      fontWeight: "bold",
                      display: "block",
                      marginRight: "15px",
                      width: "30%",
                    }}
                  >
                    Address:
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    style={{ width: "65%", padding: "10px", borderRadius: "5px", border: "1px solid #ddd" }}
                  />
                </div>

                <div style={{ marginBottom: "15px", display: "flex", alignItems: "center" }}>
                  <label
                    htmlFor="district"
                    style={{
                      fontWeight: "bold",
                      display: "block",
                      marginRight: "15px",
                      width: "30%",
                    }}
                  >
                    District:
                  </label>
                  <input
                    type="text"
                    id="district"
                    name="district"
                    value={formData.district}
                    onChange={handleInputChange}
                    required
                    style={{ width: "65%", padding: "10px", borderRadius: "5px", border: "1px solid #ddd" }}
                  />
                </div>

                <div style={{ marginBottom: "15px", display: "flex", alignItems: "center" }}>
                  <label
                    htmlFor="state"
                    style={{
                      fontWeight: "bold",
                      display: "block",
                      marginRight: "15px",
                      width: "30%",
                    }}
                  >
                    State:
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                    style={{ width: "65%", padding: "10px", borderRadius: "5px", border: "1px solid #ddd" }}
                  />
                </div>

                <div style={{ marginBottom: "15px", display: "flex", alignItems: "center" }}>
                  <label
                    htmlFor="pincode"
                    style={{
                      fontWeight: "bold",
                      display: "block",
                      marginRight: "15px",
                      width: "30%",
                    }}
                  >
                    Pincode:
                  </label>
                  <input
                    type="text"
                    id="pincode"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    required
                    style={{ width: "65%", padding: "10px", borderRadius: "5px", border: "1px solid #ddd" }}
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div style={{ textAlign: "center", marginTop: "30px" }}>
              <button
                type="submit"
                style={{
                  backgroundColor: "#684FA4",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "1rem",
                  marginBottom:"20px"
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}

      {bookingStep === "success" && (
        <div
          style={{
            textAlign: "center",
            marginTop: "40px",
            padding: "20px",
            backgroundColor: "#f2f2f2",
            borderRadius: "5px",
          }}
        >
          <h2 style={{ color: "green" }}>Booking Confirmed!</h2>
          <p style={{ color: "#555", fontSize: "1.2rem" }}>
            Your booking has been confirmed. Please wait while we redirect...
          </p>
        </div>
      )}
      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Nursing. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default EpisodicBookingPage;
