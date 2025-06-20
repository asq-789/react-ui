import React from 'react';

export const Animeecards = ({ product, handleAddToCart, handleToggleWishlist, wishlistItems, customClass }) => {
  const isWished = wishlistItems.some(item => item.name === product.name);

  return (
    <>
      <style>
        {`
          .animee-card {
            height: 600px;
            display: flex;
            flex-direction: column;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease;
            border: 2px solid transparent;
            background-color: #fff;
          }

          .animee-card:hover {
            transform: translateY(-6px) scale(1.01);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
            border-color: red;
          }

          .animee-card .card-img-top {
            height: 400px;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            object-fit: cover;
          }

          .animee-card .card-body {
            padding: 16px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex: 1;
          }

          .animee-card .card-title {
            font-weight: bold;
            font-size: 1.1rem;
            margin-bottom: 10px;
            text-align: center;
          }

          .animee-card .card-text {
            font-size: 0.9rem;
            color: #6c757d;
            min-height: 40px;
            margin-bottom: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }

          .animee-card .rating {
            color: #ffc107;
            font-size: 1.2rem;
            text-align: center;
            margin-bottom: 12px;
          }

          .animee-card .price {
            font-weight: bold;
            font-size: 1.1rem;
          }

          .animee-card .wishlist-icon {
            cursor: pointer;
            font-size: 1.6rem;
            margin-right: 8px;
            transition: color 0.3s ease, transform 0.2s ease;
          }

          .animee-card .wishlist-icon:hover {
            transform: scale(1.2);
          }

          .animee-card .btn-danger {
            padding: 6px 12px;
            font-size: 0.9rem;
            border-radius: 6px;
            transition: background-color 0.3s ease, transform 0.2s ease;
          }

          .animee-card .btn-danger:hover {
            background-color: #c82333;
            transform: scale(1.05);
          }
        `}
      </style>

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
