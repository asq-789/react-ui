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
    image: 'musicnight.jpg',
    price: '3000 PKR'
  },
  {
    id: 2,
    title: '🎉 BBQ Buffet',
    date: '2025-06-28',
    time: '19:30',
    area: 'Outdoor Dining',
    tableType: 'Family',
    description: 'Savor unlimited BBQ with your family in our beautiful outdoor garden area.',
    image: 'buffay.jpg',
    price: '2500 PKR'
  },
  {
    id: 3,
    title: '🍝 Italian Food Festival',
    date: '2025-07-01',
    time: '21:00',
    area: 'Indoor Dining',
    tableType: 'Standard',
    description: 'Indulge in authentic Italian cuisine with a live cooking show by top chefs.',
    image: 'italian.png',
    price: '3500 PKR'
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
    price: '4000 PKR'
  },
];

export const Events = ({ userEmail }) => {
  const navigate = useNavigate();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [rsvpName, setRsvpName] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [passCode, setPassCode] = useState('');
  const [selectedRSVP, setSelectedRSVP] = useState(null);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [rsvps, setRsvps] = useState(() => getRsvps());

  function getRsvps() {
    return JSON.parse(localStorage.getItem(`rsvps_${userEmail}`)) || [];
  }

  const saveRsvps = (data) => {
    localStorage.setItem(`rsvps_${userEmail}`, JSON.stringify(data));
    setRsvps(data);
  };

  const handleRSVP = (event) => {
    if (rsvps.find(e => e.title === event.title)) {
      toast.info('ℹ️ Already RSVP\'d!');
      return;
    }
    setSelectedEvent(event);
    setPassCode('EVT' + Math.floor(100000 + Math.random() * 900000));
    setShowModal(true);
  };

  const confirmRSVP = () => {
    if (!rsvpName.trim()) {
      toast.error('❌ Enter your name');
      return;
    }

    const newRSVP = { ...selectedEvent, name: rsvpName, passCode };
    const updated = [...rsvps, newRSVP];
    saveRsvps(updated);
    toast.success('🎉 RSVP Confirmed!');
    setShowModal(false);
    setSelectedEvent(null);
    setRsvpName('');
  };

  const cancelRSVP = (title) => {
    const updated = rsvps.filter(e => e.title !== title);
    saveRsvps(updated);
    toast.info('❌ RSVP Cancelled');
    setShowCancelModal(false);
    setSelectedRSVP(null);
  };

  const handlePrint = (rsvp) => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>RSVP Pass</title>
          <style>
            body { font-family: Arial; padding: 20px; }
            h2 { color: #dc3545; }
            .section { margin-bottom: 10px; }
            .code { font-size: 20px; font-weight: bold; color: green; }
          </style>
        </head>
        <body>
          <h2>🎟️ RSVP Pass - Luxurious Spire Spot</h2>
          <div class="section"><strong>Name:</strong> ${rsvp.name}</div>
          <div class="section"><strong>Event:</strong> ${rsvp.title}</div>
          <div class="section"><strong>Date:</strong> ${rsvp.date}</div>
          <div class="section"><strong>Time:</strong> ${rsvp.time}</div>
          <div class="section"><strong>Area:</strong> ${rsvp.area}</div>
          <div class="section"><strong>Table:</strong> ${rsvp.tableType}</div>
          <div class="section"><strong>Price:</strong> ${rsvp.price}</div>
          <div class="section"><strong>Pass Code:</strong> <span class="code">${rsvp.passCode}</span></div>
          <br/>
          <p>📍 Pickup Location: Luxurious Spire Hotel, Main Shahrah-e-Faisal, Karachi</p>
          <button onclick="window.print()">🖨️ Print This Page</button>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <div className="container py-5">
      <h2 className="text-danger text-center mb-4">🎊 Luxurious Spire Spot - Upcoming Events</h2>

      <div className="row">
        {events.map((event) => (
          <div className="col-md-6 mb-4" key={event.id}>
            <div className="card h-100 shadow">
              <img src={event.image} alt={event.title} style={{ height: 200, objectFit: 'cover' }} />
              <div className="card-body text-center">
                <h4 className="text-danger">{event.title}</h4>
                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Time:</strong> {event.time}</p>
                <p><strong>Area:</strong> {event.area}</p>
                <p><strong>Table:</strong> {event.tableType}</p>
                <p><strong>Price:</strong> Rs. {event.price}</p>
                <p className="text-muted">{event.description}</p>
                <button className="btn btn-outline-success" onClick={() => handleRSVP(event)}>I'm Interested</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* RSVP Modal */}
      {showModal && selectedEvent && (
        <div className="modal d-block" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }} onClick={() => setShowModal(false)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header bg-danger text-white">
                <h5 className="modal-title">🎟️ RSVP Pass</h5>
                <button className="btn-close btn-close-white" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body text-center">
                <p><strong>Event:</strong> {selectedEvent.title}</p>
                <p><strong>Date:</strong> {selectedEvent.date} at {selectedEvent.time}</p>
                <p><strong>Area:</strong> {selectedEvent.area}</p>
                <p><strong>Table:</strong> {selectedEvent.tableType}</p>
                <p><strong>Pass Code:</strong> <span className="text-success">{passCode}</span></p>
                <p><strong>Price:</strong> Rs. {selectedEvent.price}</p>
                <input
                  type="text"
                  className="form-control mt-3"
                  placeholder="Enter your name"
                  value={rsvpName}
                  onChange={(e) => setRsvpName(e.target.value)}
                />
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                <button
                  className="btn btn-danger"
                  onClick={confirmRSVP}
                  disabled={!rsvpName.trim()}
                >
                  Confirm RSVP
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Confirmed RSVPs */}
      {rsvps.length > 0 && (
        <div className="mt-5">
          <h3 className="text-success text-center mb-3">✅ Your RSVPs</h3>
          <ul className="list-group">
            {rsvps.map((e, i) => (
              <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
                <span>{e.name} for <strong>{e.title}</strong> - {e.date} @ {e.time} | 🎟️ {e.passCode}</span>
                <div>
                  <button className="btn btn-sm btn-success me-2" onClick={() => handlePrint(e)}>🖨️ Print Pass</button>
                  <button className="btn btn-sm btn-outline-danger" onClick={() => {
                    setSelectedRSVP(e);
                    setShowCancelModal(true);
                  }}>Cancel</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Cancel Confirmation Modal */}
      {showCancelModal && selectedRSVP && (
        <div className="modal d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} onClick={() => setShowCancelModal(false)}>
          <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header bg-danger text-white">
                <h5 className="modal-title">❓ Cancel RSVP</h5>
                <button className="btn-close btn-close-white" onClick={() => setShowCancelModal(false)}></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to cancel your RSVP for:</p>
                <h5 className="text-danger">{selectedRSVP.title}</h5>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowCancelModal(false)}>No, Keep It</button>
                <button className="btn btn-danger" onClick={() => cancelRSVP(selectedRSVP.title)}>Yes, Cancel It</button>
              </div>
            </div>
          </div>
        </div>
      )}

  {/* 🖼️ Past Events Gallery */}
<div className="mt-5">
  <h3 className="text-danger mb-3 text-center">📸 Past Event Highlights</h3>

  <div className="gallery-container">
    <button className="scroll-btn left" onClick={() => document.getElementById('pastGallery').scrollBy({ left: -300, behavior: 'smooth' })}>
      ‹
    </button>
    <button className="scroll-btn right" onClick={() => document.getElementById('pastGallery').scrollBy({ left: 300, behavior: 'smooth' })}>
      ›
    </button>

    <div id="pastGallery" className="gallery-scroll">
      {[
        "/past1.jpg",
        "/past2.jpg",
        "/past3.jpg",
        "/past4.jpg",
        "/past5.jpg",
        "/past6.jpg",
        "/past7.jpg",
        "/past8.jpg"
      ].map((src, idx) => (
        <div key={idx} className="gallery-item">
          <img
            src={src}
            alt={`Past ${idx + 1}`}
            className="gallery-img"
            onMouseOver={e => e.currentTarget.classList.add('zoom')}
            onMouseOut={e => e.currentTarget.classList.remove('zoom')}
          />
        </div>
      ))}
    </div>
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
 
      <ToastContainer position="top-center" />

    </div>
    
  );
};
