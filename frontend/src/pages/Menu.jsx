import React, { useState } from 'react';
import { Leaf, Drumstick, ShoppingCart, Plus, Minus, X } from 'lucide-react';

const RestaurantMenu = () => {
  const [activeCategory, setActiveCategory] = useState('Veg');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const menuData = {
    Veg: [
      {
        id: 1,
        name: "Paneer Butter Masala",
        description: "Creamy tomato-based curry with tender paneer cubes and aromatic spices",
        price: 285,
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&h=200&fit=crop&crop=center"
      },
      {
        id: 2,
        name: "Dal Tadka",
        description: "Yellow lentils tempered with cumin, garlic, and fresh herbs",
        price: 195,
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop&crop=center"
      },
      {
        id: 3,
        name: "Vegetable Biryani",
        description: "Fragrant basmati rice layered with mixed vegetables and saffron",
        price: 325,
        image: "https://images.unsplash.com/photo-1563379091339-03246963d67a?w=300&h=200&fit=crop&crop=center"
      },
      {
        id: 4,
        name: "Aloo Gobi",
        description: "Classic potato and cauliflower curry with traditional spices",
        price: 215,
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop&crop=center"
      },
      {
        id: 5,
        name: "Palak Paneer",
        description: "Fresh spinach gravy with soft paneer cubes and cream",
        price: 275,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=200&fit=crop&crop=center"
      },
      {
        id: 6,
        name: "Chole Bhature",
        description: "Spicy chickpea curry served with fluffy fried bread",
        price: 245,
        image: "https://images.unsplash.com/photo-1626132647523-66f0bf380027?w=300&h=200&fit=crop&crop=center"
      },
      {
        id: 7,
        name: "Malai Kofta",
        description: "Deep-fried paneer balls in rich creamy tomato gravy",
        price: 295,
        image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300&h=200&fit=crop&crop=center"
      },
      {
        id: 8,
        name: "Vegetable Korma",
        description: "Mixed vegetables in coconut-cashew based creamy curry",
        price: 265,
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop&crop=center"
      },
      {
        id: 9,
        name: "Rajma Rice",
        description: "Kidney beans curry served with steamed basmati rice",
        price: 225,
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop&crop=center"
      }
    ],
    'Non-Veg': [
      {
        id: 10,
        name: "Butter Chicken",
        description: "Tender chicken in rich tomato-butter gravy with cream and spices",
        price: 385,
        image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=300&h=200&fit=crop&crop=center"
      },
      {
        id: 11,
        name: "Chicken Biryani",
        description: "Aromatic basmati rice layered with spiced chicken and saffron",
        price: 425,
        image: "https://images.unsplash.com/photo-1563379091339-03246963d67a?w=300&h=200&fit=crop&crop=center"
      },
      {
        id: 12,
        name: "Fish Curry",
        description: "Fresh fish cooked in coconut-based spicy curry sauce",
        price: 445,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop&crop=center"
      },
      {
        id: 13,
        name: "Mutton Rogan Josh",
        description: "Slow-cooked lamb in aromatic Kashmiri-style curry",
        price: 485,
        image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=300&h=200&fit=crop&crop=center"
      },
      {
        id: 14,
        name: "Chicken Tikka Masala",
        description: "Grilled chicken pieces in creamy tomato-onion gravy",
        price: 365,
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=200&fit=crop&crop=center"
      },
      {
        id: 15,
        name: "Prawn Curry",
        description: "Juicy prawns in spicy coconut curry with curry leaves",
        price: 525,
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=300&h=200&fit=crop&crop=center"
      },
      {
        id: 16,
        name: "Chicken Korma",
        description: "Mild chicken curry in cashew-yogurt based creamy sauce",
        price: 345,
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=300&h=200&fit=crop&crop=center"
      },
      {
        id: 17,
        name: "Lamb Biryani",
        description: "Premium basmati rice with tender lamb pieces and exotic spices",
        price: 545,
        image: "https://images.unsplash.com/photo-1563379091339-03246963d67a?w=300&h=200&fit=crop&crop=center"
      },
      {
        id: 18,
        name: "Chicken Tandoori",
        description: "Marinated chicken roasted in tandoor with smoky flavors",
        price: 395,
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=300&h=200&fit=crop&crop=center"
      }
    ],
    Desserts: [
      {
        id: 19,
        name: "Gulab Jamun",
        description: "Soft milk dumplings soaked in cardamom-rose sugar syrup",
        price: 125,
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=300&h=200&fit=crop&crop=center"
      },
      {
        id: 20,
        name: "Rasmalai",
        description: "Spongy cottage cheese balls in sweetened saffron milk",
        price: 145,
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300&h=200&fit=crop&crop=center"
      },
      {
        id: 21,
        name: "Kulfi Falooda",
        description: "Traditional ice cream with vermicelli, rose syrup, and nuts",
        price: 165,
        image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=300&h=200&fit=crop&crop=center"
      },
      {
        id: 22,
        name: "Chocolate Brownie",
        description: "Warm fudgy brownie served with vanilla ice cream",
        price: 185,
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&h=200&fit=crop&crop=center"
      },
      {
        id: 23,
        name: "Tiramisu",
        description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone",
        price: 225,
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=300&h=200&fit=crop&crop=center"
      },
      {
        id: 24,
        name: "Rabri",
        description: "Rich condensed milk dessert garnished with pistachios and almonds",
        price: 135,
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300&h=200&fit=crop&crop=center"
      },
      {
        id: 25,
        name: "Cheesecake",
        description: "Creamy New York style cheesecake with berry compote",
        price: 245,
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=300&h=200&fit=crop&crop=center"
      },
      {
        id: 26,
        name: "Kheer",
        description: "Creamy rice pudding with cardamom, saffron, and mixed nuts",
        price: 115,
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300&h=200&fit=crop&crop=center"
      },
      {
        id: 27,
        name: "Ice Cream Sundae",
        description: "Three scoops with hot chocolate sauce, nuts, and cherry",
        price: 195,
        image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=300&h=200&fit=crop&crop=center"
      }
    ]
  };

  const categories = ['Veg', 'Non-Veg', 'Desserts'];

  const getIcon = (category) => {
    if (category === 'Veg' || category === 'Desserts') {
      return <Leaf className="w-4 h-4 text-green-600" />;
    }
    return <Drumstick className="w-4 h-4 text-red-600" />;
  };

  const addToCart = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(itemId);
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex justify-between items-center">
            <div className="text-center flex-1">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">Delicious Menu</h1>
              <p className="text-gray-600 text-lg">Authentic flavors crafted with love</p>
            </div>
            
            {/* Cart Button */}
            <div className="relative">
              <button
                onClick={() => setIsCartOpen(true)}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-3 rounded-full shadow-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 hover:scale-105"
              >
                <ShoppingCart className="w-6 h-6" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                    {getTotalItems()}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full p-2 shadow-lg inline-flex">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md transform scale-105'
                    : 'text-gray-600 hover:text-orange-500 hover:bg-orange-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {menuData[activeCategory].map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden group flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative overflow-hidden flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md">
                  {getIcon(activeCategory)}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors flex-grow mr-4">
                    {item.name}
                  </h3>
                  <span className="text-2xl font-bold text-green-600 flex-shrink-0">
                    ₹{item.price}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {item.description}
                </p>
                <button 
                  onClick={() => addToCart(item)}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3 rounded-xl hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg mt-auto"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsCartOpen(false)}></div>
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
            <div className="flex flex-col h-full">
              {/* Cart Header */}
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">Your Cart</h2>
                  <button onClick={() => setIsCartOpen(false)} className="p-1 hover:bg-white hover:bg-opacity-20 rounded">
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <p className="text-orange-100">{getTotalItems()} items</p>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-4">
                {cart.length === 0 ? (
                  <div className="text-center text-gray-500 mt-8">
                    <ShoppingCart className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                    <p>Your cart is empty</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div key={item.id} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-800">{item.name}</h3>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-green-600 font-semibold">₹{item.price}</span>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-orange-600"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="font-semibold">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-orange-600"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        <div className="text-right text-sm text-gray-600 mt-2">
                          Subtotal: ₹{item.price * item.quantity}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Cart Footer */}
              {cart.length > 0 && (
                <div className="border-t bg-white p-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xl font-bold">Total:</span>
                    <span className="text-xl font-bold text-green-600">₹{getTotalPrice()}</span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300">
                    Proceed to Checkout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="bg-gray-800 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Thank you for choosing us!</h3>
          <p className="text-gray-300">Experience the finest dining with our carefully curated menu</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;