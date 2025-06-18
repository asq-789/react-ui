import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Restaurant = ({ userEmail, onReservationSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '',
    area: '',
    date: '',
    time: '',
    tableType: ''
  });

  const [shake, setShake] = useState(false);

  const areas = ['Indoor', 'Outdoor', 'Rooftop'];
  const tableTypes = ['Standard', 'Couple', 'Family'];

  const generateTimeSlots = () => {
    const times = [];
    for (let h = 13; h <= 23; h++) {
      times.push(`${h.toString().padStart(2, '0')}:00`);
      times.push(`${h.toString().padStart(2, '0')}:30`);
    }
    ['00:00', '00:30', '01:00'].forEach(t => times.push(t));
    return times;
  };

  const availableTimes = generateTimeSlots();

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const isSunday = (dateStr) => {
    const day = new Date(dateStr).getDay();
    return day === 0;
  };

  const isPastTime = (time, date) => {
    if (!time || !date) return false;
    const now = new Date();
    const selected = new Date(`${date}T${time}`);
    return selected < now;
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const isValid = () => {
    return Object.values(formData).every(val => val.trim() !== '');
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  if (!isValid()) {
    setShake(true);
    toast.error('Please fill all fields!');
    setTimeout(() => setShake(false), 500);
    return;
  }

  if (isSunday(formData.date)) {
    toast.error('❌ We are closed on Sundays.');
    return;
  }

  if (isPastTime(formData.time, formData.date)) {
    toast.error('⏰ Selected time is in the past.');
    return;
  }

  // ✅ reservation with all fields
  const reservation = {
    ...formData,
    id: Date.now()
  };

  // ✅ save to localStorage as array
  const key = `reservations_${userEmail}`;
  const existing = JSON.parse(localStorage.getItem(key)) || [];
  const updated = [...existing, reservation];
  localStorage.setItem(key, JSON.stringify(updated));

  // ✅ optionally inform parent (e.g. Navbar)
  if (onReservationSubmit) {
    onReservationSubmit(reservation);
  }

  // ✅ show success + reset form
  toast.success('🎉 Reservation Confirmed!');
  setFormData({
    name: '',
    email: '',
    phone: '',
    guests: '',
    area: '',
    date: '',
    time: '',
    tableType: ''
  });
};


  return (
    <div className="restaurant">
      <ToastContainer position="top-right" />
      <section className="reservation-form">
        <h2>Reserve Your Table 🍽️</h2>
        <form onSubmit={handleSubmit} className={shake ? 'shake' : ''}>
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
          <input type="number" name="guests" placeholder="No. of Guests" value={formData.guests} onChange={handleChange} />

          <select name="area" value={formData.area} onChange={handleChange}>
            <option value="">Select Area</option>
            {areas.map(area => (
              <option key={area} value={area}>{area}</option>
            ))}
          </select>

          <select name="tableType" value={formData.tableType} onChange={handleChange}>
            <option value="">Select Table Type</option>
            {tableTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>

          <input
            type="date"
            name="date"
            min={getMinDate()}
            value={formData.date}
            onChange={(e) => {
              const selectedDate = e.target.value;
              if (isSunday(selectedDate)) {
                toast.error('❌ We are closed on Sundays.');
                return;
              }
              handleChange(e);
            }}
          />

          <select
            name="time"
            value={formData.time}
            onChange={(e) => {
              if (!formData.date) {
                toast.error("📅 Please select a date first");
                return;
              }
              if (isPastTime(e.target.value, formData.date)) {
                toast.error("⏰ Cannot choose a past time");
                return;
              }
              handleChange(e);
            }}
          >
            <option value="">Select Time</option>
            {availableTimes.map((t) => {
              const disabled = formData.date && isPastTime(t, formData.date);
              return (
                <option key={t} value={t} disabled={disabled}>
                  {t}
                </option>
              );
            })}
          </select>

          <button type="submit">Confirm Reservation</button>
        </form>
      </section>
    </div>
  );
};
