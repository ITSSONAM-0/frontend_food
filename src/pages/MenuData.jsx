import AlooTikkiBurger from "../images/Burger/BURGER3.png";
import MasalaBurger from "../images/Burger/BURGER2.png";
import MaharajaBurger from "../images/Burger/BURGER2.png"; // FIXED HERE
// pizza
import OTCPizza from "../images/pizza/pizza.png";
import ItalianPizza from "../images/pizza/pizza2.png";
import VeggiePizza from "../images/pizza/VeggiesPizza.webp";
// Fries
import FrenchFries from "../images/Fries/frenchFries.png";
// Pasta
import RedPasta from "../images/Pasta/RedPasta.png";
import WhitePasta from "../images/Pasta/whitePasta.png";
// Desserts
import cheesecake from "../images/Desserts/cheesecake.jpg";
import crossaint from "../images/Desserts/crossaintFrenchToastNutella.jpeg";

const MenuData = [
  // burger
  {
    id: 1,
    category: "Burger",
    name: "Aloo Tikki Burger",
    price: 45,
    image: AlooTikkiBurger,
  },
  {
    id: 2,
    category: "Burger",
    name: "Masala Burger",
    price: 65,
    image: MasalaBurger,
  },
  {
    id: 3,
    category: "Burger",
    name: "Maharaja Burger",
    price: 90,
    image: MaharajaBurger,
  },

  //   Pizza
  {
    id: 4,
    category: "Pizza",
    name: "OTC Pizza",
    price: 105,
    image: OTCPizza,
  },
  {
    id: 5,
    category: "Pizza",
    name: "Italian Pizza",
    price: 220,
    image: ItalianPizza,
  },
  {
    id: 6,
    category: "Pizza",
    name: "Veggie Pizza",
    price: 220,
    image: VeggiePizza,
  },
  //   Fries
  {
    id: 7,
    category: "Fries",
    name: "Crispy Fries",
    price: 70,
    image: FrenchFries,
  },
  //   pasta
  {
    id: 8,
    category: "Pasta",
    name: "Red Sauce Pasta",
    price: 210,
    image: RedPasta,
  },
  {
    id: 9,
    category: "Pasta",
    name: "White Sauce Pasta",
    price: 250,
    image: WhitePasta,
  },

  //   desserts
  {
    id: 10,
    category: "Desserts",
    name: "Cheesecake Platter",
    price: 950,
    image: cheesecake,
  },
  {
    id: 11,
    category: "Desserts",
    name: "Crossaint French Toast ",
    price: 250,
    image: crossaint,
  },
];
export default MenuData;