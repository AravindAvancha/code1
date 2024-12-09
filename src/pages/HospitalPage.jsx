import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Slider from 'react-slick'; // Import React Slick for carousel
import './HospitalPage.css'; // Ensure you create and style this CSS file
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const hospitals = [
  { name: 'HISAR HOSPITAL INTERCONTINONTIONAL', location: '-Hyderabad', image: 'image1.png', link: 'https://hisarhospital.com/en/' },
  { name: 'SA PRIVATE HOSPITAL', location: '-Hyderabad', image: 'image2.png', link: 'https://www.saprivatehospitals.com/' },
  { name: 'DARSH HOSPITAL', location: '-Hyderabad', image: 'image3.jpg', link: 'https://darshhospital.com/' },
  { name: 'KENCREST PRIVATE HOSPITAL', location: '-Hyderabad', image: 'image4.jpg', link: 'https://heliumdoc.com/ng/clinic/kencrest-private-hospital/' },
  { name: 'VARDHMAN HOSPITAL AND HEART CENTER', location: '-Hyderabad', image: 'image5.jpg', link: 'https://vardhmanhospital.com/' },
  { name: 'HUDSON REGIONAL HOSPITAL', location: '-Hyderabad', image: 'image6.jpg', link: 'https://hudsonregionalhospital.com/' },
  { name: 'DIVYAM HOSPITAL', location: '-Hyderabad', image: 'image8.jpeg', link: 'https://divyamhospital.com/' },
  { name: 'R.K HOSPITAL', location: '-Hyderabad', image: 'image9.png', link: 'https://rk-hospital.com/' },
  { name: 'ANANTHA MULTISPECIALITY HOSPITAL', location: '-Hyderabad', image: 'image10.jpg', link: 'https://www.anantamultispecialityhospital.in/services.php' },
];

const reviews = [
  { name: 'John Doe', feedback: 'Excellent service and care! Highly recommended.', rating: 5 },
  { name: 'Jane Smith', feedback: 'The staff was very helpful and polite.', rating: 4 },
  { name: 'Alice Johnson', feedback: 'Affordable treatment with the best doctors.', rating: 5 },
  { name: 'Mark Wilson', feedback: 'Great infrastructure and quick service.', rating: 5 },
];

const HospitalsPage = () => {
  // Slick carousel settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="hospitals-container">
      {/* Fixed Header */}
      <header className="header"></header>

      <h2 className="services-heading">
        <span className="orange-text">Hospital</span> <span className="blue-text">Services</span>
      </h2>
      <span className="blue-text">
        <p>
          Details about <span className="orange-text">our</span> hospital services.
          <br />
          Book An Appointment Now! CARE Hospitals Has Vast Team Of Experienced Doctors In 30+
          Specialties. Ambulance Service. Hospital Near You. Affordable Treatment. Leading Surgeons.
          24/7 Service. Leading Hospital. Advanced Infrastructure. Advanced Treatment. 30+
          Specialties. Rated Excellent.
        </p>
      </span>

      <div className="hospitals-grid">
        {hospitals.map((hospital, index) => (
          <div className="hospital-card" key={index}>
            <a href={hospital.link} target="_blank" className='anchor' rel="noopener noreferrer">
              <img
                src={`/images/${hospital.image}`}
                alt={hospital.name}
                className="hospital-image"
              />
              <h4 className="hospital-name">{hospital.name}</h4>           
              <div className="hospital-location-second">{hospital.location}</div>
            </a>
          </div>
        ))}
      </div>

      {/* Patient Feedback Carousel */}
      <div className="patient-feedback-carousel">
        <h3 className="feedback-heading">
          <span className="orange-text">Patient</span> <span className="blue-text">Feedback</span>
        </h3>
        <Slider {...sliderSettings}>
          {reviews.map((review, index) => (
            <div className="feedback-card" key={index}>
              <p className="feedback-text">"{review.feedback}"</p>
              <p className="feedback-name">- {review.name}</p>
              <p className="feedback-rating">Rating: {Array(review.rating).fill('⭐')}</p>
            </div>
          ))}
        </Slider>
      </div>

      {/* Back Button */}
      <Link to="/" className="back-button">
        <i className="bi bi-arrow-left"></i> Back
      </Link>

      {/* Fixed Footer */}
      <footer className="footer">
        <p>&copy; 2024 Hospital. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HospitalsPage;
