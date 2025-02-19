import React from "react";

const HotelCard = ({ image, name, location, price, rating, reviews }) => {
  return (
    <div className="rounded-2xl shadow-lg p-4 bg-white">
      <img src={image} alt={name} className="rounded-xl w-full h-40 object-cover" />
      <h3 className="text-lg font-semibold mt-2">{name}</h3>
      <p className="text-sm text-gray-500">{location}</p>
      <p className="text-orange-500 font-bold">${price}/night</p>
      <p className="text-gray-600">⭐ {rating} ({reviews} reviews)</p>
    </div>
  );
};

export default HotelCard;