import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const events = [
  {
    id: 1,
    title: '💃 Live Music Night',
    date: '2025-06-25',
    time: '20:00',
    area: 'Roof Top Garden Dining',
    tableType: 'Couple',
    description: 'Enjoy a night of live music under the stars with our special couple dining package.',
    image: '/events/music.jpg',
  },
  {
    id: 2,
    title: '🎉 BBQ Buffet',
    date: '2025-06-28',
    time: '19:30',
    area: 'Outdoor Dining',
    tableType: 'Family',
    description: 'Savor unlimited BBQ with your family in our beautiful outdoor garden area.',
    image: '/events/bbq.jpg',
  },
  {
    id: 3,
    title: '🍝 Italian Food Festival',
    date: '2025-07-01',
    time: '21:00',
    area: 'Indoor Dining',
    tableType: 'Standard',
    description: 'Indulge in authentic Italian cuisine with a live cooking show by top chefs.',
    image: '/events/italian.jpg',
  },
  {
    id: 4,
    title: '🎉 Family Weekend Feast',
    date: '2025-07-20',
    time: '19:00',
    guests: '5',
    area: 'Indoor Dining',
    tableType: 'Family',
    description: 'Celebrate your weekend with a special family feast. Includes complimentary dessert & kids play zone!',
    image: '/events/familyfeast.jpg',
  },
];

export const Events = () => {
  const navigate = useNavigate();
  const [rsvps, setRsvps] = useState(() => {
    const saved = localStorage.getItem('rsvps');
    return saved ? JSON.parse(saved) : [];
  });

  const handleReserve = (event) => {
    localStorage.setItem('eventReservationPrefill', JSON.stringify(event));
    navigate('/restaurant');
  };

  const handleRSVP = (event) => {
    const already = rsvps.find(e => e.title === event.title);
    if (already) {
      toast.info(`ℹ️ You already RSVP'd for: ${event.title}`);
      return;
    }
    const updated = [...rsvps, event];
    localStorage.setItem('rsvps', JSON.stringify(updated));
    setRsvps(updated);
    toast.success(`✅ RSVP saved for: ${event.title}`);
  };

  return (
    <div className="container py-5">
      <h2 className="text-danger text-center mb-4">🎊 Upcoming Events</h2>

      {/* 🎫 Events List */}
      <div className="row">
        {events.map((event) => (
          <div className="col-md-6 mb-4" key={event.id || event.date}>
            <div className="card h-100 shadow border-0">
              {event.image && (
                <img
                  src={event.image}
                  alt={event.title}
                  style={{
                    height: '200px',
                    width: '100%',
                    objectFit: 'cover',
                    borderTopLeftRadius: '8px',
                    borderTopRightRadius: '8px',
                  }}
                />
              )}
              <div className="card-body text-center">
                <h4 className="card-title text-danger">{event.title}</h4>
                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Time:</strong> {event.time}</p>
                <p><strong>Area:</strong> {event.area}</p>
                <p><strong>Table:</strong> {event.tableType}</p>
                <p className="text-muted">{event.description}</p>
                <button className="btn btn-danger me-2" onClick={() => handleReserve(event)}>Reserve Now</button>
                <button className="btn btn-outline-success" onClick={() => handleRSVP(event)}>I'm Interested</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 🖼️ Past Events Gallery */}
      <div className="mt-5">
        <h3 className="text-danger mb-3 text-center">📸 Past Event Highlights</h3>
        <div className="row g-3">
          {["/past1.jpg", "/past2.jpg", "/past3.jpg"].map((src, idx) => (
            <div className="col-md-4" key={idx}>
              <img src={src} alt={`Past ${idx}`} className="img-fluid rounded shadow" />
            </div>
          ))}
        </div>
      </div>
      {/* 🎉 Celebrated Occasions & Discounts */}
<div className="mt-5">
  <h3 className="text-danger mb-3 text-center">🎂 Celebrated Occasions & Special Discounts</h3>
  <div className="row g-4">
    {[
      {
        title: "🎉 Birthday Bash",
        desc: "Colorful decorations, custom cake, and free birthday dessert for guests!",
        badge: "🎂 20% Off Birthday Packages",
        img: "/occasions/birthday.jpg",
        area: "Indoor Dining",
        tableType: "Family",
        occasion: "Birthday"
      },
      {
        title: "💍 Engagement Night",
        desc: "Romantic rooftop ambiance with complimentary drinks & candles.",
        badge: "💖 Couple Deal – Save 15%",
        img: "/occasions/engagement.jpg",
        area: "Roof Top Garden Dining",
        tableType: "Couple",
        occasion: "Engagement"
      },
      {
        title: "🎓 Graduation Dinner",
        desc: "Celebrate milestones with your loved ones. Free welcome drink included.",
        badge: "🎓 Group Deal – 10% Off",
        img: "/occasions/graduation.jpg",
        area: "Indoor Dining",
        tableType: "Standard",
        occasion: "Graduation"
      },
      {
        title: "👋 Farewell Gathering",
        desc: "Reserve for office or school farewells. Includes stage & projector.",
        badge: "🎤 Event Discount – Flat 1000 PKR Off",
        img: "/occasions/farewell.jpg",
        area: "Outdoor Dining",
        tableType: "Family",
        occasion: "Farewell"
      },
      {
        title: "💘 Anniversary Special",
        desc: "Live violin music, custom menu, and couple photography included.",
        badge: "💑 Anniversary Deal – Free Dessert & Rose",
        img: "/occasions/anniversary.jpg",
        area: "Roof Top Garden Dining",
        tableType: "Couple",
        occasion: "Anniversary"
      },
      {
  title: "🍽️ Corporate Dinner",
  desc: "Impress your team or clients with our elegant corporate dinner setup including presentation screen and VIP service.",
  badge: "🏢 Corporate Package – 15% Off for 10+ Guests",
  img: "/occasions/corporate.jpg",
  area: "Indoor Dining",
  tableType: "Standard",
  occasion: "Corporate Dinner"
}

    ].map((item, idx) => (
      <div className="col-md-4" key={idx}>
        <div className="card h-100 shadow border-0">
          <img
            src={item.img}
            alt={item.title}
            style={{ height: '200px', width: '100%', objectFit: 'cover', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}
          />
          <div className="card-body text-center">
            <h5 className="card-title text-danger">{item.title}</h5>
            <p className="text-muted">{item.desc}</p>
            <span className="badge bg-success mb-2">{item.badge}</span>
            <br />
            <button
    className="btn btn-outline-danger mt-2"
    onClick={() => {
      const prefill = {
        area: item.area,
        tableType: item.tableType,
        occasion: item.occasion, // 🎯 This is what pre-fills the dropdown
        discount: item.badge,
        title: item.title,
      };
      localStorage.setItem('eventReservationPrefill', JSON.stringify(prefill));
      navigate('/restaurant');
    }}
  >
    🎉 Book This Occasion
  </button>
</div>
          
        </div>
      </div>
    ))}
  </div>
  
</div>
 {/* ✅ RSVP'd Events */}
      {rsvps.length > 0 && (
        <div className="mt-5">
          <h3 className="text-success text-center mb-3">✅ Your RSVPs</h3>
          <ul className="list-group">
            {rsvps.map((e, i) => (
              <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
                <span>{e.title} - {e.date} @ {e.time}</span>
                <span className="badge bg-success">Confirmed</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <ToastContainer position="top-center" />

    </div>
    
  );
};
