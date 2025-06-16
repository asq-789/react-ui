import React, { useEffect } from 'react';

export const Aboutus = () => {
  useEffect(() => {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const speed = 200; // lower = faster

        const increment = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  }, []);

  return (
    <div className="container py-5">
      {/* Title */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-danger">About Us</h1>
        <p className="lead">Passion for food, love for delivery!</p>
      </div>

      {/* Our Kitchen */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <img src="kitchen.jpg" className="img-fluid rounded shadow" alt="Our Kitchen" />
        </div>
        <div className="col-md-6">
          <h2 className="text-danger">🍳 Our Kitchen</h2>
          <p className="text-muted">
            Our chefs craft each dish with passion and precision using the freshest ingredients. Hygiene, quality, and taste are our top priorities.
          </p>
        </div>
      </div>

      {/* Delivery Team */}
      <div className="row align-items-center flex-md-row-reverse mb-5">
        <div className="col-md-6">
          <img src="delivery.jpg" className="img-fluid rounded shadow" alt="Delivery Team" />
        </div>
        <div className="col-md-6">
          <h2 className="text-danger">🚴‍♂️ Fast Delivery</h2>
          <p className="text-muted">
            Our friendly riders make sure your food arrives hot and fresh—every single time. Speed, safety, and service are what we promise.
          </p>
        </div>
      </div>

      {/* Meet Our Team */}
      <div className="mb-5 text-center">
        <h2 className="text-danger">🤝 Meet Our Team</h2>
        <p className="text-muted mb-4">We are a group of passionate foodies, techies, and logistics experts!</p>
        <div className="row">
          <div className="col-md-4">
            <img src="chef.jpg" className="img-fluid rounded-circle mb-2 shadow" alt="Chef" />
            <h5 className="fw-bold">Chef Sara</h5>
            <p className="text-muted">Head Chef</p>
          </div>
          <div className="col-md-4">
            <img src="chef3.jpg" className="img-fluid rounded-circle mb-2 shadow" alt="Delivery Lead" />
            <h5 className="fw-bold">Ali Raza</h5>
            <p className="text-muted">Delivery Manager</p>
          </div>
          <div className="col-md-4">
            <img src="chef2.jpg" className="img-fluid rounded-circle mb-2 shadow" alt="Support Team" />
            <h5 className="fw-bold">Zainab Khan</h5>
            <p className="text-muted">Customer Support</p>
          </div>
        </div>
      </div>

      {/* Vision */}
      <div className="text-center mb-5">
        <h2 className="text-danger">🌟 Our Vision</h2>
        <p className="text-muted px-md-5">
          To redefine online food delivery by combining taste, technology, and trust. We dream of serving millions with quality and care.
        </p>
      </div>

      {/* Counters */}
      <div className="row text-center mb-5">
        <div className="col-md-3">
          <h2 className="text-danger counter" data-target="5000">0</h2>
          <p className="text-muted">Happy Customers</p>
        </div>
        <div className="col-md-3">
          <h2 className="text-danger counter" data-target="1200">0</h2>
          <p className="text-muted">Dishes Served</p>
        </div>
        <div className="col-md-3">
          <h2 className="text-danger counter" data-target="24">0</h2>
          <p className="text-muted">Hours Open</p>
        </div>
        <div className="col-md-3">
          <h2 className="text-danger counter" data-target="99">0</h2>
          <p className="text-muted">Delivery Accuracy %</p>
        </div>
      </div>

      {/* Testimonials */}
 <div className="text-center mb-5">
  <h2 className="text-danger mb-3">💬 What Our Customers Say</h2>
  <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="p-4 border rounded bg-light">
          <p className="mb-3 fst-italic">"Fastest delivery I've ever seen! And the food? Absolutely delicious. Highly recommend!"</p>
          <h6 className="fw-bold mb-0">— Ayesha Malik</h6>
        </div>
      </div>
      <div className="carousel-item">
        <div className="p-4 border rounded bg-light">
          <p className="mb-3 fst-italic">"Excellent customer support and hygienic packaging. Love ordering from here!"</p>
          <h6 className="fw-bold mb-0">— Hamza Sheikh</h6>
        </div>
      </div>
      <div className="carousel-item">
        <div className="p-4 border rounded bg-light">
          <p className="mb-3 fst-italic">"From placing the order to receiving it—smooth experience. Definitely my go-to app!"</p>
          <h6 className="fw-bold mb-0">— Mehak Zulfiqar</h6>
        </div>
      </div>
    </div>

    {/* Carousel controls */}
   <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
<span
  className="carousel-control-next-icon"
  aria-hidden="true"
  style={{ filter: 'invert(100%)', width: '30px', height: '30px' }}
></span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
  <span className="carousel-control-next-icon" aria-hidden="true"></span>
<span
  className="carousel-control-next-icon"
  aria-hidden="true"
  style={{ filter: 'invert(100%)', width: '30px', height: '30px' }}
></span>
</button>

  </div>
</div>

</div>
  );
};
