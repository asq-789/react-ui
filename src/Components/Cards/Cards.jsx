import React, { useState } from 'react';

export const Cards = (props) => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
    // You can also call a parent function via props.onAddToCart if passed
  };

  const cardStyle = {
    width: '100%',
    border: '1px solid #e0e0e0',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    marginBottom: '20px',
    backgroundColor: '#fff',
    overflow: 'hidden',
    position: 'relative',
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'contain',
  };

  const bodyStyle = {
    padding: '16px',
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '10px',
  };

  const textStyle = {
    fontSize: '0.95rem',
    color: '#555',
    marginBottom: '15px',
  };

  const buttonWrapperStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '10px',
    marginTop: '10px',
  };

  const buttonStyle = {
    flex: 1,
    backgroundColor: '#EE192BFF',
    color: '#fff',
    border: 'none',
    padding: '10px',
    borderRadius: '8px',
    cursor: 'pointer',
  };

  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div style={cardStyle}>
        <img src={props.img} style={imageStyle} alt="Product" />
        <div style={bodyStyle}>
          <h5 style={titleStyle}>{props.name}</h5>
          <p style={textStyle}>Some description here for the product.</p>
          <div style={buttonWrapperStyle}>
            <a style={buttonStyle}>Rs. {props.price}</a>
            <button
              onClick={handleAddToCart}
              style={{
                padding: '10px 20px',
                fontWeight: 'bold',
                cursor: 'pointer',
                borderRadius: '4px',
                border: '1px solid red',
                backgroundColor: 'red',
                color: 'white',
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>

     
        
      </div>
    </div>
  );
};
