import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Search } from '../Search';

export const Navbarname = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = {
navbar: {
  backgroundColor: 'red',
  padding: '10px 20px',
  display: 'flex',
  justifyContent: isMobile ? 'space-between' : 'center',
  alignItems: 'center',
  width: '100%',
  boxSizing: 'border-box',
},

    hamburger: {
      fontSize: '24px',
      color: 'white',
      cursor: 'pointer',
      display: isMobile ? 'block' : 'none',
    },
    mobileMenuWrapper: {
      position: 'fixed',
      bottom: menuOpen ? '0' : '-100%',
      left: 0,
      width: '100%',
      height: '35vh',
      backgroundColor: 'red',
      transition: 'bottom 0.4s ease-in-out',
      zIndex: 1000,
      borderTop: '1px solid white',
      display: 'flex',
      flexDirection: 'column',
    },
    closeIcon: {
      fontSize: '24px',
      color: 'white',
      textAlign: 'right',
      padding: '10px 20px',
      cursor: 'pointer',
    },
    heading: {
      color: 'white',
      padding: '0 20px 10px',
      fontSize: '18px',
      fontWeight: 'bold',
      borderBottom: '1px solid white',
      textAlign: 'center',
    },
    scrollArea: {
      overflowY: 'auto',
      flex: 1,
    },
    menuList: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
    },
    listItem: {
      padding: '15px 0',
      borderBottom: '1px solid white',
      textAlign: 'center',
    },
    link: {
      textDecoration: 'none',
      color: 'white',
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      fontSize: '16px',
      fontWeight: 500,
      transition: 'color 0.3s',
    },
    desktopScrollWrapper: {
      position: 'relative',
      flex: 1,
      width: '100%',
      overflowX: 'auto',
      boxSizing: 'border-box',
    },
    desktopList: {
      listStyle: 'none',
      display: 'flex',
      gap: '25px',
      margin: 0,
      padding: '0 10px',
      overflowX: 'auto',
      whiteSpace: 'nowrap',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
      width: '100%',
      boxSizing: 'border-box',
    },
    desktopItem: {
      position: 'relative',
      padding: '0 10px',
      flexShrink: 0,
    },
    divider: {
      position: 'absolute',
      right: '-13px',
      top: '50%',
      transform: 'translateY(-50%)',
      height: '20px',
      borderRight: '1px solid white',
    },
    fadeLeft: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: '30px',
      background: 'linear-gradient(to right, red, transparent)',
      zIndex: 1,
      pointerEvents: 'none',
    },
    fadeRight: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      width: '30px',
      background: 'linear-gradient(to left, red, transparent)',
      zIndex: 1,
      pointerEvents: 'none',
    },
  };

  const menuItems = [
    { label: "Anime Deal", path: "/anime" },
    { label: "Fast Food", path: "/fastfood" },
    { label: "Chinese Deal", path: "/chinese" },
    { label: "Pizza", path: "/pizza" },
    { label: "Burger", path: "/burger" },
    { label: "Sandwiches", path: "/sandwiches" },
    { label: "Biryani", path: "/biryani" },
    { label: "BBQ", path: "/bbq" },
    { label: "Appetizers", path: "/appetizers" },
    { label: "Rolls", path: "/rolls" },
    { label: "Drinks", path: "/drinks" },
    { label: "Desserts", path: "/desserts" },
  ];

  return (
    <>
        <div style={{ paddingTop: '0px' }}>

      <nav style={styles.navbar}>
        <h5 style={{ color: 'white', margin: 0 }}>🍽️ Menu</h5>
        <div style={styles.hamburger} onClick={() => setMenuOpen(true)}>☰</div>

        {!isMobile && (
          <div style={styles.desktopScrollWrapper}>
            <div style={styles.fadeLeft}></div>
            <div style={styles.fadeRight}></div>
            <ul style={styles.desktopList}>
              {menuItems.map((item, index) => (
                <li key={index} style={styles.desktopItem}>
                  <Link
                    to={item.path}
                    style={styles.link}
                    onMouseOver={e => e.target.style.color = '#ffd700'}
                    onMouseOut={e => e.target.style.color = 'white'}
                  >
                    {item.label}
                  </Link>
                  {index !== menuItems.length - 1 && <span style={styles.divider}></span>}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {isMobile && menuOpen && (
        <div style={styles.mobileMenuWrapper}>
          <div style={styles.closeIcon} onClick={() => setMenuOpen(false)}>×</div>
          <div style={styles.heading}>Menu 🍽️</div>
          <div style={styles.scrollArea}>
            <ul style={styles.menuList}>
              {menuItems.map((item, index) => (
                <li key={index} style={styles.listItem}>
                  <Link
                    to={item.path}
                    style={styles.link}
                    onClick={() => setMenuOpen(false)}
                    onMouseOver={e => e.target.style.color = '#ffd700'}
                    onMouseOut={e => e.target.style.color = 'white'}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {/* <Search/> */}
</div>
      <style>
        {`
          html, body {
            margin: 0;
            padding: 0;
            overflow-x: hidden; /* 🚫 No horizontal scroll */
            box-sizing: border-box;
          }
          ul::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>

    </>
  );
};
