import React from 'react';

export const Navbar = () => {
  const cartCount = 3; // Example value, you can set this from props or state

  return (
    <nav
      className="navbar navbar-expand-lg w-100"
      style={{ backgroundColor: 'red', padding: '10px 20px' }}
    >
      <div className="container-fluid">
        {/* Food Logo */}
        <a
          className="navbar-brand d-flex align-items-center"
          href="#"
          style={{ color: 'white', fontWeight: 'bold', fontSize: '24px' }}
        >
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/hamburger.png"
            alt="Food Logo"
            style={{ width: '30px', height: '30px', marginRight: '10px' }}
          />
          FoodieSpot
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
                style={{ color: 'white' }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: 'white' }}>
                Menu
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: 'white' }}
              >
                Categories
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Pizza
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Burgers
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Desserts
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                aria-disabled="true"
                style={{ color: '#ccc' }}
              >
                Offers
              </a>
            </li>
          </ul>

          {/* Search bar and button */}
          <form className="d-flex align-items-center" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search food..."
              aria-label="Search"
              style={{ width: '200px' }}
            />
            <button
              className="btn"
              type="submit"
              style={{
                backgroundColor: 'white',
                color: 'red',
                border: '1px solid red',
              }}
            >
              Search
            </button>
          </form>

          {/* Cart Icon */}
          <a
            href="#"
            style={{
              marginLeft: '15px',
              color: 'white',
              position: 'relative',
            }}
          >
            <img
              src="https://img.icons8.com/ios-filled/24/ffffff/shopping-cart.png"
              alt="Cart"
              style={{ width: '24px', height: '24px' }}
            />
            {cartCount > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-10px',
                  backgroundColor: 'yellow',
                  color: 'black',
                  borderRadius: '50%',
                  padding: '4px 8px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                }}
              >
                {cartCount}
              </span>
            )}
          </a>
        </div>
      </div>
    </nav>
  );
};
