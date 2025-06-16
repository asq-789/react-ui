import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const Loginmoadal = () => {
  const [option, setOption] = useState('');
  const [deliveryArea, setDeliveryArea] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const modal = new window.bootstrap.Modal(document.getElementById('loginModal'));
    modal.show();

    // Clean up modal when unmounted
    return () => {
      modal.hide();
      document.body.classList.remove('modal-open');
      document.querySelector('.modal-backdrop')?.remove();
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleOptionChange = (selected) => setOption(selected);

  const handleAreaChange = (e) => setDeliveryArea(e.target.value);

const handleContinue = () => {
  if (!option) {
    alert('Please select Delivery or Pickup.');
    return;
  }

  if (option === 'Delivery' && !deliveryArea) {
    alert('Please select a delivery area.');
    return;
  }

  localStorage.setItem('orderType', option);
  localStorage.setItem('deliveryArea', deliveryArea || 'N/A');

  // Hide modal
  const modalEl = document.getElementById('loginModal');
  const modalInstance = window.bootstrap.Modal.getInstance(modalEl);
  modalInstance?.hide();

  // ✅ Force cleanup styles and backdrops
  setTimeout(() => {
    document.body.classList.remove('modal-open');
    document.body.style.overflow = 'auto';
    document.querySelector('.modal-backdrop')?.remove();
  }, 300); // Allow Bootstrap animation to finish

  // ✅ Navigate after short delay to let cleanup happen first
  setTimeout(() => {
    navigate('/home');
  }, 350);
};

  return (
    <div
      className="modal fade"
      id="loginModal"
      tabIndex="-1"
      aria-labelledby="loginModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-3">
          <div className="modal-header border-0">
            <h5 className="modal-title" id="loginModalLabel">Welcome to Luxurious Spire 🍽</h5>
          </div>
          <div className="modal-body">
            {/* Email Input */}
            <div className="mb-3">
              <label className="form-label fw-bold">Email address</label>
              <input type="email" className="form-control" placeholder="Enter your email" />
            </div>

            {/* Toggle Buttons */}
            <div className="d-flex justify-content-center gap-3 mb-3">
              <button
                className={`btn rounded-pill px-4 ${option === 'Delivery' ? 'btn-danger' : 'btn-outline-danger'}`}
                onClick={() => handleOptionChange('Delivery')}
              >
                Delivery
              </button>
              <button
                className={`btn rounded-pill px-4 ${option === 'Pickup' ? 'btn-danger' : 'btn-outline-danger'}`}
                onClick={() => handleOptionChange('Pickup')}
              >
                Pickup
              </button>
            </div>

            {/* Conditional UI */}
            {option === 'Delivery' && (
              <>
                <div className="mb-3">
                  <label className="form-label fw-bold">Select Delivery Area</label>
                  <select className="form-select" value={deliveryArea} onChange={handleAreaChange}>
                    <option value="">Choose area</option>
                    <option value="Gulshan-e-Iqbal">Gulshan-e-Iqbal</option>
                    <option value="DHA">DHA</option>
                    <option value="North Nazimabad">North Nazimabad</option>
                    <option value="Clifton">Clifton</option>
                  </select>
                </div>
                <p className="text-danger mt-2 mb-0">🚚 Note: Delivery available only in Karachi.</p>
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
  );
};
