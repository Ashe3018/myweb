import React, { useState,useEffect } from "react";

const menuData = {
  Burgers: [
   
     {
      id: 1,
      name: "Classic Burger",
      image: "/images/bur.png",
      ingredients: "Beef patty, cheese, lettuce, tomato",
      price: "$5.99",
    },
    {
      id: 2,
      name: "Cheese Burger",
      image: "/images/cus.png",
      ingredients: "Beef patty, double cheese, onion",
      price: "$6.49",
    },
  ],
  Pizza: [
    {
      id: 3,
      name: "Margherita Pizza",
      image: "/images/hom.png",
      ingredients: "Tomato, mozzarella, basil",
      price: "$7.99",
    },
    {
      id: 4,
      name: "Pepperoni Pizza",
      image: "/images/man.png",
      ingredients: "Pepperoni, cheese, tomato sauce",
      price: "$8.49",
    },
  ],
  Juice: [
    {
      id: 5,
      name: "Coke",
      image: "/images/sat.png",
      ingredients: "330ml Bottle",
      price: "$1.99",
    },
    {
      id: 6,
      name: "Orange Juice",
      image: "/images/qr.png",
      ingredients: "Freshly squeezed",
      price: "$2.49",
    },
  ],
   Drinks: [
    {
      id: 7,
      name: "Coke",
      image: "/images/sat.png",
      ingredients: "330ml Bottle",
      price: "$1.99",
    },
    {
      id: 8,
      name: "Orange Juice",
      image: "/images/qr.png",
      ingredients: "Freshly squeezed",
      price: "$2.49",
    },
  ],
   Coffee: [
    {
      id: 9,
      name: "Coke",
      image: "/images/sat.png",
      ingredients: "330ml Bottle",
      price: "$1.99",
    },
    {
      id: 10,
      name: "Orange Juice",
      image: "/images/qr.png",
      ingredients: "Freshly squeezed",
      price: "$2.49",
    },
  ],
   Tea: [
    {
      id: 11,
      name: "Coke",
      image: "/images/sat.png",
      ingredients: "330ml Bottle",
      price: "$1.99",
    },
    {
      id: 12,
      name: "Orange Juice",
      image: "/images/qr.png",
      ingredients: "Freshly squeezed",
      price: "$2.49",
    },
  ],
};

const categories = Object.keys(menuData);



const BurgerMenu = () => {
    const [selectedCategory, setSelectedCategory] = useState("Burgers");
     const [searchTerm, setSearchTerm] = useState(""); // Search state

  // State to track which item is showing the comment input
  const [commentOpen, setCommentOpen] = useState({});
  const [comments, setComments] = useState({}); // Stores comments per item

  //offline detection
const [isOnline, setIsOnline] = useState(navigator.onLine);

useEffect(() => {
  const online = () => setIsOnline(true);
  const offline = () => setIsOnline(false);

  window.addEventListener("online", online);
  window.addEventListener("offline", offline);

  return () => {
    window.removeEventListener("online", online);
    window.removeEventListener("offline", offline);
  };
}, []);

  // Handle submit
  const handleCommentSubmit = (id, value) => {
    setComments((prev) => ({
      ...prev,
      [id]: [...(prev[id] || []), value],
    }));
    setCommentOpen((prev) => ({ ...prev, [id]: false }));
  };
 // Filter items by search term
  const filteredItems = menuData[selectedCategory].filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="px-4 py-6">
      {/* Logo and Name in One Row */}
<div className="flex flex-col items-center mb-4">
  {/* Row with logo and name */}
  <div className="flex items-center space-x-3">
    <img
      src="/images/WOW.png" // your logo path
      alt="Burger House Logo"
      className="w-16 h-16 object-contain"
    />
    <h1 className="text-2xl font-bold">Burger House</h1>
  </div>
  
  {/* Branch / Address */}
  <p className="text-sm text-gray-600 mt-1 text-center">
    Branch: 123 Main Street, City
  </p>
</div>
      {/* Horizontal scrollable categories */}
      <div className="flex space-x-3 overflow-x-auto pb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`flex-shrink-0 px-4 py-2 rounded-full font-semibold transition
              ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

       {/* Search bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder={`Search ${selectedCategory}...`}
          className="w-full px-3 py-2 border rounded-md text-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Menu items */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {menuData[selectedCategory].map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md p-3 text-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-28 object-cover rounded-lg mb-2"
            />
            <h3 className="font-semibold text-sm">{item.name}</h3>
            <p className="text-xs text-gray-500 mb-1">{item.ingredients}</p>
            <p className="font-bold text-red-600 mb-2">{item.price}</p>

            {/* Leave a Comment Button */}
       {commentOpen[item.id] ?       "":<button
              onClick={() =>
                setCommentOpen((prev) => ({
                  ...prev,
                  [item.id]: !prev[item.id],
                }))
              }
              className="text-sm bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md transition"
            >
            "Leave a Comment"
            </button>}

            {commentOpen[item.id] && (
  <div className="mt-2">
    <input
      type="text"
      id={`comment-${item.id}`}
      placeholder="Write your comment..."
      className="w-full px-2 py-1 border rounded-md text-sm mb-2"
    />
    <div className="flex justify-end space-x-2">
      {/* Cancel Button */}
      <button
        onClick={() =>
          setCommentOpen((prev) => ({ ...prev, [item.id]: false }))
        }
        className="text-sm bg-gray-400 hover:bg-gray-500 text-white px-3 py-1 rounded-md transition"
      >
        Cancel
      </button>

      {/* Submit Button */}
      <button
        onClick={() => {
          const input = document.querySelector(`#comment-${item.id}`);
          if (input && input.value.trim()) {
            handleCommentSubmit(item.id, input.value);
            input.value = "";
          }
        }}
        className="text-sm bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md transition"
      >
        Submit
      </button>
    </div>
  </div>
)}

            
          </div>
        ))}
      </div>
    </div>
  );
};

export default BurgerMenu;