import milkImage from "../assets/products/MotherDairy.png";
import lassiImage from "../assets/products/Lassi.png";
import pepsiImage from "../assets/products/pepsi.png";
import spriteImage from "../assets/products/Sprite.png";
import thumsUpImage from "../assets/products/Thumsup.png";
import realJuiceImage from "../assets/products/RealJuice.png";
import biscuitsImage from "../assets/products/Biscuits.png";
import riceImage from "../assets/products/Rice.png";
import attaImage from "../assets/products/Atta.png";
import saltImage from "../assets/products/Salt.png";
import maazaImage from "../assets/products/Maza.png";


const products = [
  
  {
  id: 1,
  name: "Milk",
  category: "Milk & Dairy",
  image: milkImage,

  keywords: [
    "milk",
    "doodh"
  ],

  variants: [
    "500 ml",
    "1 Litre",
    "2 Litre"
  ]
},

  {
    id: 2,
    name: "Lassi",
    category: "Milk & Dairy",
    image: lassiImage,
    variants: [
      "200 ml",
      "500 ml",
      "1 Litre"
    ]
  },

  {
  id: 3,
  name: "Coca-Cola",
  category: "Cold Drinks",
  image: "🥤",

  keywords: [
    "coca",
    "coke",
    "cola"
  ],

  variants: [
    "250 ml",
    "500 ml",
    "750 ml",
    "1.25 Litre",
    "2 Litre"
  ]
},

  {
  id: 4,
  name: "Pepsi",
  category: "Cold Drinks",
  image: pepsiImage,

  keywords: [
    "pepsi",
    "cold drink"
  ],

  variants: [
    "250 ml",
    "500 ml",
    "750 ml",
    "1.25 Litre",
    "2 Litre"
  ]
},

  {
    id: 5,
    name: "Sprite",
    category: "Cold Drinks",
    image: spriteImage,
    variants: [
      "250 ml",
      "500 ml",
      "750 ml",
      "1.25 Litre",
      "2 Litre"
    ]
  },

  {
    id: 6,
    name: "Thums Up",
    category: "Cold Drinks",
    image: thumsUpImage,
    variants: [
      "250 ml",
      "500 ml",
      "750 ml",
      "1.25 Litre",
      "2 Litre"
    ]
  },

  // =========================
  // Juice & Beverages
  // =========================

  {
    id: 7,
    name: "Real Juice",
    category: "Juice & Beverages",
    image: realJuiceImage,
    variants: [
      "200 ml",
      "500 ml",
      "1 Litre"
    ]
  },

  // =========================
  // Snacks
  // =========================

  {
    id: 8,
    name: "Biscuits",
    category: "Snacks",
    image: biscuitsImage,
    variants: [
      "Small Pack",
      "Medium Pack",
      "Family Pack"
    ]
  },

  {
    id: 9,
    name: "Chips",
    category: "Snacks",
    image: "🍟",
    variants: [
      "Small Pack",
      "Medium Pack",
      "Large Pack"
    ]
  },

  // =========================
  // Kirana
  // =========================

  {
    id: 10,
    name: "Rice",
    category: "Kirana",
    image: riceImage,
    variants: [
      "1 Kg",
      "5 Kg",
      "10 Kg",
      "25 Kg"
    ]
  },

  {
    id: 11,
    name: "Atta",
    category: "Kirana",
    image: attaImage,
    variants: [
      "1 Kg",
      "5 Kg",
      "10 Kg"
    ]
  },

  {
    id: 12,
    name: "Sugar",
    category: "Kirana",
    image: "🛍️",
    variants: [
      "1 Kg",
      "2 Kg",
      "5 Kg"
    ]
  },

  {
    id: 13,
    name: "Salt",
    category: "Kirana",
    image: saltImage,
    variants: [
      "500 g",
      "1 Kg"
    ]
  },
  {
  id: 14,
  name: "Maaza",
  category: "Juice & Beverages",
  image: maazaImage,
  variants: [
    "250 ml",
    "600 ml",
    "1.2 Litre"
  ]
}
];

export default products;