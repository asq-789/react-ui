import { useState, useEffect } from 'react';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Cards } from './Components/Cards/Cards';
import { Footer } from './Components/Footer/Index';
import { Navbarname } from './Components/Navbar/Navbarname';
import { Carousel } from './Components/Carousel/Carousel';
import { Routes, Route } from 'react-router';
import AnimeeDeals from './Components/Food/AnimeeDeals';
import FastFoodDeals from './Components/Food/FastFoodDeals';
import PopularItems from './Components/Food/PopularItems';
import { Home } from './Home';
import { Animeecards } from './Components/Cards/Animeecards';
import { Burgers } from './Components/Food/Burgers';
import { Appetizers } from './Components/Food/Appetizers';
import { BBQ } from './Components/Food/BBQ';
import { Biryani } from './Components/Food/Biryani';
import { Desert } from './Components/Food/Desert';
import { Drinks } from './Components/Food/Drinks';
import { Pizza } from './Components/Food/Pizza';
import { Rolls } from './Components/Food/Rolls';
import { Sandwitches } from './Components/Food/Sandwitches';
import { Loginmoadal } from './Components/Loginmoadal';
import { Aboutus } from './Components/Aboutus';
import { Restaurant } from './Components/Restaurant';
import { Deal } from './Components/Deal';
import { Alldishes } from './Components/Search/Alldishes';
import { Events } from './Components/Events';
import { ToastContainer, toast } from 'react-toastify';
// search
// import { AnimeeProducts } from './Components/Search/AllProducts';
// import { bbqProducts } from './Components/Search/AllProducts';
// import { biryaniProducts } from './Components/Search/AllProducts';
// import { PopularProducts } from './Components/Search/AllProducts';
// import { Products } from './Components/Search/AllProducts';
// import { DessertsProducts } from './Components/Search/AllProducts';
// import { appetizerProducts } from './Components/Search/AllProducts';
// import { drinkProducts } from './Components/Search/AllProducts';
// import { PizzaProducts } from './Components/Search/AllProducts';
// import { sandwitchesProducts } from './Components/Search/AllProducts';
// import { rollProducts } from './Components/Search/AllProducts';
// import { burgerProducts } from './Components/Search/AllProducts';
// import { burgerdealProducts } from './Components/Search/AllProducts';
import 'react-toastify/dist/ReactToastify.css';
// import { Products, PopularProducts, AnimeeProducts,appetizerProducts, bbqProducts, burgerdealProducts,DessertsProducts,drinkProducts,PizzaProducts,rollProducts,sandwitchesProducts} from './allProducts';
// import { allProducts } from './Components/Search/Alldishes';

function App() {
  const [userEmail, setUserEmail] = useState(localStorage.getItem('userEmail') || '');
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [reservationCount, setReservationCount] = useState(0);
  const [isCartLoaded, setIsCartLoaded] = useState(false);

  useEffect(() => {
    if (userEmail) {
      const storedCart = JSON.parse(localStorage.getItem(`cart_${userEmail}`)) || [];
      const storedWishlist = JSON.parse(localStorage.getItem(`wishlist_${userEmail}`)) || [];
      const storedReservations = JSON.parse(localStorage.getItem(`reservations_${userEmail}`)) || [];

      setCartItems(storedCart);
      setWishlistItems(storedWishlist);
      setReservationCount(storedReservations.length || 0);
    } else {
      setCartItems([]);
      setWishlistItems([]);
      setReservationCount(0);
    }
    setIsCartLoaded(true);
  }, [userEmail]);

  useEffect(() => {
    if (userEmail && isCartLoaded) {
      localStorage.setItem(`cart_${userEmail}`, JSON.stringify(cartItems));
      localStorage.setItem(`wishlist_${userEmail}`, JSON.stringify(wishlistItems));
    }
  }, [cartItems, wishlistItems, userEmail, isCartLoaded]);

  const handleAddToCart = (product) => {
    const existingIndex = cartItems.findIndex(item => item.name === product.name);
    if (existingIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingIndex].quantity += 1;
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    toast.success("🛒 Added to cart");
  };

  const handleToggleWishlist = (product) => {
    const exists = wishlistItems.find(item => item.name === product.name);
    if (exists) {
      setWishlistItems(wishlistItems.filter(item => item.name !== product.name));
      toast.error("💔 Removed from wishlist");
    } else {
      setWishlistItems([...wishlistItems, product]);
      toast.success("💖 Added to wishlist");
    }
  };

  if (!isCartLoaded) return null;

  return (
    <>
      <Loginmoadal setUserEmail={setUserEmail} />
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar />

      <div style={{ width: '200%', maxWidth: '100vw', overflowX: 'hidden' }}>
       <Navbar
  cartItems={cartItems}
  setCartItems={setCartItems}
  wishlistItems={wishlistItems}
  setWishlistItems={setWishlistItems}
  handleAddToCart={handleAddToCart}
  handleToggleWishlist={handleToggleWishlist}
  userEmail={userEmail}
  reservationCount={reservationCount} 
/>

        <Carousel />
        <Navbarname />
      </div>

      <Routes>
        <Route path="/" element={<Loginmoadal setUserEmail={setUserEmail} />} />
        <Route path="events" element={<Events setUserEmail={setUserEmail} />} />
       <Route path="alldishes" element={<Alldishes setUserEmail={setUserEmail} />} />
        <Route path="alldishes" element={<Alldishes handleAddToCart={handleAddToCart} />} />
        <Route path="home" element={<Home handleAddToCart={handleAddToCart} handleToggleWishlist={handleToggleWishlist} wishlistItems={wishlistItems} />} />
        <Route path="about" element={<Aboutus handleAddToCart={handleAddToCart} handleToggleWishlist={handleToggleWishlist} wishlistItems={wishlistItems} />} />
        <Route path="/restaurant" element={<Restaurant userEmail={userEmail} onReservationSubmit={(reservation) => console.log('Reservation submitted:', reservation)} />} />
        <Route path="/anime" element={<AnimeeDeals handleAddToCart={handleAddToCart} handleToggleWishlist={handleToggleWishlist} wishlistItems={wishlistItems} />} />
        <Route path="/fastfood" element={<FastFoodDeals handleAddToCart={handleAddToCart} handleToggleWishlist={handleToggleWishlist} wishlistItems={wishlistItems} />} />
        <Route path="/chinese" element={<PopularItems handleAddToCart={handleAddToCart} handleToggleWishlist={handleToggleWishlist} wishlistItems={wishlistItems} />} />
        <Route path="/burger" element={<Burgers handleAddToCart={handleAddToCart} handleToggleWishlist={handleToggleWishlist} wishlistItems={wishlistItems} />} />
        <Route path="/appetizers" element={<Appetizers handleAddToCart={handleAddToCart} handleToggleWishlist={handleToggleWishlist} wishlistItems={wishlistItems} />} />
        <Route path="/bbq" element={<BBQ handleAddToCart={handleAddToCart} handleToggleWishlist={handleToggleWishlist} wishlistItems={wishlistItems} />} />
        <Route path="/biryani" element={<Biryani handleAddToCart={handleAddToCart} handleToggleWishlist={handleToggleWishlist} wishlistItems={wishlistItems} />} />
        <Route path="/burgerdeal" element={<Deal handleAddToCart={handleAddToCart} handleToggleWishlist={handleToggleWishlist} wishlistItems={wishlistItems} />} />
        <Route path="/desserts" element={<Desert handleAddToCart={handleAddToCart} handleToggleWishlist={handleToggleWishlist} wishlistItems={wishlistItems} />} />
        <Route path="/drinks" element={<Drinks handleAddToCart={handleAddToCart} handleToggleWishlist={handleToggleWishlist} wishlistItems={wishlistItems} />} />
        <Route path="/pizza" element={<Pizza handleAddToCart={handleAddToCart} handleToggleWishlist={handleToggleWishlist} wishlistItems={wishlistItems} />} />
        <Route path="/rolls" element={<Rolls handleAddToCart={handleAddToCart} handleToggleWishlist={handleToggleWishlist} wishlistItems={wishlistItems} />} />
        <Route path="/sandwiches" element={<Sandwitches handleAddToCart={handleAddToCart} handleToggleWishlist={handleToggleWishlist} wishlistItems={wishlistItems} />} />
      </Routes>

      <div style={{ width: '200%', maxWidth: '100vw', overflowX: 'hidden' }}>
        <Footer />
      </div>
    </>
  );
}

export default App;
