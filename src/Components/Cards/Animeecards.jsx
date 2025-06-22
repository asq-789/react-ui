import React from 'react';

export const Animeecards = ({ product, handleAddToCart, handleToggleWishlist, wishlistItems, customClass }) => {
  const isWished = wishlistItems.some(item => item.name === product.name);

  return (
    <>
     

      <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
        <div className={`card ${customClass || 'animee-card'}`}>
          <img src={product.img} className="card-img-top" alt={product.name} />

          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>

            <p className="card-text">{product.description}</p>

            <div className="rating">★ ★ ★ ★ ★</div>

            <div className="d-flex justify-content-between align-items-center mt-auto">
              <span className="price">Rs. {product.price}</span>

              <div className="d-flex align-items-center gap-2">
                <span
                  onClick={() => handleToggleWishlist(product)}
                  className="wishlist-icon"
                  style={{
                    color: isWished ? 'red' : '#aaa',
                  }}
                  title={isWished ? 'Remove from Wishlist' : 'Add to Wishlist'}
                >
                  {isWished ? '❤️' : '🤍'}
                </span>

                <button className="btn btn-danger" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
