// TODO: 'Format currency' helper

import { nanoid } from "nanoid";

const data = [
  {
    id: nanoid(10),
    title: "Ball Bearings (Bag of 1,000)",
    category: ["Adventuring gear"],
    price: 100,
    weight: 2,
  },
  {
    id: nanoid(10),
    title: "Battleaxe",
    category: ["Martial weapon", "melee weapon"],
    price: 1000,
    weight: 4,
  },
  {
    id: nanoid(10),
    title: "Drow Poison",
    category: ["Adventuring gear", "Poison"],
    price: 20000,
  },
  {
    id: nanoid(10),
    title: "Hempen Rope (50 ft)",
    category: ["Adventuring gear"],
    price: 100,
    weight: 10,
  },
  {
    id: nanoid(10),
    title: "Lute",
    category: ["Instrument"],
    price: 3500,
    weight: 2,
  },
];

export default data;
