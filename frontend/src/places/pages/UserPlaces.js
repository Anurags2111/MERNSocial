import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    imageUrl:
      "https://images.unsplash.com/photo-1555109307-f7d9da25c244?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=kit-suman-WQwtk_t4oJI-unsplash.jpg&w=640",
    description:
      "Iconic, art deco office tower from 1931 with exhibits & observatories on the 86th & 102nd floors.",
    address: "20 W 34th St, New York, NY 10001, United States",
    creator: "u1",
    location: {
      lat: 40.7484445,
      lng: -73.9878531,
    },
  },
  {
    id: "p2",
    title: "Taj Mahal",
    imageUrl:
      "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=darsh-nishar-0pG9XKXCj4s-unsplash.jpg&w=640",
    description:
      "17th-century, Mughal-style, marble mausoleum with minarets, a mosque & famously symmetrical gardens.",
    address: "Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001",
    creator: "u2",
    location: {
      lat: 27.1751496,
      lng: 78.0399535,
    },
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
