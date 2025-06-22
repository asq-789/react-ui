import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { toast } from 'react-toastify';

export const Navbar = ({
  cartItems,
  setCartItems,
  wishlistItems,
  setWishlistItems,
  handleAddToCart,
  handleToggleWishlist,
  searchTerm,
  userEmail
}) => {
  const [showModal, setShowModal] = useState(false);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [countdown, setCountdown] = useState(15);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [deliveryErrors, setDeliveryErrors] = useState({});
  const [showWishlistModal, setShowWishlistModal] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [showSummaryModal, setShowSummaryModal] = useState(false);
  const [reservationCount, setReservationCount] = useState(0);
  const [showReservationModal, setShowReservationModal] = useState(false);
  const [reservedTables, setReservedTables] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const [editData, setEditData] = useState({
    name: '', email: '', phone: '', date: '', time: '', guests: '', area: '', occasion: ''
  });

  const [deliveryInfo, setDeliveryInfo] = useState({
    name: '', address: '', phone: '', aphone: '', email: '', city: '', area: ''
  });

  const cityAreas = {
    Karachi: ['Select Area', 'DHA', 'Gulshan', 'Nazimabad', 'Malir'],
    Lahore: ['Select Area', 'Model Town', 'Gulberg', 'Johar Town'],
    Islamabad: ['Select Area', 'F-6', 'G-9', 'I-8'],
    Multan: ['Select Area', 'Cantt', 'Shah Rukn-e-Alam', 'Boson Road']
  };

  const areaCharges = {
    'DHA': 150,
    'Gulshan': 120,
    'Nazimabad': 100,
    'Malir': 130,
    'Model Town': 110,
    'Gulberg': 140,
    'Johar Town': 100,
    'F-6': 130,
    'G-9': 110,
    'I-8': 120,
    'Cantt': 125,
    'Shah Rukn-e-Alam': 115,
    'Boson Road': 105
  };

  const deliveryCharge = areaCharges[deliveryInfo.area] || 0;

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  ) + deliveryCharge;

  useEffect(() => {
    if (userEmail) {
      const storedReservations = JSON.parse(localStorage.getItem(`reservations_${userEmail}`)) || [];
      setReservationCount(storedReservations.length);
    }
  }, [userEmail]);

  useEffect(() => {
    if (showReservationModal && userEmail) {
      try {
        const stored = JSON.parse(localStorage.getItem(`reservations_${userEmail}`));
        setReservedTables(Array.isArray(stored) ? stored : stored ? [stored] : []);
      } catch (err) {
        console.error('Failed to fetch reservation data:', err);
        setReservedTables([]);
      }
    }
  }, [showReservationModal, userEmail]);

  const handleCartClick = () => setShowModal(true);
  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const handlePlaceOrder = () => {
    setShowModal(false);
    setShowOrderModal(true);
  };
  const confirmDelete = (index) => setDeleteIndex(index);

  const handleDeleteReservation = (index) => {
    const updated = [...reservedTables];
    updated.splice(index, 1);
    setReservedTables(updated);
    localStorage.setItem(`reservations_${userEmail}`, JSON.stringify(updated));
    setDeleteIndex(null);

    toast.error("Reservation deleted", {
      style: {
        backgroundColor: '#fff0f0',
        color: '#a70000',
        borderLeft: '5px solid red',
        fontWeight: '500',
      },
      progressStyle: { background: 'red' },
    });

    setReservationCount(updated.length);
  };

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const startEdit = (index) => {
    setEditingIndex(index);
    setEditData(reservedTables[index]);
  };

  const saveEdit = () => {
    const updated = [...reservedTables];
    updated[editingIndex] = editData;
    localStorage.setItem(`reservations_${userEmail}`, JSON.stringify(updated));
    setReservedTables(updated);
    setEditingIndex(null);

    toast.success('✅ Reservation updated successfully!', {
      position: 'top-right',
      style: {
        backgroundColor: '#e6fff0',
        color: '#007a3d',
        borderLeft: '5px solid #00b894',
        fontWeight: '500',
      },
      progressStyle: { background: '#00b894' },
    });
  };

  const cancelEdit = () => setEditingIndex(null);

  const validateDeliveryInfo = () => {
    const errors = {};
    if (!deliveryInfo.name.trim()) errors.name = 'Name is required';
    if (!deliveryInfo.address.trim()) errors.address = 'Address is required';
    if (!deliveryInfo.phone.trim()) errors.phone = 'Phone number is required';
    if (!deliveryInfo.city) errors.city = 'City is required';
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
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'red', padding: '10px 0', width: '100vw', overflowX: 'hidden' }}>
        <div className="d-flex align-items-center gap-4">
          <Link to="/" className="navbar-brand d-flex align-items-center" style={{ color: 'white', fontWeight: 'bold', fontSize: '24px', textDecoration: 'none' }}>
            <img src="https://img.icons8.com/ios-filled/50/ffffff/hamburger.png" alt="Food Logo" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
            Luxurious Spire Spot
          </Link>

          <ul className="d-flex list-unstyled mb-0" style={{ gap: '20px' }}>
            {[{ name: 'Home', path: 'home' }, { name: 'About Us', path: '/about' }, { name: 'Dine & Reserve', path: '/restaurant' }, {name:'Events', path: 'events'}].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  style={{ color: 'white', textDecoration: 'none', fontSize: '18px', fontWeight: '500', padding: '5px 10px' }}
                  onMouseOver={(e) => (e.target.style.color = '#ffd700')}
                  onMouseOut={(e) => (e.target.style.color = 'white')}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="d-flex align-items-center gap-3 ms-auto">
         

          <button className="btn position-relative" onClick={handleCartClick} style={{ backgroundColor: 'transparent', border: 'none' }}>
            <img src="https://img.icons8.com/ios-filled/24/ffffff/shopping-cart.png" alt="Cart" />
            {cartItems.length > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark" style={{ fontSize: '12px' }}>
                {cartItems.length}
              </span>
            )}
          </button>

<button
  className="btn position-relative"
  style={{ backgroundColor: 'transparent', border: 'none' }}
  onClick={() => setShowWishlistModal(true)}
>
  ❤️
  {wishlistItems.length > 0 && (
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger text-white" style={{ fontSize: '12px' }}>
      {wishlistItems.length}
    </span>
  )}
</button>

        <button
          className="btn text-white position-relative"
          onClick={() => setShowReservationModal(true)}
          style={{ fontSize: '20px', backgroundColor: 'transparent', border: 'none' }}
          title="Dine & Reserve"
        >
          🍽️
          {reservationCount > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '12px' }}>
              {reservationCount}
            </span>
          )}
        </button>
        </div>
      </nav>
      {showModal && (
  <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">🛒 Your Cart</h5>
          <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
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
                          if (updated[index].quantity > 1) updated[index].quantity -= 1;
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
                  <button className="btn btn-sm btn-danger" onClick={() => {
                    const updated = [...cartItems];
                    updated.splice(index, 1);
                    setCartItems(updated);
                  }}>Remove</button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="modal-footer flex-column flex-md-row justify-content-between align-items-center">
          <h5 className="mb-2 mb-md-0">Total: Rs. {totalAmount}</h5>
          <div>
            <button className="btn btn-success me-2" onClick={handlePlaceOrder}>Place Order</button>
            <button className="btn me-2" onClick={() => setShowModal(false)} style={{ backgroundColor: '#fdd835', color: '#000', border: 'none' }}>Add More Items</button>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

{/* Delivery Modal */}
{showOrderModal && (
  <div
    className="modal fade show"
    style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
  >
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        {/* Modal Header */}
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

        {/* Modal Body */}
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
              <option value="Select Area" disabled>Select Area</option>
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

        {/* Modal Footer */}
        <div className="modal-footer">
          <button className="btn btn-success" onClick={handleConfirmOrder}>
            Confirm Place Order
          </button>
        </div>
      </div>
    </div>
  </div>
)}


{showReservationModal && (
  <div
    className="modal d-block"
    style={{ backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 1050 }}
    onClick={() => setShowReservationModal(false)}
  >
    <div
      className="modal-dialog modal-dialog-centered"
      onClick={(e) => e.stopPropagation()}
      style={{ width: '100%', maxWidth: '700px', margin: 'auto' }}
    >
      <div
        className="modal-content"
        style={{
          borderRadius: '20px',
          background: '#fff',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
        }}
      >
        {/* Header */}
        <div
          className="modal-header"
  style={{
    backgroundColor: '#D62713FF',
    color: '#fff',
    padding: '1rem 1.5rem',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
          }}
        >
          <h5 className="modal-title">🍽️ Your Reservations</h5>
          {/*  */}
        </div>

        {/* Body */}
        <div
          className="modal-body"
          style={{
            padding: '1.5rem',
            backgroundColor: '#fafafa',
          }}
        >
          {reservedTables.length === 0 ? (
            <p className="text-muted text-center mb-0">No reservations yet.</p>
          ) : (
            <div
              className="reservation-wrapper"
              style={{
                display: 'grid',
                gridTemplateColumns: reservedTables.length >= 3 ? '1fr 1fr' : '1fr',
                gap: '1rem',
              }}
            >
              {reservedTables.map((res, index) => (
                <div
                  key={index}
                  className="reservation-card"
                  style={{
                    backgroundColor: '#fff',
                    border: '1px solid #ddd',
                    borderRadius: '14px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    padding: '1rem',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                  }}
                >
                {editingIndex === index ? (
  <>
    {['name', 'email', 'phone', 'date', 'time', 'guests', 'area'].map((field) => (
      <input
        key={field}
        name={field}
        value={editData[field]}
        onChange={handleEditChange}
        className="form-control mb-2"
        placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
      />
    ))}

    <select
  name="occasion"
  value={editData.occasion}
  onChange={handleEditChange}
  className="form-control mb-2"
>
  <option value="">🎉 Select Occasion</option>
  <option value="Birthday">🎂 Birthday Bash</option>
  <option value="Anniversary">💖 Anniversary Special</option>
  <option value="Graduation Dinner">🎓 Graduation Dinner</option>
  <option value="Farewell Gathering">👋 Farewell Gathering</option>
  <option value="Corporate Dinner">🏢 Corporate Dinner</option>
</select>


    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
      <button className="btn btn-success btn-sm" onClick={saveEdit}>💾 Save</button>
      <button className="btn btn-outline-secondary btn-sm" onClick={cancelEdit}>Cancel</button>
    </div>
  </>
) : (
  <>
    <p><strong>Name:</strong> {res.name}</p>
    <p><strong>Email:</strong> {res.email}</p>
    <p><strong>Phone:</strong> {res.phone}</p>
    <p><strong>Date:</strong> {res.date}</p>
    <p><strong>Time:</strong> {res.time}</p>
    <p><strong>Guests:</strong> {res.guests}</p>
    <p><strong>Area:</strong> {res.area}</p>
    {res.occasion && <p><strong>Occasion:</strong> {res.occasion}</p>}

                      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
                        
                        <button className="btn btn-outline-danger btn-sm" onClick={() => confirmDelete(index)}>🗑️</button>
                        <button className="btn btn-outline-warning btn-sm" onClick={() => startEdit(index)}>✏️</button>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          className="modal-footer d-flex justify-content-between align-items-center"
          style={{
            borderTop: '1px solid #eee',
            padding: '1rem',
            backgroundColor: '#f9f9f9',
            borderBottomLeftRadius: '20px',
            borderBottomRightRadius: '20px',
          }}
        >
          <button className="btn btn-outline-secondary" onClick={() => setShowReservationModal(false)}>Close</button>
          {reservedTables.length >= 3 && (
            <button
              className="btn btn-danger"
              onClick={() => setShowSummaryModal(true)}
            >
              📋 View Summary
            </button>
          )}
        </div>
      </div>
    </div>
  </div>
)}

{/* SUMMARY MODAL */}
{showSummaryModal && (
  <div
    className="modal d-block"
    style={{
      backgroundColor: 'rgba(0,0,0,0.6)',
      zIndex: 1060,
    }}
    onClick={() => setShowSummaryModal(false)}
  >
    <div
      className="modal-dialog modal-dialog-centered"
      onClick={(e) => e.stopPropagation()}
      style={{
        width: '100%',
        maxWidth: '600px',
        margin: 'auto',
      }}
    >
      <div
        className="modal-content"
        style={{
          borderRadius: '20px',
          backgroundColor: '#fff',
          padding: '1.5rem',
        }}
      >
        <h4 className="mb-3">📋 Reservation Summary</h4>
        <ul className="list-group mb-3">
          {reservedTables.map((res, index) => (
            <li key={index} className="list-group-item">
              <strong>{res.name}</strong> — {res.guests} guests at {res.time} on {res.date} in <em>{res.area}</em>
            </li>
          ))}
        </ul>
        <p><strong>Total Guests:</strong> {reservedTables.reduce((sum, r) => sum + parseInt(r.guests), 0)}</p>
        <p><strong>Areas Reserved:</strong> {[...new Set(reservedTables.map(r => r.area))].join(', ')}</p>
        <div className="text-end">
          <button className="btn btn-secondary" onClick={() => setShowSummaryModal(false)}>Close</button>
        </div>
      </div>
    </div>
  </div>
)}


{/* Delete Confirmation Modal */}
{deleteIndex !== null && (
  <div className="modal d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1060 }} onClick={() => setDeleteIndex(null)}>
    <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
      <div className="modal-content" style={{ borderRadius: '10px' }}>
        <div className="modal-header bg-danger text-white">
          <h5 className="modal-title">Confirm Delete</h5>
          <button className="btn-close" onClick={() => setDeleteIndex(null)}></button>
        </div>
        <div className="modal-body text-center">
          <p>Are you sure you want to delete this reservation?</p>
          <button className="btn btn-danger me-2" onClick={() => handleDeleteReservation(deleteIndex)}>Yes, Delete</button>
          <button className="btn btn-secondary" onClick={() => setDeleteIndex(null)}>Cancel</button>
        </div>
      </div>
    </div>
  </div>
)}

  

 {showWishlistModal && (
  <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
    <div className="modal-dialog modal-lg" style={{ maxWidth: '100%', margin: 'auto' }}>
      <div className="modal-content" style={{ overflowX: 'hidden' }}>
        <div className="modal-header">
          <h5 className="modal-title">💖 Wishlist</h5>
          <button type="button" className="btn-close" onClick={() => setShowWishlistModal(false)}></button>
        </div>

        <div className="modal-body">
          {wishlistItems.length === 0 ? (
            <p>Your wishlist is empty.</p>
          ) : (
            <div className="row">
              {wishlistItems.map((item, index) => (
                <div className="col-md-4 mb-3" key={index}>
                  <div className="card h-100 shadow-sm">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="card-img-top"
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">{item.description}</p>
                      <p className="card-text"><strong>Price:</strong> ${item.price}</p>
                      <button className="btn btn-success me-2" onClick={() => handleAddToCart(item)}>Add to Cart 🛒</button>
                      <button className="btn btn-outline-danger" onClick={() => handleToggleWishlist(item)}>Remove 💔</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={() => setShowWishlistModal(false)}>Close</button>
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
