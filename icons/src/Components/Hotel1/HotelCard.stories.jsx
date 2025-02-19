import React from "react";
import HotelCard from "./HotelCard";

export default {
  title: "Components/HotelCard",
  component: HotelCard,
};

const Template = (args) => <HotelCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: "https://via.placeholder.com/300",
  name: "Hotel Royal Blue",
  location: "Zurich, Switzerland",
  price: 480,
  rating: 4.9,
  reviews: "6.8K",
};