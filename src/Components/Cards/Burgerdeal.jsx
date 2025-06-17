import React from 'react';

export const Burgerdeal = ({ name, price, img, description, onAddToCart, onToggleWishlist, isWished, customClass }) => {
  const cardStyle = {
    height: '600px',
    border: '1px solid #ddd',
    borderRadius: '15px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.07)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  };

  const imgStyle = {
    height: '250px',
    objectFit: 'cover',
    borderTopLeftRadius: '15px',
    borderTopRightRadius: '15px',
  };

  const cardBodyStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '1rem',
    flexGrow: 1,
  };

  const titleStyle = {
    fontWeight: 'bold',
    fontSize: '1.3rem',
    marginBottom: '10px',
  };

  const descStyle = {
    fontSize: '0.95rem',
    color: '#555',
  };

  const ratingStyle = {
    color: '#ffc107',
    fontSize: '1.2rem',
    margin: '8px 0',
  };

  const priceStyle = {
    fontWeight: 'bold',
    fontSize: '1.1rem',
    color: '#28a745',
  };

  const wishlistStyle = {
    cursor: 'pointer',
    fontSize: '1.6rem',
    color: isWished ? 'red' : '#aaa',
    transition: 'color 0.3s ease',
  };

  const actionsStyle = {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
  };

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <div className={`card ${customClass || 'animee-card'}`} style={cardStyle}>
        <img src={img} className="card-img-top" alt={name} style={imgStyle} />

        <div className="card-body" style={cardBodyStyle}>
          <h5 className="card-title" style={titleStyle}>{name}</h5>

          {description && <p className="card-text" style={descStyle}>{description}</p>}

          <div className="rating" style={ratingStyle}>★ ★ ★ ★ ★</div>

          <div className="d-flex justify-content-between align-items-center mt-auto">
            <span style={priceStyle}>Rs. {price}</span>

            <div className="actions" style={actionsStyle}>
              <span
                onClick={onToggleWishlist}
                style={wishlistStyle}
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
  );
};
