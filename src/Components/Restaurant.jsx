import React from 'react';

export const Restaurant = () => {
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

  const imageStyle = {
    width: '100%',
    height: '100%',
  };

  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="display-4 text-danger fw-bold">🏛️ Welcome to Our Restaurant</h1>
        <p className="lead text-muted">Experience delicious food in a cozy and welcoming atmosphere.</p>
        <div
          style={{
            height: '400px',
            maxWidth: '800px',
            margin: '20px auto',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
          }}
        >
          <img
            src="/resc.png"
            alt="Restaurant Hero"
            style={imageStyle}
          />
        </div>
      </div>

      {/* Gallery Section */}
      <div className="mb-5">
        <h2 className="text-danger mb-4 text-center">📸 Restaurant Gallery</h2>
        <div className="row g-4">
          {['/dining.jpg', '/dining2.jpg', '/dining3.jpg', '/dining4.jpg', '/dining5.jpg', '/dining6.jpg'].map((src, index) => (
            <div className="col-md-4" key={index}>
              <div
                style={{ ...cardContainerStyle }}
                onMouseOver={(e) => Object.assign(e.currentTarget.style, { ...cardContainerStyle, ...cardHoverStyle })}
                onMouseOut={(e) => Object.assign(e.currentTarget.style, cardContainerStyle)}
              >
                <img src={src} alt={`Gallery ${index}`} style={imageStyle} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Section */}
      <div className="my-5">
        <h2 className="text-center text-danger mb-4">🍽️ A Peek Inside</h2>
        <div id="restaurantCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {['peek.png','roof.jpg','resc.png'].map((img, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <div
                  style={{
                    height: '500px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    src={img}
                    className="d-block w-100"
                    alt={`Slide ${index + 1}`}
                    style={imageStyle}
                  />
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#restaurantCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#restaurantCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>

      {/* Booking Section */}
      <div className="bg-light p-5 rounded shadow mb-5">
        <h2 className="text-center text-danger mb-4">📅 Reserve a Table</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          alert("Thanks for booking! We'll contact you shortly.");
        }}>
          <div className="row g-3">
            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="Your Name" required />
            </div>
            <div className="col-md-6">
              <input type="tel" className="form-control" placeholder="Phone Number" required />
            </div>
            <div className="col-md-4">
              <input type="date" className="form-control" required />
            </div>
            <div className="col-md-4">
              <input type="time" className="form-control" required />
            </div>
            <div className="col-md-4">
              <input type="number" className="form-control" placeholder="No. of Guests" required />
            </div>
          </div>
          <div className="text-center mt-4">
            <button type="submit" className="btn btn-danger px-4">Confirm Reservation</button>
          </div>
        </form>
      </div>

      {/* Location and Contact */}
      <div className="row mb-5">
        <div className="col-md-6">
          <h2 className="text-danger">📍 Find Us</h2>
          <p className="text-muted">
            <strong>Address:</strong> 123 Food Street, Karachi, Pakistan<br />
            <strong>Phone:</strong> +92 300 1234567<br />
            <strong>Email:</strong> hello@yourrestaurant.com
          </p>
          <h5 className="mt-4 text-dark">🕒 Opening Hours:</h5>
          <ul className="list-unstyled text-muted">
            <li>Mon – Fri: 12:00 PM – 11:00 PM</li>
            <li>Sat – Sun: 1:00 PM – 10:00 PM</li>
          </ul>
        </div>
        <div className="col-md-6">
          <div style={{
            height: '300px',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
          }}>
            <iframe
              title="Restaurant Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.891234090477!2d67.06302997537196!3d24.86073494579047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e9e50b92e6d%3A0x909a40c8b5d124e2!2sKarachi!5e0!3m2!1sen!2s!4v1718576880000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Directions */}
      <div className="text-center mb-5">
        <h2 className="text-danger mb-3">🚗 How to Reach Us</h2>
        <p className="text-muted">
          We're located near the main market with plenty of parking available.  
          Easy access by bus and ride-sharing services.
        </p>
      </div>
    </div>
  );
};
