import React, { useState } from 'react';


const menuData = {
  'Starters': [
    { name: 'Paneer Tikka', type: 'veg', price: '$8.99', description: 'Marinated paneer grilled to perfection.', image: '/assets/Paneer Tikka.jpeg' },
    { name: 'Chicken Wings', type: 'non-veg', price: '$9.99', description: 'Spicy and crispy chicken wings.', image: '/assets/Chicken Wings.jpeg' },
    { name: 'Veg Spring Rolls', type: 'veg', price: '$6.99', description: 'Crispy rolls stuffed with veggies.', image: '/assets/Veg Spring Rolls.jpeg' },
    { name: 'Mutton Kebab', type: 'non-veg', price: '$11.99', description: 'Tender mutton grilled with spices.', image: '/assets/Mutton Kebab.jpeg' },
    { name: 'Chilli Paneer', type: 'veg', price: '$8.49', description: 'Paneer tossed in spicy Indo-Chinese sauce.', image: '/assets/Chilli Paneer.jpeg' },
    { name: 'Fish Fingers', type: 'non-veg', price: '$10.49', description: 'Golden fried fish with tartar dip.', image: '/assets/Fish Fingers.jpeg' },
  ],
  'Main Course': [
    { name: 'Butter Chicken', type: 'non-veg', price: '$12.99', description: 'Creamy tomato-based chicken curry.', image: '/assets/butterchicken.jpeg' },
    { name: 'Palak Paneer', type: 'veg', price: '$9.99', description: 'Paneer in a rich spinach gravy.', image: '/assets/Palak Paneer.jpeg' },
    { name: 'Chicken Curry', type: 'non-veg', price: '$11.99', description: 'Traditional spiced chicken curry.', image: '/assets/Chicken Curry.jpeg' },
    { name: 'Dal Tadka', type: 'veg', price: '$7.99', description: 'Yellow lentils tempered with spices.', image: '/assets/Dal Tadka.jpeg' },
    { name: 'Egg Curry', type: 'non-veg', price: '$10.49', description: 'Boiled eggs in flavorful gravy.', image: '/assets/Egg Curry.jpeg' },
    { name: 'Mix Veg Curry', type: 'veg', price: '$8.49', description: 'Seasonal vegetables cooked in masala.', image: '/assets/Mix Veg Curry.jpeg' },
  ],
  'Biryani & Rice': [
    { name: 'Chicken Biryani', type: 'non-veg', price: '$12.49', description: 'Spiced rice with chicken.', image: '/assets/Chicken Biryani.jpeg' },
    { name: 'Veg Biryani', type: 'veg', price: '$9.49', description: 'Aromatic rice with mixed vegetables.', image: '/assets/Veg Biryani.jpeg' },
    { name: 'Mutton Biryani', type: 'non-veg', price: '$13.49', description: 'Slow-cooked mutton with biryani rice.', image: '/assets/Mutton Biryani.jpeg' },
    { name: 'Jeera Rice', type: 'veg', price: '$4.99', description: 'Simple cumin-flavored rice.', image: '/assets/Jeera Rice.jpeg' },
    { name: 'Egg Fried Rice', type: 'non-veg', price: '$8.99', description: 'Stir-fried rice with egg.', image: '/assets/Egg Fried Rice.jpeg' },
    { name: 'Plain Rice', type: 'veg', price: '$3.99', description: 'Steamed basmati rice.', image: '/assets/Plain Rice.jpeg' },
  ],
  'Breads': [
    { name: 'Butter Naan', type: 'veg', price: '$2.49', description: 'Soft naan brushed with butter.', image: '/assets/butternaan.jpeg' },
    { name: 'Garlic Naan', type: 'veg', price: '$2.99', description: 'Naan with fresh garlic and herbs.', image: '/assets/Garlic Naan.jpeg' },
    { name: 'Tandoori Roti', type: 'veg', price: '$1.99', description: 'Whole wheat bread baked in clay oven.', image: '/assets/Tandoori Roti.jpeg' },
    { name: 'Lachha Paratha', type: 'veg', price: '$2.49', description: 'Flaky, layered flatbread.', image: '/assets/Lachha Paratha.jpeg' },
    { name: 'Stuffed Kulcha', type: 'veg', price: '$3.49', description: 'Kulcha stuffed with spiced potatoes.', image: '/assets/Stuffed Kulcha.jpeg' },
    { name: 'Cheese Naan', type: 'veg', price: '$3.99', description: 'Naan filled with melted cheese.', image: '/assets/cheesenaan.jpeg' },
  ],
  'Desserts': [
    { name: 'Gulab Jamun', type: 'veg', price: '$4.99', description: 'Soft milk balls in rose syrup.', image: '/assets/Gulab Jamun.jpeg' },
    { name: 'Rasmalai', type: 'veg', price: '$5.49', description: 'Cottage cheese balls in creamy milk.', image: '/assets/Rasmalai.jpeg' },
    { name: 'Ice Cream', type: 'veg', price: '$3.99', description: 'Various flavors of ice cream.', image: '/assets/Ice Cream.jpeg' },
    { name: 'Chocolate Brownie', type: 'veg', price: '$5.99', description: 'Rich chocolate dessert.', image: '/assets/Chocolate Brownie.jpeg' },
    { name: 'Fruit Custard', type: 'veg', price: '$4.49', description: 'Mixed fruits in creamy custard.', image: '/assets/Fruit Custard.jpeg' },
    { name: 'Phirni', type: 'veg', price: '$5.29', description: 'Rice pudding with saffron & nuts.', image: '/assets/Phirni.jpeg' },
  ]
};


export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('Starters');
  const dishes = menuData[selectedCategory]; // Get dishes for selected category

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Our Menu</h2>

      {/* Category Buttons */}
      <div className="flex justify-center gap-4 flex-wrap mb-6">
        {Object.keys(menuData).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full font-semibold transition ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-white text-blue-600 border border-blue-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Dish Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pl-10">
        {dishes.map((dish, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-1 text-gray-800">{dish.name}</h3>
              <p className="text-gray-600 mb-2">{dish.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-red-500">${dish.price}</span>
                <span
                  className={`text-sm font-medium ${
                    dish.type === 'Veg' ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  ● {dish.type}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
