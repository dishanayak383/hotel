import React from "react";
import HotelCard from "./HotelCard";

const hotels = [
  {
    image: "https://via.placeholder.com/300",
    name: "Hotel Royal Blue",
    location: "Zurich, Switzerland",
    price: 480,
    rating: 4.9,
    reviews: "6.8K",
  },
  {
    image: "https://via.placeholder.com/300",
    name: "Warwick Grand Hotel",
    location: "London, UK",
    price: 250,
    rating: 5.0,
    reviews: "2.8K",
  },
];

const HotelList = () => {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {hotels.map((hotel, index) => (
        <HotelCard key={index} {...hotel} />
      ))}
    </div>
  );
};

export default HotelList;