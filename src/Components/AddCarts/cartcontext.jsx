import React from 'react';

export const CardsCount = ({ cartItems }) => {
  return (
    <div className="container mt-3">
      <h3>🛒 Cart: {cartItems.length} item(s)</h3>
      {cartItems.map((item, index) => (
        <p key={index}>✔ {item}</p>
      ))}
    </div>
  );
};
