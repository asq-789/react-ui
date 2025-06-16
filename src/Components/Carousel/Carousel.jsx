import React from 'react';

export const Carousel = () => {
  const carouselContainerStyle = {
    margin: '0',
    padding: '0',
    width: '100vw',
    overflowX: 'hidden',
  };

  const carouselImageStyle = {
    height: '450px',
    width: '100vw',
    display: 'block',
  };

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
      style={carouselContainerStyle}
    >
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="third.png" alt="Slide 1" style={carouselImageStyle} />
        </div>
        <div className="carousel-item">
          <img src="second.png" alt="Slide 2" style={carouselImageStyle} />
        </div>
        <div className="carousel-item">
          <img src="carousel.png" alt="Slide 3" style={carouselImageStyle} />
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
