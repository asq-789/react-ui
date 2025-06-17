import React from 'react';

export const Cards = ({ name, price, img, description, onAddToCart, onToggleWishlist, isWished, customClass, badge }) => {
  return (
    <>
      {/* Internal CSS styles */}
      <style>
        {`
          .animee-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border-radius: 16px;
            overflow: hidden;
            background-color: #fff;
            border: 2px solid #ddd;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
          }

          .animee-card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
            border-color: #E8380DF3;
          }

          .animee-card .wishlist-icon {
            transition: transform 0.2s ease;
          }

          .animee-card .wishlist-icon:hover {
            transform: scale(1.2);
          }

          .animee-card .btn-danger {
            transition: background-color 0.3s ease, transform 0.2s ease;
          }

          .animee-card .btn-danger:hover {
            background-color: #c82333;
            transform: scale(1.05);
          }

          .animee-card .card-img-top {
            height: 400px;
            object-fit: cover;
            border-bottom: 1px solid #eee;
          }

          .animee-card .card-body {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 1rem;
          }

          .animee-card .card-title {
            text-align: center;
            font-weight: bold;
            margin-bottom: 0.5rem;
          }

          .animee-card .card-text {
            font-size: 0.9rem;
            color: #6c757d;
            margin-bottom: 0.75rem;
          }

          .animee-card .rating {
            text-align: center;
            color: #ffc107;
            margin-bottom: 0.75rem;
          }

          .animee-card .price-section {
            font-weight: bold;
          }

          .animee-card .actions {
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .animee-card .badge-top {
            display: inline-block;
            background-color: #e8380d;
            color: white;
            font-size: 0.8rem;
            font-weight: bold;
            padding: 4px 8px;
            border-radius: 12px;
            margin-bottom: 0.3rem;
            text-align: center;
          }
        `}
      </style>

      {/* Card layout */}
      <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
        <div className={`card ${customClass || 'animee-card'}`} style={{ height: '600px' }}>
          <img src={img} className="card-img-top" alt={name} />

          <div className="card-body">
            {/* Badge above title */}
            {badge && <div className="badge-top">{badge}</div>}

            <h5 className="card-title">{name}</h5>

            {description && <p className="card-text">{description}</p>}

            <div className="rating">★ ★ ★ ★ ★</div>

            <div className="d-flex justify-content-between align-items-center mt-auto">
              <span className="price-section">Rs. {price}</span>

              <div className="actions">
                <span
                  onClick={onToggleWishlist}
                  className="wishlist-icon"
                  style={{
                    cursor: 'pointer',
                    fontSize: '1.6rem',
                    color: isWished ? 'red' : '#aaa',
                  }}
                  title="Add to Wishlist"
                >
                  {isWished ? '❤️' : '🤍'}
                </span>

                <button className="btn btn-danger" onClick={onAddToCart}>
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
