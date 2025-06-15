import React from 'react'

export const Burgerdeal = ({ name, price, img, description, onAddToCart, onToggleWishlist, isWished, customClass }) => {
  return (
    <div> {/* Card layout */}
      <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
        <div className={`card ${customClass || 'animee-card'}`} style={{ height: '600px' }}>
          <img src={img} className="card-img-top" alt={name} />

          <div className="card-body">
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
      </div></div>
  )
}
