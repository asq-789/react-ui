import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Restaurant = ({ userEmail }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    area: '',
    date: '',
    time: '',
    guests: '',
    tableType: '',
    occasion:'',
  });

  const [shake, setShake] = useState(false);
  const [showSummaryModal, setShowSummaryModal] = useState(false);
  const [availableSlots, setAvailableSlots] = useState([]);

  const diningOptions = ['Roof Top Garden Dining', 'Indoor Dining', 'Outdoor Dining'];
  const tableTypes = ['Standard', 'Couple', 'Family'];
const generateTimeSlots = () => {
  const times = [];

  for (let h = 13; h <= 23; h++) {
    times.push(convertTo12Hour(`${h.toString().padStart(2, '0')}:00`));
    times.push(convertTo12Hour(`${h.toString().padStart(2, '0')}:30`));
  }

  ['00:00', '00:30', '01:00'].forEach(t => times.push(convertTo12Hour(t)));
  return times;
};

const convertTo12Hour = (time24) => {
  const [hourStr, minutes] = time24.split(':');
  let hour = parseInt(hourStr);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12 || 12;
  return `${hour}:${minutes} ${ampm}`;
};
 

  const getUserReservations = () => {
    const key = `reservations_${formData.email.toLowerCase().trim()}`;
    return JSON.parse(localStorage.getItem(key)) || [];
  };

  const generateAvailableTimeSlots = () => {
    const allSlots = generateTimeSlots();
    if (!formData.date || !formData.email) return allSlots;
    const reserved = getUserReservations()
      .filter(r => r.date === formData.date)
      .map(r => r.time);
    return allSlots.filter(slot => !reserved.includes(slot));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isFormValid = () => {
    return Object.values(formData).every((val) => val.trim() !== '');
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  const selectedDate = new Date(formData.date);
  const selectedDay = selectedDate.getDay();

  if (!isFormValid()) {
    setShake(true);
    toast.error('Please fill all fields.');
    setTimeout(() => setShake(false), 500);
    return;
  }

  if (selectedDay === 0) {
    toast.error('❌ We are closed on Sundays.');
    return;
  }

  // ✅ Convert 12-hour format to 24-hour
  const [timePart, modifier] = formData.time.split(' ');
  let [hour, minutes] = timePart.split(':').map(Number);
  if (modifier === 'PM' && hour !== 12) hour += 12;
  if (modifier === 'AM' && hour === 12) hour = 0;

  // ✅ Check if time is within 1 PM (13) to 1 AM (01)
  if (!(hour >= 13 || hour === 0 || hour === 1)) {
    toast.error('⏰ Reservation allowed only from 1 PM to 1 AM.');
    return;
  }

  setShowSummaryModal(true);
};

  const confirmSaveReservation = () => {
    const key = `reservations_${formData.email.toLowerCase().trim()}`;
    const existing = JSON.parse(localStorage.getItem(key)) || [];
    const updated = [...existing, formData];
    localStorage.setItem(key, JSON.stringify(updated));

    toast.success('🎉 Reservation Confirmed!');
    setFormData({ name: '', email: '', phone: '', area: '', date: '', time: '', guests: '', tableType: '' });
    setShowSummaryModal(false);
  };

  const todayDate = new Date().toISOString().split('T')[0];
  const shakeClass = shake ? 'shake border border-danger' : '';
  const imageStyle = { width: '100%', height: '100%', objectFit: 'cover' };

  const cardContainerStyle = {
    height: '250px',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const cardHoverStyle = {
    transform: 'scale(1.03)',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
  };

  return (
    <div className="container py-5">
      {/* Hero */}
      <div className="text-center mb-5">
        <h1 className="display-4 text-danger fw-bold">🏛️ Welcome to Our Restaurant</h1>
        <p className="lead text-muted">Experience delicious food in a cozy and welcoming atmosphere.</p>
        <div style={{ height: '400px', maxWidth: '800px', margin: '20px auto', borderRadius: '12px', overflow: 'hidden' }}>
          <img src="/resc.png" alt="Restaurant Hero" style={imageStyle} />
        </div>
      </div>

      {/* Gallery */}
      <div className="mb-5">
        <h2 className="text-danger mb-4 text-center">📸 Restaurant Gallery</h2>
        <div className="row g-4">
          {["/dining.jpg", "/dining2.jpg", "/dining3.jpg", "/dining4.jpg", "/dining5.jpg", "/dining6.jpg"].map((src, i) => (
            <div className="col-md-4" key={i}>
              <div
                style={cardContainerStyle}
                onMouseOver={(e) => Object.assign(e.currentTarget.style, { ...cardContainerStyle, ...cardHoverStyle })}
                onMouseOut={(e) => Object.assign(e.currentTarget.style, cardContainerStyle)}
              >
                <img src={src} alt={`Gallery ${i}`} style={imageStyle} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel */}
      <div className="my-5">
        <h2 className="text-center text-danger mb-4">🍽️ A Peek Inside</h2>
        <div id="restaurantCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {["peek.png", "roof.jpg", "resc.png"].map((img, i) => (
              <div className={`carousel-item ${i === 0 ? 'active' : ''}`} key={i}>
                <div style={{ height: '500px', overflow: 'hidden', borderRadius: '12px' }}>
                  <img src={img} className="d-block w-100" alt={`Slide ${i}`} style={imageStyle} />
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#restaurantCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#restaurantCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>

  
{/* Reservation Form */}
{/* Reservation Form */}
<div style={{ backgroundColor: '#f8f9fa', padding: '2rem', borderRadius: '0.75rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', marginBottom: '3rem' }}>
  <h2 className="text-center text-danger mb-4">📅 Reserve a Table</h2>
  <form onSubmit={handleSubmit} className={shakeClass}>
    <div className="row g-3">
      {[
        { name: 'name', type: 'text', placeholder: 'Name', title: 'Enter your full name', col: 'col-md-6' },
        { name: 'email', type: 'email', placeholder: 'Email', title: 'Enter a valid email', col: 'col-md-6' },
        { name: 'phone', type: 'tel', placeholder: 'Phone', title: 'Enter your phone number', col: 'col-md-6' },
        { name: 'guests', type: 'number', placeholder: 'Guests', title: 'Total guests', col: 'col-md-2', min: 1 },
        { name: 'date', type: 'date', title: 'Pick a date', col: 'col-md-3', min: todayDate },
      ].map(({ name, type, placeholder, title, col, min }) => (
        <div className={col} key={name}>
          <input
            type={type}
            name={name}
            value={formData[name]}
            placeholder={placeholder}
            min={min}
            title={title}
            onChange={handleChange}
            onFocus={(e) => Object.assign(e.target.style, { border: '2px solid red', boxShadow: '0 0 10px rgba(255,0,0,0.5)' })}
            onBlur={(e) => Object.assign(e.target.style, { border: '1px solid #ccc', boxShadow: 'none' })}
            onMouseEnter={(e) => Object.assign(e.target.style, { border: '2px solid red', boxShadow: '0 0 6px rgba(255,0,0,0.4)' })}
            onMouseLeave={(e) => !e.target.matches(':focus') && Object.assign(e.target.style, { border: '1px solid #ccc', boxShadow: 'none' })}
            style={{
              width: '100%',
              height: '48px',
              padding: '10px',
              borderRadius: '6px',
              border: '1px solid #ccc',
              transition: 'all 0.3s ease'
            }}
          />
        </div>
      ))}

      {/* Time Select */}
      <div className="col-md-4">
        <select
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            height: '48px',
            padding: '10px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            transition: 'all 0.3s ease'
          }}
          onFocus={(e) => Object.assign(e.target.style, { border: '2px solid red', boxShadow: '0 0 10px rgba(255,0,0,0.5)' })}
          onBlur={(e) => Object.assign(e.target.style, { border: '1px solid #ccc', boxShadow: 'none' })}
        >
          <option value="">Select Time</option>
          {generateAvailableTimeSlots().map((slot, index) => (
            <option key={index} value={slot}>{slot}</option>
          ))}
        </select>
      </div>

      {/* Area Select */}
      <div className="col-md-3">
        <select
          name="area"
          value={formData.area}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            height: '48px',
            padding: '10px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            transition: 'all 0.3s ease'
          }}
          onFocus={(e) => Object.assign(e.target.style, { border: '2px solid red', boxShadow: '0 0 10px rgba(255,0,0,0.5)' })}
          onBlur={(e) => Object.assign(e.target.style, { border: '1px solid #ccc', boxShadow: 'none' })}
        >
          <option value="">Select Area</option>
          <option value="indoor">Indoor</option>
          <option value="rooftop">Rooftop</option>
          <option value="garden">Garden</option>
        </select>
      </div>

      {/* Table Type */}
      <div className="col-md-3">
        <select
          name="tableType"
          value={formData.tableType}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            height: '48px',
            padding: '10px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            transition: 'all 0.3s ease'
          }}
          onFocus={(e) => Object.assign(e.target.style, { border: '2px solid red', boxShadow: '0 0 10px rgba(255,0,0,0.5)' })}
          onBlur={(e) => Object.assign(e.target.style, { border: '1px solid #ccc', boxShadow: 'none' })}
        >
          <option value="">Select Table Type</option>
          <option value="indoor">Indoor</option>
          <option value="outdoor">Outdoor</option>
          <option value="private">Private Room</option>
        </select>
      </div>

      {/* Occasion Select */}
      <div className="col-md-6">
        <select
          name="occasion"
          value={formData.occasion || ''}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            height: '48px',
            padding: '10px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            transition: 'all 0.3s ease'
          }}
          onFocus={(e) => Object.assign(e.target.style, { border: '2px solid red', boxShadow: '0 0 10px rgba(255,0,0,0.5)' })}
          onBlur={(e) => Object.assign(e.target.style, { border: '1px solid #ccc', boxShadow: 'none' })}
        >
          <option value="">🎉 Select Occasion</option>
          <option value="Birthday"> Birthday Bash</option>
          <option value="Engagement">💍 Engagement Night</option>
          <option value="Graduation">🎓 Graduation Dinner</option>
          <option value="Farewell">👋 Farewell Gathering</option>
          <option value="Anniversary">💘 Anniversary Special</option>
          <option value="Corporate Dinner">🍽️ Corporate Dinner</option>
        </select>
      </div>
    </div>

    <div className="text-center mt-4">
      <button type="submit" className="btn btn-danger px-4 py-2">Confirm Reservation</button>
    </div>
  </form>
</div>

    {/* Summary Modal */}
{showSummaryModal && (
  <div
    className="modal d-block"
    style={{ background: 'rgba(0,0,0,0.6)' }}
    onClick={() => setShowSummaryModal(false)}
  >
    <div
      className="modal-dialog modal-dialog-centered"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="modal-content">
        <div className="modal-header bg-danger text-white">
          <h5 className="modal-title">📋 Confirm Reservation Summary</h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            onClick={() => setShowSummaryModal(false)}
          ></button>
        </div>
        <div className="modal-body">
          <p><strong>👤 Name:</strong> {formData.name}</p>
          <p><strong>📧 Email:</strong> {formData.email}</p>
          <p><strong>📱 Phone:</strong> {formData.phone}</p>
          <p><strong>👥 Guests:</strong> {formData.guests}</p>
          <p><strong>📅 Date:</strong> {formData.date}</p>
          <p><strong>⏰ Time:</strong> {formData.time}</p>
          <p><strong>📍 Area:</strong> {formData.area}</p>
          <p><strong>🪑 Table Type:</strong> {formData.tableType}</p>
          <p><strong>🎊 Occasion:</strong> {formData.occasion}</p>
        </div>
        <div className="modal-footer">
          <button
            className="btn btn-secondary"
            onClick={() => setShowSummaryModal(false)}
          >
            Cancel
          </button>
          <button
            className="btn btn-danger"
            onClick={confirmSaveReservation}
          >
            Confirm & Save
          </button>
        </div>
      </div>
    </div>
  </div>
)}

      {/* Contact Info & Map */}
      <div className="row mb-5">
        <div className="col-md-6">
          <h2 className="text-danger">📍 Find Us</h2>
          <p><strong>Address:</strong> 123 Food Street, Karachi<br /><strong>Phone:</strong> +92 300 1234567<br /><strong>Email:</strong> hello@yourrestaurant.com</p>
          <h5 className="text-dark">🕒 Opening Hours:</h5>
          <ul className="list-unstyled text-muted">
            <li>Mon–Fri: 12 PM – 11 PM</li>
            <li>Sat–Sun: 1 PM – 10 PM</li>
          </ul>
        </div>
        <div className="col-md-6">
          <div style={{ height: '300px', borderRadius: '12px', overflow: 'hidden' }}>
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.891234090477!2d67.06302997537196!3d24.86073494579047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e9e50b92e6d%3A0x909a40c8b5d124e2!2sKarachi!5e0!3m2!1sen!2s!4v1718576880000"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="text-center mb-5">
        <h2 className="text-danger mb-3">🚗 How to Reach Us</h2>
        <p className="text-muted">We’re located near the main market with plenty of parking available. Easy access by bus and ride-sharing services.</p>
      </div>

      <ToastContainer position="top-center" />
    </div>
  );
};
