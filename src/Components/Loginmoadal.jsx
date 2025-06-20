import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const Loginmoadal = ({ setUserEmail }) => {
  const [option, setOption] = useState('');
  const [deliveryArea, setDeliveryArea] = useState('');
  const [email, setEmail] = useState('');
  const [showErrors, setShowErrors] = useState(false);
  const [showSessionAlert, setShowSessionAlert] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const modalElement = document.getElementById('loginModal');
    const modal = new window.bootstrap.Modal(modalElement, {
      backdrop: 'static',
      keyboard: false
    });
    modal.show();

    const dialog = document.querySelector('.modal-dialog');
    const handleOutsideClick = (e) => {
      if (dialog && !dialog.contains(e.target)) {
        setShowErrors(true);
        dialog.classList.add('shake');
        setTimeout(() => dialog.classList.remove('shake'), 500);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.body.classList.remove('modal-open');
      document.querySelector('.modal-backdrop')?.remove();
    };
  }, []);

  const handleContinue = () => {
    setShowErrors(true);

    if (!email || !option || (option === 'Delivery' && !deliveryArea)) return;

    localStorage.setItem('userEmail', email);
    localStorage.setItem('orderType', option);
    localStorage.setItem('deliveryArea', deliveryArea || 'N/A');
    setUserEmail(email);

    const savedCart = JSON.parse(localStorage.getItem(`cart_${email}`)) || [];
    const savedWishlist = JSON.parse(localStorage.getItem(`wishlist_${email}`)) || [];

    if (savedCart.length > 0 || savedWishlist.length > 0) {
      setShowSessionAlert(true);
      setTimeout(() => {
        setShowSessionAlert(false);
        closeModalAndNavigate();
      }, 2000);
    } else {
      closeModalAndNavigate();
    }
  };

  const closeModalAndNavigate = () => {
    const modalEl = document.getElementById('loginModal');
    const modalInstance = window.bootstrap.Modal.getInstance(modalEl);
    modalInstance?.hide();
    setTimeout(() => {
      document.body.classList.remove('modal-open');
      document.querySelector('.modal-backdrop')?.remove();
      navigate('/home');
    }, 350);
  };

  return (
    <>
      {/* Session Toast */}
      {showSessionAlert && (
        <div style={styles.sessionAlert}>🔔 You have saved items from your last session.</div>
      )}

      {/* Login Modal */}
      <div className="modal fade" id="loginModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-3">
            <div className="modal-header border-0">
              <h5 className="modal-title">Welcome to Luxurious Spire 🍽</h5>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label fw-bold">Email address</label>
                <input
                  type="email"
                  className={`form-control ${showErrors && !email ? 'is-invalid' : ''}`}
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {showErrors && !email && <div className="text-danger mt-1">Please enter your email.</div>}
              </div>

              <div className="d-flex justify-content-center gap-3 mb-3">
                <button
                  className={`btn rounded-pill px-4 ${option === 'Delivery' ? 'btn-danger' : 'btn-outline-danger'}`}
                  onClick={() => setOption('Delivery')}
                >
                  Delivery
                </button>
                <button
                  className={`btn rounded-pill px-4 ${option === 'Pickup' ? 'btn-danger' : 'btn-outline-danger'}`}
                  onClick={() => setOption('Pickup')}
                >
                  Pickup
                </button>
              </div>
              {showErrors && !option && <div className="text-danger text-center mb-2">Please select Delivery or Pickup.</div>}

              {option === 'Delivery' && (
                <>
                  <div className="mb-3">
                    <label className="form-label fw-bold">Select Delivery Area</label>
                    <select
                      className={`form-select ${showErrors && !deliveryArea ? 'is-invalid' : ''}`}
                      value={deliveryArea}
                      onChange={(e) => setDeliveryArea(e.target.value)}
                    >
                      <option value="">Choose area</option>
                      <option value="Gulshan-e-Iqbal">Gulshan-e-Iqbal</option>
                      <option value="DHA">DHA</option>
                      <option value="North Nazimabad">North Nazimabad</option>
                      <option value="Clifton">Clifton</option>
                    </select>
                    {showErrors && !deliveryArea && (
                      <div className="text-danger mt-1">Please select a delivery area.</div>
                    )}
                  </div>
                  <p className="text-danger mt-2 mb-0">🚚 Delivery only available in Karachi.</p>
                </>
              )}

              {option === 'Pickup' && (
                <div className="alert alert-info mt-3">
                  📍 Pickup Location: Luxurious Spire Hotel, Main Shahrah-e-Faisal, Karachi
                </div>
              )}

              <div className="d-grid mt-4">
                <button className="btn btn-dark rounded-pill" onClick={handleContinue}>
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shake CSS + Fade Animation */}
      <style>
        {`
          .shake { animation: shake 0.5s; }
          @keyframes shake {
            0% { transform: translateX(0); }
            25% { transform: translateX(-8px); }
            50% { transform: translateX(8px); }
            75% { transform: translateX(-8px); }
            100% { transform: translateX(0); }
          }
          @keyframes fadeInOut {
            0% { opacity: 0; transform: translateY(-20px); }
            10% { opacity: 1; transform: translateY(0); }
            90% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(-20px); }
          }
        `}
      </style>
    </>
  );
};

const styles = {
  sessionAlert: {
    position: 'fixed',
    top: '20px',
    right: '20px',
    zIndex: 9999,
    backgroundColor: '#ffe0e0',
    color: '#a10000',
    padding: '12px 20px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    fontWeight: 'bold',
    animation: 'fadeInOut 3s ease-in-out',
  }
};
