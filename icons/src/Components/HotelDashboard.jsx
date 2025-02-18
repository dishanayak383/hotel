import React from "react";
import "./HotelDashboard.css";

const HotelDashboard = () => {
  return (
    <div className="hotel-dashboard">
      {/* Header Section */}
      <div className="header">
        <div className="user-info">
          <img className="user-avatar" src="https://media.licdn.com/dms/image/v2/D4E03AQHdHHV9bfJ2JA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1687267664513?e=2147483647&v=beta&t=Znl3Btuj2e2N6jKDm9m6hpN55HrzUPH2n4QeOfkv_0Y" alt="User Avatar" />
          <div>
            <h2>Joana Barros</h2>
            <h3>Hotel Guest</h3>
          </div>
        </div>
        <div className="lock-icon">🔒</div>
      </div>

      {/* Recommended Section */}
      <div className="recommended">
        <h4>Recommended for you</h4>
        <div className="recommended-card">
          <p className="price-tag">From $30/person</p>
          <h5>Enjoy some me time</h5>
          <p>Relax with our massages and treatments.</p>
          <p className="time-info">Spa facilities will close in 4 hours</p>
        </div>
      </div>

      {/* Popular Experiences */}
      <div className="popular-experiences">
        <h4>Popular experiences</h4>
        <div className="experience-list">
          <div className="experience-card">
            <p>🚴 Bike Riding</p>
            <small>Varied tour options</small>
          </div>
          <div className="experience-card">
            <p>🍽️ Dinner at the Table</p>
            <small>From $30/person</small>
          </div>
        </div>
      </div>

      {/* All Services Section */}
      <div className="all-services">
        <h4>All services</h4>
        <div className="service-item">🏨 Facilities <span>➡️</span></div>
        <div className="service-item">🔑 Virtual Key <span>➡️</span></div>
        <div className="service-item">🛏️ My Room <span>➡️</span></div>
        <div className="service-item">🍽️ Order Room Service <span>➡️</span></div>
      </div>

      {/* Points Section */}
      <div className="points-section">
        <p><strong>06 points</strong></p>
        <p>Accumulate points with your stay. They will turn into special offers for you.</p>
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <span>🏠</span>
        <span>📅</span>
        <span>🔔</span>
        <span>⚙️</span>
      </div>
    </div>
  );
};

export default HotelDashboard;
