import React, { useState } from 'react';
import {
  AnimeeProducts,
  appetizerProducts,
  bbqProducts,
  burgerdealProducts,
  biryaniProducts,
  burgerProducts,
  DessertsProducts,
  drinkProducts,
  Products,
  PizzaProducts,
  PopularProducts,
  rollProducts,
  sandwitchesProducts
} from '/Components/Search/AllProducts';

export const Alldishes = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const categories = [
    { title: '🔥 Popular Items', data: PopularProducts },
    { title: '🍱 Animee Deals', data: AnimeeProducts },
    { title: '🍔 Burgers', data: burgerProducts },
    { title: '🥩 BBQ Items', data: bbqProducts },
    { title: '🍛 Biryani', data: biryaniProducts },
    { title: '🍟 Appetizers', data: appetizerProducts },
    { title: '🌯 Rolls', data: rollProducts },
    { title: '🥪 Sandwiches', data: sandwitchesProducts },
    { title: '🍕 Pizza', data: PizzaProducts },
    { title: '🍽️ Combos', data: burgerdealProducts },
    { title: '🍧 Desserts', data: DessertsProducts },
    { title: '🥤 Drinks', data: drinkProducts },
    { title: '🥡 Main Products', data: Products }
  ];

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  const filterProducts = (products) =>
    products.filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const filteredCategories = categories
    .map((category) => ({
      ...category,
      data: filterProducts(category.data)
    }))
    .filter((category) => category.data.length > 0);

  return (
    <div className="container mt-5">
      {/* Search Bar */}
      <div className="d-flex align-items-center justify-content-end mb-4">
        {showSearch ? (
          <input
            type="text"
            className="form-control rounded-pill px-4"
            placeholder="Search for dishes..."
            value={searchQuery}
            onChange={handleSearchChange}
            onBlur={() => {
              if (searchQuery === '') setShowSearch(false);
            }}
            style={{ maxWidth: '100%', width: '250px' }}
            autoFocus
          />
        ) : (
          <button
            onClick={() => setShowSearch(true)}
            className="btn btn-danger text-white rounded-circle"
            style={{ fontSize: '20px', padding: '8px 14px' }}
          >
            🔍
          </button>
        )}
      </div>

      {/* Render Filtered Categories */}
      {filteredCategories.length > 0 ? (
        filteredCategories.map((category, index) => (
          <div key={index} className="mb-5">
            <h3 className="mb-3">{category.title}</h3>
            <div className="row">
              {category.data.map((item, idx) => (
                <div className="col-md-4 col-sm-6 mb-4" key={idx}>
                  <div className="card h-100 shadow-sm">
                    <img
                      src={item.img}
                      className="card-img-top"
                      alt={item.name}
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">{item.description}</p>
                      {item.badge && (
                        <span className="badge bg-warning text-dark mb-2">{item.badge}</span>
                      )}
                      <p className="fw-bold mt-auto">Rs {item.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-danger fs-5">
          No dishes found for "{searchQuery}"
        </p>
      )}
    </div>
  );
};
