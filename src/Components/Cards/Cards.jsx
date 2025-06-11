import React from 'react';

export const Cards = ({ name, price, img, onAddToCart }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <div className="card h-100">
        {/* Product Image */}
        <img
          src={img}
          className="card-img-top"
          alt={name}
          style={{ height: '200px', objectFit: 'cover' }}
        />

        {/* Card Body */}
        <div className="card-body d-flex flex-column justify-content-between">
          {/* Title */}
          <h5 className="card-title text-center">{name}</h5>

          {/* Static Star Feedback */}
          <div className="text-center mb-2" style={{ color: '#ffc107' }}>
            ★ ★ ★ ★ ★
          </div>

          {/* Price + Button Row */}
          <div className="d-flex justify-content-between align-items-center mt-auto">
            <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
              Rs. {price}
            </span>
            <button className="btn btn-danger" onClick={onAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
