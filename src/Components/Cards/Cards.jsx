import React from 'react';

export const Cards = ({
  name,
  price,
  img,
  description,
  onAddToCart,
  onToggleWishlist,
  isWished,
  customClass,
  badge
}) => {
  return (
    <>
      <style>
        {`
          .glow-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease;
            border-radius: 16px;
            border: 2px solid #ddd;
            background-color: #fff;
          }

          .glow-card:hover {
            transform: scale(1.03);
            border-color: #e8380d;
            box-shadow: 0 0 15px rgba(232, 56, 13, 0.6);
          }

          .glow-card .card-img-top {
            height: 200px;
            object-fit: cover;
            border-top-left-radius: 16px;
            border-top-right-radius: 16px;
          }
        `}
      </style>

      <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
        <div className={`card glow-card shadow-sm h-100 ${customClass || ''}`} style={{ height: '440px' }}>
          <img
            src={img}
            className="card-img-top"
            alt={name}
          />

          <div className="card-body d-flex flex-column justify-content-between p-3">
            {badge && (
              <div className="mb-2">
                <span className="badge bg-danger text-white rounded-pill">{badge}</span>
              </div>
            )}

            <h5 className="card-title text-center mb-2">{name}</h5>

            {description && (
              <p
                className="card-text small text-muted mb-2"
                style={{
                  maxHeight: '40px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical'
                }}
                title={description}
              >
                {description}
              </p>
            )}

            <div className="text-warning text-center mb-2" style={{ fontSize: '0.9rem' }}>
              ★ ★ ★ ★ ★
            </div>

            <div className="d-flex justify-content-between align-items-center mt-auto">
              <span className="fw-bold">Rs. {price}</span>

              <div className="d-flex align-items-center gap-2">
                <span
                  onClick={onToggleWishlist}
                  style={{
                    cursor: 'pointer',
                    fontSize: '1.4rem',
                    color: isWished ? 'red' : '#aaa'
                  }}
                  title="Add to Wishlist"
                >
                  {isWished ? '❤️' : '🤍'}
                </span>

                <button className="btn btn-danger btn-sm" onClick={onAddToCart}>
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
