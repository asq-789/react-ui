import React, { useState, useRef } from 'react';

export const Search = ({ onSearchSection }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [focused, setFocused] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const inputRef = useRef();

const categories = [
  //chowmin
  { title: 'Chowmin', id: 'popularitem' },
  { title: ' shrimp chowmin', id: 'popularitem' },
  { title: ' veg chowmin', id: 'popularitem' },
    { title: 'Mapu Tafu', id: 'popularitem' },
    { title: 'Veg fried rice', id: 'popularitem' },
    { title: 'Mix chowmin', id: 'popularitem' },
    { title: 'hakka noodles', id: 'popularitem' },


  { title: ' Animee Deals', id: 'animee' },
    { title: ' Animee Lovers Special', id: 'animee' },
  { title: ' Mighty Deal Bento', id: 'animee' },
  { title: ' Animee Combo Deal', id: 'animee' },

  { title: ' Burgers', id: 'burger' },
    { title: ' Classic Beef Burger', id: 'burger' },
  { title: '  Cheese Burst Burger', id: 'burger' },
  { title: '  Zinger Burger', id: 'burger' },
  { title: ' BBQ Beef Burger', id: 'burger' },
  { title: '  Double Decker Burger', id: 'burger' },
  { title: '  Spicy Jalapeño Burger', id: 'burger' },
  { title: '  Mushroom Swiss Burger', id: 'burger' },
  { title: '  Chicken Fajita Burger', id: 'burger' },
  { title: '  Veggie Delight Burger', id: 'burger' },

  { title: ' BBQ Items', id: 'bbq' },
  { title: ' BBQ Pulled Beef Sliders', id: 'bbq' },
  { title: ' Spicy BBQ Drumsticks', id: 'bbq' },
  { title: '  BBQ Lamb Chops', id: 'bbq' },
  { title: ' Honey BBQ Chicken', id: 'bbq' },
  { title: ' Smoked Beef Ribs', id: 'bbq' },
  { title: ' BBQ Chicken Wings', id: 'bbq' },

  { title: ' Biryani', id: 'biryani' }, 
   { title: ' Beef Biryani', id: 'biryani' },
  { title: ' Paneer Biryani (Veg)', id: 'biryani' },
  { title: '  Chicken Tikka Biryani', id: 'biryani' },
    { title: ' Mutton Biryani', id: 'biryani' },
  { title: ' Sindhi Biryani', id: 'biryani' },
  { title: ' Hyderabadi Biryani', id: 'biryani' },

  { title: ' Appetizers', id: 'appetizers' },
  { title: ' Dynamite Chicken Bites', id: 'appetizers' },
  { title: ' Chicken Tempura', id: 'appetizers' },
  { title: '  French Fries', id: 'appetizers' },
  { title: ' French Fries', id: 'appetizers' },
  { title: ' Cheese Balls', id: 'appetizers' },
  { title: '  Crispy Chicken Strips', id: 'appetizers' },

  { title: ' Rolls', id: 'rolls' },
    { title: ' Chicken Roll', id: 'rolls' },
  { title: '  Beef Bihari Roll', id: 'rolls' },
  { title: ' Zinger Roll', id: 'rolls' },
  { title: ' Chicken Malai Roll', id: 'rolls' },
  { title: '  Vegetable Roll', id: 'rolls' },
  { title: '  Cheese Chicken Roll', id: 'rolls' },

  { title: ' Sandwiches', id: 'sandwitch' },
  { title: '  Grilled Chicken Sandwich', id: 'sandwitch' },
  { title: '  Triple Cheese Burst Sandwich', id: 'sandwitch' },
  { title: ' Tuna Melt Sandwichches', id: 'sandwitch' },
  { title: ' BBQ Chicken Slaw Sandwich', id: 'sandwitch' },
  { title: ' Veggie Delight Sandwich', id: 'sandwitch' },
  { title: '  Spicy Egg & Jalapeño Sandwich', id: 'sandwitch' },

  { title: ' Pizza', id: 'pizza' },
    { title: ' Margherita', id: 'pizza' },
  { title: ' Pepperoni', id: 'pizza' },
  { title: '  BBQ Chicken', id: 'pizza' },
  { title: '  Four Cheese', id: 'pizza' },
  { title: '  Meat Lovers', id: 'pizza' },
  { title: '  Fajita Pizza', id: 'pizza' },
  { title: ' Tandoori Chicken', id: 'pizza' },
  { title: ' Hawaiian', id: 'pizza' },
  { title: ' Vegetarian', id: 'pizza' },

  { title: ' Desserts', id: 'dessert' },
  { title: 'Chocolate Lava Cakes', id: 'dessert' },
    { title: ' Mango Mousse', id: 'dessert' },
  { title: '  Strawberry Cheesecake', id: 'dessert' },
  { title: '  Gulab Jamun', id: 'dessert' },
  { title: ' Baklava', id: 'dessert' },
  { title: ' Tiramisu', id: 'dessert' },
  { title: ' Rasmalai', id: 'dessert' },
  { title: ' Icecreams', id: 'dessert' },
  { title: 'Brownie Sundae', id: 'dessert' },

  { title: ' Drinks', id: 'drinks' },
 { title: ' Beef Jalapeno Dynamite Burger', id: 'fastfood' },
  { title: ' 3 Beef Tender Burgers', id: 'fastfood' },
 { title: ' Burgers with Fries', id: 'fastfood' },
 { title: ' Dragon Chicken with Rice and Noodles', id: 'fastfood' },
 { title: ' Khawsa with Chicken Fried Rice', id: 'fastfood' },
 { title: ' Dragon Beef and Chicken', id: 'fastfood' },
 { title: 'FastFood', id: 'fastfood' },

  { title: '🍽️ Combos & Chinese', id: 'product' } // from `Products` array
];


  const filteredCategories = categories.filter((cat) =>
    cat.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClear = () => {
    setSearchTerm('');
    setHighlightedIndex(-1);
    inputRef.current.focus();
  };

  const handleSuggestionClick = (categoryId) => {
    setSearchTerm('');
    setFocused(false);
    onSearchSection(categoryId);
  };

  const handleKeyDown = (e) => {
    if (!filteredCategories.length) return;
    if (e.key === 'ArrowDown') {
      setHighlightedIndex((prev) =>
        prev < filteredCategories.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === 'ArrowUp') {
      setHighlightedIndex((prev) =>
        prev > 0 ? prev - 1 : filteredCategories.length - 1
      );
    } else if (e.key === 'Enter' && highlightedIndex >= 0) {
      handleSuggestionClick(filteredCategories[highlightedIndex].id);
    } else if (e.key === 'Escape') {
      setFocused(false);
      setSearchTerm('');
    }
  };

  return (
    <div className="search-container">
      <div className="search-input-wrapper">
        <input
          type="text"
          ref={inputRef}
          className="search-input"
          placeholder="Search section like Pizza, BBQ, etc."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setHighlightedIndex(-1);
          }}
          onFocus={() => setFocused(true)}
          onKeyDown={handleKeyDown}
        />
        {searchTerm && (
          <span className="clear-icon" onClick={handleClear}>
            ×
          </span>
        )}
      </div>

      {searchTerm && focused && (
        <div className="search-suggestions">
          {filteredCategories.length === 0 ? (
            <div className="no-suggestions">No matching sections.</div>
          ) : (
            filteredCategories.map((item, index) => (
              <div
                key={index}
                className={`suggestion-item ${highlightedIndex === index ? 'highlighted' : ''}`}
                onClick={() => handleSuggestionClick(item.id)}
              >
                {item.title}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};