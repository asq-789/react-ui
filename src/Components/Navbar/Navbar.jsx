import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';

export const Navbar = ({ cartItems, setCartItems }) => {
  const [showModal, setShowModal] = useState(false);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [countdown, setCountdown] = useState(15);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [deliveryErrors, setDeliveryErrors] = useState({});
  const [showWishlistModal, setShowWishlistModal] = useState(false);

  const [deliveryInfo, setDeliveryInfo] = useState({
    name: '',
    address: '',
    phone: '',
    aphone: '',
    email: '',
    area: '',
  });

  const areaCharges = {
    'Select Area': 0,
    'DHA': 150,
    'Gulshan': 120,
    'Nazimabad': 100,
    'Malir': 130,
  };

  const deliveryCharge = areaCharges[deliveryInfo.area] || 0;
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  ) + deliveryCharge;

  const handleCartClick = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  const handleRemoveItem = (indexToRemove) => {
    const updatedItems = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updatedItems);
  };

  const handleAddMoreItems = () => {
    setShowModal(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePlaceOrder = () => {
    setShowModal(false);
    setShowOrderModal(true);
  };

  const validateDeliveryInfo = () => {
    const errors = {};
    if (!deliveryInfo.name.trim()) errors.name = 'Name is required';
    if (!deliveryInfo.address.trim()) errors.address = 'Address is required';
    if (!deliveryInfo.phone.trim()) errors.phone = 'Phone number is required';
    if (!deliveryInfo.area || deliveryInfo.area === 'Select Area') errors.area = 'Please select a delivery area';
    if (!deliveryInfo.email.trim() || !/\S+@\S+\.\S+/.test(deliveryInfo.email)) {
      errors.email = 'Valid email is required';
    }
    return errors;
  };

  const handleConfirmOrder = () => {
    const errors = validateDeliveryInfo();
    setDeliveryErrors(errors);

    if (Object.keys(errors).length > 0) return;

    setShowOrderModal(false);
    setShowConfirmation(true);
    setOrderConfirmed(true);
    setCartItems([]);

    let timeLeft = 15 * 60;
    const interval = setInterval(() => {
      timeLeft--;
      setCountdown(Math.ceil(timeLeft / 60));
      if (timeLeft <= 0) {
        clearInterval(interval);
        setShowConfirmation(false);
        setOrderConfirmed(false);
      }
    }, 1000);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'red', padding: '10px 0', width: '100vw', overflowX: 'hidden' }}>
        <div className="d-flex align-items-center gap-4">
          {/* Logo */}
          <Link to="/" className="navbar-brand d-flex align-items-center" style={{ color: 'white', fontWeight: 'bold', fontSize: '24px', textDecoration: 'none' }}>
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/hamburger.png"
              alt="Food Logo"
              style={{ width: '30px', height: '30px', marginRight: '10px' }}
            />
            FoodieSpot
          </Link>

          {/* Home and About Us */}
          <ul className="d-flex list-unstyled mb-0" style={{ gap: '20px' }}>
            {[
              { name: 'Home', path: 'home' },
              { name: 'About Us', path: '/about' },
              { name: 'Restaurant', path: '/restaurant' }

            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '18px',
                    fontWeight: '500',
                    padding: '5px 10px'
                  }}
                  onMouseOver={(e) => (e.target.style.color = '#ffd700')}
                  onMouseOut={(e) => (e.target.style.color = 'white')}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Search / Cart / Wishlist */}
        <div className="d-flex align-items-center gap-3 ms-auto">
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
              className="btn text-white"
              style={{ fontSize: '20px' }}
            >
              🔍
            </button>
          )}

          <button
            className="btn position-relative"
            onClick={handleCartClick}
            style={{ backgroundColor: 'transparent', border: 'none' }}
          >
            <img src="https://img.icons8.com/ios-filled/24/ffffff/shopping-cart.png" alt="Cart" />
            {cartItems.length > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark" style={{ fontSize: '12px' }}>
                {cartItems.length}
              </span>
            )}
          </button>

          <button
            className="btn text-white"
            style={{ fontSize: '20px', backgroundColor: 'transparent', border: 'none' }}
            onClick={() => setShowWishlistModal(true)}
          >
            ❤️
          </button>
        </div>
      </nav>

      {/* Other Components (Modals) */}
      {/* Wishlist Modal */}
      {showWishlistModal && (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-lg" style={{ maxWidth: '100%', margin: 'auto' }}>
            <div className="modal-content" style={{ overflowX: 'hidden' }}>
              <div className="modal-header">
                <h5 className="modal-title">💖 Wishlist</h5>
                <button type="button" className="btn-close" onClick={() => setShowWishlistModal(false)}></button>
              </div>
              <div className="modal-body">
                <p>Your wishlist is empty.</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowWishlistModal(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Cart Modal */}
      {showModal && (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">🛒 Your Cart</h5>
                <button type="button" className="btn-close" onClick={handleClose}></button>
              </div>
              <div className="modal-body">
                {cartItems.length === 0 ? (
                  <p>No items in cart.</p>
                ) : (
                  <ul className="list-group">
                    {cartItems.map((item, index) => (
                      <li className="list-group-item d-flex align-items-center justify-content-between" key={index}>
                        <div className="d-flex align-items-center">
                          <img src={item.img || "/default.jpg"} alt={item.name} style={{ width: '60px', height: '60px', objectFit: 'cover', marginRight: '15px' }} />
                          <div>
                            <h6 className="mb-1">{item.name}</h6>
                            <div className="d-flex align-items-center mb-1">
                              <button className="btn btn-sm btn-outline-secondary me-2" onClick={() => {
                                const updated = [...cartItems];
                                if (!updated[index].quantity) updated[index].quantity = 1;
                                if (updated[index].quantity > 1) {
                                  updated[index].quantity -= 1;
                                }
                                setCartItems(updated);
                              }}>−</button>
                              <span>{item.quantity || 1}</span>
                              <button className="btn btn-sm btn-outline-secondary ms-2" onClick={() => {
                                const updated = [...cartItems];
                                updated[index].quantity = (updated[index].quantity || 1) + 1;
                                setCartItems(updated);
                              }}>+</button>
                            </div>
                            <small className="text-muted">Price: Rs. {item.price * (item.quantity || 1)}</small>
                          </div>
                        </div>
                        <button className="btn btn-sm btn-danger" onClick={() => handleRemoveItem(index)}>
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="modal-footer flex-column flex-md-row justify-content-between align-items-center">
                <h5 className="mb-2 mb-md-0">Total: Rs. {totalAmount}</h5>
                <div>
                  <button className="btn btn-success me-2" onClick={handlePlaceOrder}>Place Order</button>
                  <button className="btn me-2" onClick={handleAddMoreItems} style={{ backgroundColor: '#fdd835', color: '#000', border: 'none' }}>Add More Items</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delivery Modal */}
    {/* Delivery Modal */}
{showOrderModal && (
  <div
    className="modal fade show"
    style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
  >
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header d-flex justify-content-between align-items-center">
          <h5 className="modal-title">📦 Delivery Details</h5>
          <button
            type="button"
            className="btn"
            onClick={() => setShowOrderModal(false)}
            style={{
              fontSize: '1.2rem',
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              lineHeight: 1,
            }}
            aria-label="Close"
          >
            ❌
          </button>
        </div>

        <div className="modal-body">
          {/* Input Fields */}
          {[
            { name: 'name', label: 'Name' },
            { name: 'address', label: 'Address' },
            { name: 'phone', label: 'Phone' },
            { name: 'aphone', label: 'Alternate phone' },
            { name: 'email', label: 'Email' },
          ].map((field, i) => (
            <div className="mb-3" key={i}>
              <label className="form-label">{field.label}</label>
              <input
                type={field.name === 'email' ? 'email' : 'text'}
                className={`form-control ${deliveryErrors[field.name] ? 'is-invalid' : ''}`}
                value={deliveryInfo[field.name]}
                onChange={(e) =>
                  setDeliveryInfo({ ...deliveryInfo, [field.name]: e.target.value })
                }
              />
              {deliveryErrors[field.name] && (
                <div className="invalid-feedback">{deliveryErrors[field.name]}</div>
              )}
            </div>
          ))}

          {/* Area Selection */}
          <div className="mb-3">
            <label className="form-label">Delivery Area</label>
            <select
              className={`form-select ${deliveryErrors.area ? 'is-invalid' : ''}`}
              value={deliveryInfo.area}
              onChange={(e) =>
                setDeliveryInfo({ ...deliveryInfo, area: e.target.value })
              }
            >
              {Object.keys(areaCharges).map((area, idx) => (
                <option key={idx} value={area}>
                  {area}
                </option>
              ))}
            </select>
            {deliveryInfo.area !== 'Select Area' && (
              <small className="text-muted">
                Delivery Charges: Rs. {deliveryCharge}
              </small>
            )}
            {deliveryErrors.area && (
              <div className="invalid-feedback">{deliveryErrors.area}</div>
            )}
          </div>

          {/* Order Summary */}
          <h6 className="mt-4">🧾 Order Summary</h6>
          <ul className="list-group mb-3">
            {cartItems.map((item, i) => (
              <li className="list-group-item d-flex justify-content-between" key={i}>
                <span>
                  {item.name} × {item.quantity || 1}
                </span>
                <strong>Rs. {item.price * (item.quantity || 1)}</strong>
              </li>
            ))}
            <li className="list-group-item d-flex justify-content-between bg-light">
              <strong>Delivery</strong>
              <span>Rs. {deliveryCharge}</span>
            </li>
          </ul>
          <h5>Total: Rs. {totalAmount}</h5>
        </div>

        <div className="modal-footer">
          <button className="btn btn-success" onClick={handleConfirmOrder}>
            Confirm Place Order
          </button>
        </div>
      </div>
    </div>
  </div>
)}

      {/* Confirmation Toast */}
      {showConfirmation && (
        <div className="toast-container position-fixed bottom-0 end-0 p-3">
          <div className="toast show align-items-center text-white bg-success border-0">
            <div className="d-flex">
              <div className="toast-body">
                🎉 Your order is confirmed! It will be delivered in approximately <strong>{countdown} minutes</strong>.
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
