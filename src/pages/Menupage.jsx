import React from "react";
import { FaHamburger, FaIceCream, FaPizzaSlice, FaLeaf, FaDrumstickBite } from "react-icons/fa";

const menuData = [
  {
    category: "Burgers",
    icon: <FaHamburger className="text-3xl text-red-500" />,
    items: [
      { name: "Classic Beef Burger", price: "$8", desc: "Juicy grilled beef with lettuce and cheese", img: "#" },
      { name: "Chicken Zinger Burger", price: "$7", desc: "Crispy chicken patty with spicy mayo", img: "#" },
      { name: "Veggie Delight Burger", price: "$6", desc: "Loaded veggie patty with tangy sauces", img: "#" },
      { name: "Double Trouble Burger", price: "$10", desc: "Double beef patty with all toppings", img: "#" },
      { name: "BBQ Bacon Burger", price: "$9", desc: "Beef, bacon, and BBQ sauce combo", img: "#" },
      { name: "Mushroom Swiss Burger", price: "$8", desc: "Sautéed mushrooms and swiss cheese", img: "#" }
    ],
  },
  {
    category: "Desserts",
    icon: <FaIceCream className="text-3xl text-pink-400" />,
    items: [
      { name: "Chocolate Lava Cake", price: "$6", desc: "Warm cake with molten chocolate center", img: "#" },
      { name: "Vanilla Ice Cream", price: "$4", desc: "Classic creamy vanilla scoop", img: "#" },
      { name: "Strawberry Cheesecake", price: "$7", desc: "Rich cream cheese with strawberry topping", img: "#" },
      { name: "Tiramisu", price: "$8", desc: "Coffee-soaked layered Italian classic", img: "#" },
      { name: "Brownie with Ice Cream", price: "$7", desc: "Fudgy brownie topped with vanilla", img: "#" },
      { name: "Oreo Sundae", price: "$6", desc: "Oreo crumble with vanilla and chocolate sauce", img: "#" }
    ],
  },
  {
    category: "Pizza",
    icon: <FaPizzaSlice className="text-3xl text-yellow-500" />,
    items: [
      { name: "Margherita Pizza", price: "$10", desc: "Classic pizza with mozzarella and tomato sauce", img: "#" },
      { name: "BBQ Chicken Pizza", price: "$12", desc: "Grilled chicken with BBQ sauce", img: "#" },
      { name: "Pepperoni Pizza", price: "$11", desc: "Topped with spicy pepperoni and mozzarella", img: "#" },
      { name: "Veggie Supreme Pizza", price: "$9", desc: "Loaded with fresh vegetables and mozzarella", img: "#" },
      { name: "Hawaiian Pizza", price: "$10", desc: "Topped with pineapple and ham", img: "#" },
      { name: "Four Cheese Pizza", price: "$12", desc: "A blend of mozzarella, cheddar, parmesan, and blue cheese", img: "#" }
    ],
  },
  {
    category: "Healthy",
    icon: <FaLeaf className="text-3xl text-green-600" />,
    items: [
      { name: "Avocado Toast", price: "$6", desc: "Fresh avocado on whole grain toast", img: "#" },
      { name: "Quinoa Salad", price: "$8", desc: "Healthy quinoa with roasted veggies", img: "#" },
      { name: "Green Smoothie", price: "$5", desc: "A refreshing blend of kale, spinach, and apple", img: "#" },
      { name: "Grilled Veggie Wrap", price: "$7", desc: "Grilled vegetables with a tangy sauce", img: "#" },
      { name: "Caesar Salad", price: "$9", desc: "Classic Caesar with romaine and parmesan", img: "#" },
      { name: "Chia Pudding", price: "$6", desc: "Creamy chia seeds with almond milk", img: "#" }
    ],
  },
  {
    category: "Non-Veg",
    icon: <FaDrumstickBite className="text-3xl text-orange-600" />,
    items: [
      { name: "Grilled Chicken Wings", price: "$8", desc: "Delicious grilled chicken wings", img: "#" },
      { name: "Tandoori Chicken", price: "$10", desc: "Traditional tandoori-style chicken", img: "#" },
      { name: "Lamb Chops", price: "$12", desc: "Tender lamb chops with a smoky flavor", img: "#" },
      { name: "Chicken Shawarma", price: "$9", desc: "Tender chicken served with pita and veggies", img: "#" },
      { name: "Fish Tacos", price: "$10", desc: "Fresh fish in soft tortillas with cilantro slaw", img: "#" },
      { name: "Beef Kebabs", price: "$11", desc: "Juicy beef skewers marinated and grilled to perfection", img: "#" }
    ],
  }
];

const MenuPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-100 py-20 px-15 md:px-20 overflow-visible">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-red-600 mb-10">Our Menu</h1>
      {menuData.map((section, index) => (
        <div key={index} className="mb-16"> {/* Increased gap between sections */}
          <div className="flex items-center gap-3 mb-6">
            {section.icon}
            <h2 className="text-3xl font-semibold text-gray-800">{section.category}</h2>
          </div>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {section.items.map((item, idx) => (
              <div
                key={idx}
                className="w-full max-w-sm mx-auto bg-white shadow-xl rounded-2xl p-5 hover:scale-105 transition-transform duration-300 ml-10"
              >
                <div className="h-40 bg-gray-300 rounded-xl mb-3" /> {/* Image placeholder */}
                <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                <p className="text-gray-500 text-sm mb-2">{item.desc}</p>
                
                <span className="text-red-500 font-semibold text-lg">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuPage;
