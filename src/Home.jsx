import React, { useState } from 'react';
import { Animeecards } from './Components/Cards/Animeecards';
import { Cards } from './Components/Cards/Cards';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AnimeeProducts = [
  {
    name: '🍱 Animee Lovers Special',
    price: 700,
    img: '/animee1.jpeg',
    description: 'Special shrimp chowmin served in anime-style themed packaging.',
    badge: '🍱 Otaku Pick'
  },
  {
    name: '🎭 Mighty Deal Bento',
    price: 1599,
    img: '/animee2.jpeg',
    description: 'Colorful and aromatic veg fried rice from our Animee deals.',
    badge: '🎭 Cosplay Favorite'
  },
  {
    name: '🔥 Animee Combo Deal',
    price: 1599,
    img: '/animee3.jpeg',
    description: 'Another flavor twist on veg fried rice for anime lovers.',
    badge: '🔥 Top Combo'
  }
];
const appetizerProducts = [
  {
    id: 1,
    name: '🍗 Crispy Chicken Strips',
    price: 480,
    img: '/a1.jpg',
    description: 'Golden-fried chicken strips served with spicy dip.',
    badge: '🔥 Hot Favorite'
  },
  {
    id: 2,
    name: '🧀 Cheese Balls',
    price: 450,
    img: '/a2.jpg',
    description: 'Crispy on the outside, gooey cheese inside — a perfect starter.',
    badge: '🧀 Cheesy Favorite'
  },
  {
    id: 3,
    name: '🌶️ Stuffed Jalapeños',
    price: 500,
    img: '/jalepeno.jpg',
    description: 'Spicy jalapeños stuffed with cheese and coated in crunchy crumbs.',
    badge: '🌶️ Spicy Kick'
  },
  {
    id: 4,
    name: '🍤 Chicken Tempura',
    price: 520,
    img: '/a4.jpg',
    description: 'Lightly battered chicken strips served with tempura sauce.',
    badge: '🥢 Light & Crispy'
  },
  {
    id: 5,
    name: '💥 Dynamite Chicken Bites',
    price: 560,
    img: '/a5.jpg',
    description: 'Bite-sized crispy chicken tossed in dynamite mayo sauce.',
    badge: '💣 Bold Flavor'
  },
  {
    id: 6,
    name: '🍟 French Fries',
    price: 300,
    img: '/a6.jpg',
    description: 'Classic salted fries served hot and crispy.',
    badge: '🍟 Classic Pick'
  }
];const bbqProducts = [ 
  {
    id: 1,
    name: '🍗 BBQ Chicken Wings',
    price: 890,
    img: '/b1.jpg',
    description: 'Juicy chicken wings tossed in a smoky BBQ glaze.',
    badge: '🔥 Crowd Favorite'
  },
  {
    id: 2,
    name: '🥩 Smoked Beef Ribs',
    price: 1550,
    img: '/b2.jpg',
    description: 'Tender beef ribs slow-smoked with BBQ spices and sauce.',
    badge: '🔥 Smoked Favorite'
  },
  {
    id: 3,
    name: '🍯 Honey BBQ Chicken',
    price: 1050,
    img: '/b3.jpg',
    description: 'Sweet and tangy BBQ chicken grilled to perfection.',
    badge: '🍯 Sweet BBQ'
  },
  {
    id: 4,
    name: '🐑 BBQ Lamb Chops',
    price: 1799,
    img: '/b4.jpg',
    description: 'Grilled lamb chops marinated in bold BBQ herbs and spices.',
    badge: '🥩 Meaty Must-Have'
  },
  {
    id: 5,
    name: '🌶️ Spicy BBQ Drumsticks',
    price: 970,
    img: '/b5.jpg',
    description: 'Hot and smoky drumsticks coated with a fiery BBQ rub.',
    badge: '🌶️ Heat Lover'
  },
  {
    id: 6,
    name: '🍔 BBQ Pulled Beef Sliders',
    price: 1150,
    img: '/b6.jpg',
    description: 'Shredded beef slow-cooked in BBQ sauce and served in mini buns.',
    badge: '🍖 Tender Bites'
  }
];
const burgerdealProducts = [
  {
    id: 1,
    name: '🍔 Hunger Deal',
    price: 700,
    img: '/burgerdeal.png',
    description: '1 Burger + Coldrink.',
  },
  {
    id: 2,
    name: '🔥 Mega Zinger Feast',
    price: 1699,
    img: '/burgerdeal2.png',
    description: '3 Zinger + 1 Pizza Slice + Coldrink.',
  },
  {
    id: 3,
    name: '🌶️ Spicy Cheese Zinger Combo',
    price: 2699,
    img: '/deal1.jpg',
    description: 'Spicy Red Chillies Zinger + Fries + Coldrink.',
  },
  {
    id: 4,
    name: '👑 Royal Meat Box',
    price: 1599,
    img: '/deal3.jpg',
    description: '2 Zinger + 2 Beef Burgers + Crispy Fries + 3 Dips.',
  },
  {
    id: 5,
    name: '🌶️ Jalapeño Blast Pack',
    price: 1060,
    img: '/deal.jpg',
    description: '2 Jalapeño Zingers + Fries + Dips.',
  },
  {
    id: 6,
    name: '🥩 Beef & Veggie Trio',
    price: 1060,
    img: '/burger2.jpg',
    description: '2 Veg and Beef Burgers + 1 Jalapeño Burger.',
  },
];
const biryaniProducts = [
  {
    id: 1,
    name: '🍛 Hyderabadi Biryani',
    price: 750,
    img: '/biryani1.jpg',
    description: 'Aromatic basmati rice cooked with spicy marinated chicken and saffron.',
    badge: '⭐ Bestseller'
  },
  {
    id: 2,
    name: '🌶️ Sindhi Biryani',
    price: 800,
    img: '/biryani2.jpg',
    description: 'A flavorful mix of meat, potatoes, green chilies, and tangy spices.',
    badge: '🔥 Spicy Favorite'
  },
  {
    id: 3,
    name: '🥩 Mutton Biryani',
    price: 950,
    img: '/biryani3.jpg',
    description: 'Tender mutton layered with long-grain rice and traditional spices.',
    badge: '🥩 Meat Lover'
  },
  {
    id: 4,
    name: '🍗 Chicken Tikka Biryani',
    price: 870,
    img: '/biryani5.jpg',
    description: 'Grilled chicken tikka chunks mixed in spicy biryani rice.',
    badge: '🔥 Grilled Favorite'
  },
  {
    id: 5,
    name: '🧀 Paneer Biryani (Veg)',
    price: 720,
    img: '/biryani4.jpg',
    description: 'Soft paneer cubes cooked with aromatic spices and saffron rice.',
    badge: '🌱 Veg Pick'
  },
  {
    id: 6,
    name: '🥩 Beef Biryani',
    price: 880,
    img: '/biryani6.jpg',
    description: 'Juicy beef pieces simmered in rich, spiced biryani masala and rice.',
    badge: '🍖 Rich & Hearty'
  }
];
const burgerProducts = [
  {
    id: 1,
    name: '🍔 Classic Beef Burger',
    price: 700,
    img: '/img.jpg',
    description: 'Juicy grilled beef patty with lettuce, tomato, and cheese.',
    badge: '🔥 Hot Pick'
  },
  {
    id: 2,
    name: '🧀 Cheese Burst Burger',
    price: 850,
    img: '/bg2.jpg',
    description: 'Melting cheese center with a crispy outer patty.',
    badge: '🧀 Cheese Lover'
  },
  {
    id: 3,
    name: '🍗 Zinger Burger',
    price: 780,
    img: '/bg3.jpg',
    description: 'Crispy spicy chicken fillet with mayo and lettuce.',
    badge: '⭐ Bestseller'
  },
  {
    id: 4,
    name: '🍖 BBQ Beef Burger',
    price: 900,
    img: '/bg4.jpg',
    description: 'Grilled beef with BBQ sauce, caramelized onions, and cheddar.',
    badge: '🔥 Smoky BBQ'
  },
  {
    id: 5,
    name: '🍔 Double Decker Burger',
    price: 1100,
    img: '/bg5.jpg',
    description: 'Two patties stacked with cheese, lettuce, and pickles.',
    badge: '🍽️ Big Bite'
  },
  {
    id: 6,
    name: '🌶️ Spicy Jalapeño Burger',
    price: 870,
    img: '/bg6.jpg',
    description: 'Loaded with jalapeños, spicy sauce, and pepper jack cheese.',
    badge: '🌶️ Extra Spicy'
  },
  {
    id: 7,
    name: '🍄 Mushroom Swiss Burger',
    price: 950,
    img: '/bg7.jpg',
    description: 'Sauteed mushrooms with Swiss cheese on a soft bun.',
    badge: '🍄 Gourmet'
  },
  {
    id: 8,
    name: '🌯 Chicken Fajita Burger',
    price: 880,
    img: '/bg8.jpg',
    description: 'Fajita-seasoned chicken with peppers and creamy sauce.',
    badge: '🌶️ Flavor Blast'
  },
  {
    id: 9,
    name: '🥬 Veggie Delight Burger',
    price: 790,
    img: '/bg9.jpg',
    description: 'Grilled veggie patty with fresh greens and tangy mayo.',
    badge: '🌱 Healthy Choice'
  }
];const DessertsProducts = [
  { 
    name: '🍫 Chocolate Lava Cakes', 
    price: 700, 
    img: '/lavacake.jpg', 
    description: 'Warm chocolate cake with a molten center, served fresh.',
    badge: '🔥 Hot Pick'
  },
  { 
    name: '🥭 Mango Mousse', 
    price: 1699, 
    img: '/mangomuse.jpg', 
    description: 'Creamy mango mousse with a tropical fruity finish.',
    badge: '🆕 New'
  },
  { 
    name: '🍓 Strawberry Cheesecake', 
    price: 2699, 
    img: '/stcake.jpg', 
    description: 'Classic New York-style cheesecake topped with strawberries.',
    badge: '⭐ Bestseller'
  },
  { 
    name: '🥮 Baklava', 
    price: 1599, 
    img: '/baklava.jpg', 
    description: 'Rich Middle Eastern pastry made with layers of filo and nuts.',
    badge: '🌍 Traditional'
  },
  { 
    name: '🍯 Gulab Jamun', 
    price: 1060, 
    img: '/gulabjamun.jpg', 
    description: 'Soft milk-solid dumplings soaked in rose-flavored syrup.',
    badge: '💖 Desi Delight'
  },
  { 
    name: '☕ Tiramisu', 
    price: 1060, 
    img: '/trimusu.jpg', 
    description: 'Italian layered dessert with coffee-soaked biscuits and mascarpone cream.',
    badge: '🇮🇹 Italian Fav'
  },
  { 
    name: '🍶 Rasmalai', 
    price: 500, 
    img: '/rasmali.jpg', 
    description: 'Spongy cottage cheese balls in sweet saffron milk.',
    badge: '🎉 Sweet Treat'
  },
  { 
    name: '🍨 Icecreams', 
    price: 650, 
    img: '/icecream.jpg', 
    description: 'Assorted flavors of creamy, chilled ice creams.',
    badge: '❄️ Chilled'
  },
  { 
    name: '🍧 Brownie Sundae', 
    price: 900, 
    img: '/brownie.jpg', 
    description: 'Fudgy brownie topped with ice cream, nuts, and chocolate syrup.',
    badge: '🍫 Rich Delight'
  }
];
const drinkProducts = [
  {
    name: '🌿 Mint Margarita',
    price: 350,
    img: '/d1.jpg',
    description: 'A refreshing blend of mint, lemon, and soda served chilled.',
    badge: '❄️ Chilled'
  },
  {
    name: '☕ Cold Coffee',
    price: 400,
    img: '/d2.jpg',
    description: 'Creamy iced coffee topped with whipped cream.',
    badge: '⭐ Bestseller'
  },
  {
    name: '🍋 Fresh Lime Soda',
    price: 300,
    img: '/d3.jpg',
    description: 'Zesty lime soda available in sweet, salty, or mixed flavor.',
    badge: '🧊 Refreshing'
  },
  {
    name: '🍍 Pina Colada',
    price: 450,
    img: '/d4.jpg',
    description: 'Pineapple and coconut mocktail served over crushed ice.',
    badge: '🍹 Mocktail'
  },
  {
    name: '🍓 Strawberry Shake',
    price: 420,
    img: '/d5.jpg',
    description: 'Smooth strawberry milkshake topped with fresh cream.',
    badge: '🍓 Fresh'
  },
  {
    name: '🍑 Peach Iced Tea',
    price: 390,
    img: '/d6.jpg',
    description: 'Chilled black tea infused with juicy peach flavor.',
    badge: '🌞 Summer Hit'
  }
];
const Products = [
  {
    name: '🌶️ Beef Jalapeno Dynamite Burger',
    price: 700,
    img: '/img.jpg',
    description: 'A fiery beef patty loaded with jalapeños, cheese, and spicy dynamite sauce for a bold bite.',
    badge: '🔥 Spicy'
  },
  {
    name: '🍔 3 Beef Tender Burgers',
    price: 1699,
    img: '/burger2.jpg',
    description: 'A triple treat of juicy, tender beef burgers stacked with fresh veggies and classic sauces.',
    badge: '⭐ Bestseller'
  },
  {
    name: '🍟 Burgers with Fries',
    price: 950,
    img: '/deal.jpg',
    description: 'Classic beef burgers paired perfectly with golden crispy fries — the ultimate combo.',
    badge: '🍽️ Combo'
  },
  {
    name: '🐉 Dragon Chicken with Rice and Noodles',
    price: 2699,
    img: '/chinesedeal.jpg',
    description: 'A spicy and savory Chinese-style dragon chicken dish served with fried rice and stir-fried noodles.',
    badge: '🌶️ Spicy'
  },
  {
    name: '🍜 Khawsa with Chicken Fried Rice',
    price: 1599,
    img: '/cdeal2.jpg',
    description: 'A comforting Burmese Khawsa bowl served alongside flavorful chicken fried rice.',
    badge: '🍲 Chef’s Choice'
  },
  {
    name: '🥩 Dragon Beef and Chicken',
    price: 1060,
    img: '/cdeal3.jpg',
    description: 'A sizzling hot plate of tender beef and chicken tossed in signature dragon sauce.',
    badge: '🔥 Sizzling'
  },
];
const PizzaProducts = [
  { 
    name: '🍕 Margherita', 
    price: 700, 
    img: '/piz1.jpg', 
    description: 'Classic with tomato, mozzarella, and fresh basil',
    badge: '🌿 Classic'
  },
  { 
    name: '🌶️ Pepperoni', 
    price: 1699, 
    img: '/piz2.jpg', 
    description: 'Topped with spicy pepperoni slices and mozzarella',
    badge: '🔥 Spicy'
  },
  { 
    name: '🍗 BBQ Chicken', 
    price: 2699, 
    img: '/piz3.jpg', 
    description: 'Grilled chicken, smoky BBQ sauce, and onions',
    badge: '🍖 BBQ Special'
  },
  { 
    name: '🥦 Vegetarian', 
    price: 1599, 
    img: '/piz4.jpg', 
    description: 'Loaded with mushrooms, olives, bell peppers, and onions',
    badge: '🌱 Veg'
  },
  { 
    name: '🍍 Hawaiian', 
    price: 1060, 
    img: '/piz5.jpg', 
    description: 'A sweet and savory combo of pineapple and ham',
    badge: '🍍 Sweet & Savory'
  },
  { 
    name: '🧀 Four Cheese', 
    price: 1060, 
    img: '/piz6.jpg', 
    description: 'Blend of mozzarella, cheddar, parmesan, and gorgonzola',
    badge: '🧀 Cheesy'
  },
  { 
    name: '🔥 Tandoori Chicken', 
    price: 500, 
    img: '/piz7.jpg', 
    description: 'Spicy tandoori-marinated chicken with red onions',
    badge: '🌶️ Spicy'
  },
  { 
    name: '🌮 Fajita Pizza', 
    price: 650, 
    img: '/piz8.jpg', 
    description: 'Chicken or beef fajita strips, jalapeños, and capsicum',
    badge: '💥 Hot Pick'
  },
  { 
    name: '🥩 Meat Lovers', 
    price: 900, 
    img: '/piz9.jpg', 
    description: 'Loaded with pepperoni, sausage, beef, ham, and bacon',
    badge: '🍖 Loaded'
  }
];
const PopularProducts = [
  { 
    name: '🍤 Shrimp Chowmin', 
    price: 700, 
    img: '/chowmin.jpg',
    badge: '🌟 Bestseller'
  },
  { 
    name: '🥕 Vegetable Chowmin', 
    price: 1699, 
    img: '/noodles.jpg',
    badge: '🌱 Veg'
  },
  { 
    name: '🌶️ Mapo Tafu', 
    price: 2699, 
    img: '/tofu.jpg', 
    description: 'Spicy tofu and minced meat in chili sauce.',
    badge: '🔥 Spicy'
  },
  { 
    name: '🥦 Veg Fried Rice', 
    price: 1599, 
    img: '/veg.jpg',
    badge: '🌱 Veg'
  },
  { 
    name: '🍜 Mix Chowmin', 
    price: 1060, 
    img: '/prawnsnoodles.jpg',
    badge: '✨ Combo'
  },
  { 
    name: '🍝 Hakka Noodles', 
    price: 1060, 
    img: '/hakka.jpg'
  },
  { 
    name: '🥟 Chicken Momos', 
    price: 500, 
    img: '/momos.jpg',
    badge: '💥 New'
  },
  { 
    name: '🍅 Red Sauce Pasta', 
    price: 650, 
    img: '/pasta.jpg',
    badge: '🍅 Tangy'
  },
  { 
    name: '🧀 Alfredo Pasta', 
    price: 900, 
    img: '/alferado.jpg',
    badge: '🧀 Cheesy'
  }
];
const rollProducts = [
  {
    name: '🌯 Chicken Roll',
    price: 450,
    img: '/r1.jpg',
    description: 'Juicy grilled chicken wrapped in soft paratha with tangy sauces.',
    badge: '🔥 Popular'
  },
  {
    name: '🥩 Beef Bihari Roll',
    price: 480,
    img: '/r2.jpg',
    description: 'Tender Bihari-style beef strips in a spicy marinade, wrapped fresh.'
  },
  {
    name: '🍗 Zinger Roll',
    price: 500,
    img: '/r3.jpg',
    description: 'Crispy zinger fillet with lettuce and mayo, rolled in a crispy wrap.',
    badge: '⭐ Bestseller'
  },
  {
    name: '🥛 Chicken Malai Roll',
    price: 470,
    img: '/r4.jpg',
    description: 'Creamy malai chicken grilled to perfection with herbs and wrapped warm.'
  },
  {
    name: '🥬 Vegetable Roll',
    price: 400,
    img: '/r5.jpg',
    description: 'A mix of spicy sautéed veggies and sauces rolled in a soft paratha.',
    badge: '🌱 Veg'
  },
  {
    name: '🧀 Cheese Chicken Roll',
    price: 520,
    img: '/r6.jpg',
    description: 'Melted cheese and chicken chunks combined in a delicious cheesy roll.',
    badge: '🧀 Cheesy'
  }
];
const sandwitchesProducts = [
  { 
    name: '🥪 Grilled Chicken Sandwich', 
    price: 700, 
    img: '/s1.jpg', 
    description: 'Tender grilled chicken breast with lettuce, tomato, and mayo on toasted bread.',
    badge: '🆕 New'
  },
  { 
    name: '🧀 Triple Cheese Burst Sandwich', 
    price: 850, 
    img: '/s2.jpg', 
    description: 'Triple-layered sandwich with chicken, egg, cheese, lettuce, and mayo.',
    badge: '🌟 Bestseller'
  },
  { 
    name: '🐟 Tuna Melt Sandwich', 
    price: 780, 
    img: '/s3.jpg', 
    description: 'Creamy tuna salad with melted cheese on grilled bread.'
  },
  { 
    name: '🍖 BBQ Chicken Slaw Sandwich', 
    price: 900, 
    img: '/s4.jpg', 
    description: 'Slow-cooked shredded chicken in BBQ sauce, topped with coleslaw.'
  },
  { 
    name: '🥗 Veggie Delight Sandwich', 
    price: 1100, 
    img: 's5.jpg', 
    description: 'Fresh lettuce, tomatoes, cucumbers, olives, and cheese with herbed mayo.',
    badge: '🆕 New'
  },
  { 
    name: '🌶️ Spicy Egg & Jalapeño Sandwich', 
    price: 870, 
    img: '/s6.jpg', 
    description: 'Fluffy scrambled eggs with melted cheese and a hint of pepper.',
    isSpicy: true,
    badge: '🌶️ Spicy'
  },
];

export const Home = ({ handleAddToCart,handleToggleWishlist, wishlistItems }) => {



  return (
    <div>
      {/* Animee Deals */}
      <div className="container mt-5">
        <div className="heading-section">
    <h3
  className="bold-heading"
  style={{
    fontWeight: 'bold',
    fontSize: '1.8rem',
    color: '#000',
    display: 'flex',
    alignItems: 'center'
  }}
>
  <span style={{ fontSize: '1.6rem', marginRight: '10px' }}>🍱</span>
  Animee Delights
</h3>


          <h6>Crunchy, spicy, anime-style cravings await you!</h6>
        </div>
        <div className="row mt-4">
          {AnimeeProducts.map((prod, index) => (
            <Animeecards
  key={index}
  product={prod}
  handleAddToCart={handleAddToCart}
  handleToggleWishlist={handleToggleWishlist}
  wishlistItems={wishlistItems}
/>

          ))}
        </div>
      </div>
{/* Burger Deal Section */}
<div className="container mt-5">
  <div className="heading-section">
    <h3
      style={{
        fontWeight: 'bold',
        fontSize: '1.8rem',
        color: '#000',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <span style={{ fontSize: '1.6rem', marginRight: '10px' }}>🍔</span>
     Smash the Hunger
    </h3>
    <h6 style={{ fontSize: '1rem', color: '#666', marginTop: '4px' }}>
      Juicy, cheesy, and oh-so-satisfying burger combos!
    </h6>
  </div>

  <div className="row mt-4">
    {burgerProducts.map((prod, index) => (
      <Cards
        key={index}
        name={prod.name}
        price={prod.price}
        img={prod.img}
        description={prod.description}
         onToggleWishlist={() => handleToggleWishlist(prod)}
              isWished={wishlistItems.some((item) => item.name === prod.name)}
        onAddToCart={() => handleAddToCart(prod)}
      />
    ))}
  </div>
</div>

      {/* Fast Food Deals */}
      <div className="container mt-5">
        <div className="heading-section">
          <h3 style={{ fontWeight: 'bold', fontSize: '1.8rem', color: '#000', display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '1.6rem', marginRight: '10px' }}>🔥</span>
            Fast Food Frenzy
          </h3>
          <h6 style={{ fontSize: '1rem', color: '#666', marginTop: '4px' }}>
Grab-n-go meals that hit the spot every time!
          </h6>
        </div>
        <div className="row mt-4">
          {Products.map((prod, index) => (
            <Cards
              key={index}
              name={prod.name}
              price={prod.price}
              img={prod.img}
            description={prod.description}
 onToggleWishlist={() => handleToggleWishlist(prod)}
              isWished={wishlistItems.some((item) => item.name === prod.name)}
           onAddToCart={() => handleAddToCart(prod)}
            />
          ))}
        </div>
      </div>

      {/* Popular Items */}
      <div className="container mt-5">
        <div className="heading-section">
<h3
  style={{
    fontWeight: 'bold',
    fontSize: '1.8rem',
    color: '#000',
    display: 'flex',
    alignItems: 'center'
  }}
>
  <span style={{ fontSize: '1.6rem', marginRight: '10px' }}>🍜</span>
  Chinese Special
</h3>
<h6>“From noodles to fried rice — taste the magic!”

</h6>


        </div>
        <div className="row mt-4">
          {PopularProducts.map((prod, index) => (
            <Cards
              key={index}
              name={prod.name}
              price={prod.price}
              img={prod.img}
             description={prod.description}
 onToggleWishlist={() => handleToggleWishlist(prod)}
              isWished={wishlistItems.some((item) => item.name === prod.name)}
              onAddToCart={() => handleAddToCart(prod)}
            />
          ))}
        </div>
      </div>
      {/* Pixa */}
      <div className="container mt-5">
        <div className="heading-section">
       <h3
  style={{
    fontWeight: 'bold',
    fontSize: '1.8rem',
    color: '#000',
    display: 'flex',
    alignItems: 'center'
  }}
>
  <span style={{ fontSize: '1.6rem', marginRight: '10px' }}>🍕</span>
  Cheesy Pizza Bliss
</h3>

<h6>Melted cheese, crispy crust – pizza heaven starts here!</h6>

        </div>
        <div className="row mt-4">
          {PizzaProducts.map((prod, index) => (
            <Cards
              key={index}
              name={prod.name}
              price={prod.price}
              img={prod.img}
              description={prod.description}
               onToggleWishlist={() => handleToggleWishlist(prod)}
              isWished={wishlistItems.some((item) => item.name === prod.name)}
              onAddToCart={() => handleAddToCart(prod)}
            />
          ))}
        </div>
      </div>
      {/* burgers Deals */}
      <div className="container mt-5">
        <div className="heading-section">
      <h3
  style={{
    fontWeight: 'bold',
    fontSize: '1.8rem',
    color: '#000',
    display: 'flex',
    alignItems: 'center'
  }}
>
  <span style={{ fontSize: '1.6rem', marginRight: '10px' }}>🍔</span>
  Burger Bonanza
</h3>

<h6>Stacked, saucy, and totally irresistible!</h6>

        </div>
        <div className="row mt-4">
          {burgerProducts.map((prod, index) => (
            <Cards
              key={index}
              name={prod.name}
              price={prod.price}
              img={prod.img}
           description={prod.description}
            onToggleWishlist={() => handleToggleWishlist(prod)}
              isWished={wishlistItems.some((item) => item.name === prod.name)}
              onAddToCart={() => handleAddToCart(prod)}
            />
          ))}
        </div>
      </div>
      {/* Sandwitches Deals */}
      <div className="container mt-5">
        <div className="heading-section">
        <h3
  style={{
    fontWeight: 'bold',
    fontSize: '1.8rem',
    color: '#000',
    display: 'flex',
    alignItems: 'center'
  }}
>
  <span style={{ fontSize: '1.6rem', marginRight: '10px' }}>🥪</span>
  Sandwich Mania
</h3>

<h6>Layered love between slices of joy</h6>

        </div>
        <div className="row mt-4">
          {sandwitchesProducts.map((prod, index) => (
            <Cards
              key={index}
              name={prod.name}
              price={prod.price}
              img={prod.img}
              description={prod.description}
 onToggleWishlist={() => handleToggleWishlist(prod)}
              isWished={wishlistItems.some((item) => item.name === prod.name)}
              onAddToCart={() => handleAddToCart(prod)}
            />
          ))}
        </div>
      </div>
      {/* bbq Food Deals */}
      <div className="container mt-5">
        <div className="heading-section">
        <h3
  style={{
    fontWeight: 'bold',
    fontSize: '1.8rem',
    color: '#000',
    display: 'flex',
    alignItems: 'center'
  }}
>
  <span style={{ fontSize: '1.6rem', marginRight: '10px' }}>🍖</span>
  BBQ Feast Fiesta
</h3>

<h6>Savor the smoky bites, grilled to perfection!</h6>

        </div>
        <div className="row mt-4">
          {bbqProducts.map((prod, index) => (
            <Cards
              key={index}
              name={prod.name}
              price={prod.price}
              img={prod.img}
   description={prod.description}
    onToggleWishlist={() => handleToggleWishlist(prod)}
              isWished={wishlistItems.some((item) => item.name === prod.name)}
              onAddToCart={() => handleAddToCart(prod)}
            />
          ))}
        </div>
      </div>
      {/* biryani Deals */}
      <div className="container mt-5">
        <div className="heading-section">
         <h3
  style={{
    fontWeight: 'bold',
    fontSize: '1.8rem',
    color: '#000',
    display: 'flex',
    alignItems: 'center'
  }}
>
  <span style={{ fontSize: '1.6rem', marginRight: '10px' }}>🍛</span>
  Royal Biryani Treats
</h3>

<h6>Aromatic rice meets bold spices in every spoonful</h6>

        </div>
        <div className="row mt-4">
          { biryaniProducts.map((prod, index) => (
            <Cards
              key={index}
              name={prod.name}
              price={prod.price}
              img={prod.img}
               description={prod.description}
 onToggleWishlist={() => handleToggleWishlist(prod)}
              isWished={wishlistItems.some((item) => item.name === prod.name)}
              onAddToCart={() => handleAddToCart(prod)}
            />
          ))}
        </div>
      </div>
      {/* appetizers Deals */}
      <div className="container mt-5">
        <div className="heading-section">
          <h3
  style={{
    fontWeight: 'bold',
    fontSize: '1.8rem',
    color: '#000',
    display: 'flex',
    alignItems: 'center'
  }}
>
  <span style={{ fontSize: '1.6rem', marginRight: '10px' }}>🧆</span>
  Irresistible Appetizers
</h3>

<h6>Small plates, BIG flavor!</h6>

        </div>
        <div className="row mt-4">
          {appetizerProducts.map((prod, index) => (
            <Cards
              key={index}
              name={prod.name}
              price={prod.price}
              img={prod.img}
             description={prod.description}
 onToggleWishlist={() => handleToggleWishlist(prod)}
              isWished={wishlistItems.some((item) => item.name === prod.name)}
              onAddToCart={() => handleAddToCart(prod)}
            />
          ))}
        </div>
      </div>
      {/* Rolls */}
      <div className="container mt-5">
        <div className="heading-section">
        <h3
  style={{
    fontWeight: 'bold',
    fontSize: '1.8rem',
    color: '#000',
    display: 'flex',
    alignItems: 'center'
  }}
>
  <span style={{ fontSize: '1.6rem', marginRight: '10px' }}>🌯</span>
  Flavor-Packed Rolls
</h3>

<h6>Wrapped to perfection, bursting with taste</h6>

        </div>
        <div className="row mt-4">
          {rollProducts.map((prod, index) => (
            <Cards
              key={index}
              name={prod.name}
              price={prod.price}
              img={prod.img}
            description={prod.description}
             onToggleWishlist={() => handleToggleWishlist(prod)}
              isWished={wishlistItems.some((item) => item.name === prod.name)}
              onAddToCart={() => handleAddToCart(prod)}
            />
          ))}
        </div>
      </div>
      {/*drinks*/}
      <div className="container mt-5">
        <div className="heading-section">
      <h3
  style={{
    fontWeight: 'bold',
    fontSize: '1.8rem',
    color: '#000',
    display: 'flex',
    alignItems: 'center'
  }}
>
  <span style={{ fontSize: '1.6rem', marginRight: '10px' }}>🥤</span>
  Cool Refreshments
</h3>

<h6>Fizz, chill, and flavor in every sip!</h6>

        </div>
        <div className="row mt-4">
          {drinkProducts.map((prod, index) => (
            <Cards
              key={index}
              name={prod.name}
              price={prod.price}
              img={prod.img}
            description={prod.description}
              onAddToCart={() => handleAddToCart(prod)}
            />
          ))}
        </div>
      </div>
      {/* Desserts */}
      <div className="container mt-5">
        <div className="heading-section">
       <h3
  style={{
    fontWeight: 'bold',
    fontSize: '1.8rem',
    color: '#000',
    display: 'flex',
    alignItems: 'center'
  }}
>
  <span style={{ fontSize: '1.6rem', marginRight: '10px' }}>🍨</span>
  Sweet Dessert Dreams
</h3>

<h6>End on a sweet note – treat yourself!</h6>

        </div>
        <div className="row mt-4">
          {DessertsProducts.map((prod, index) => (
            <Cards
              key={index}
              name={prod.name}
              price={prod.price}
              img={prod.img}
             description={prod.description}
 onToggleWishlist={() => handleToggleWishlist(prod)}
              isWished={wishlistItems.some((item) => item.name === prod.name)}
              onAddToCart={() => handleAddToCart(prod)}
            />
          ))}
        </div>
      </div>
      </div>
  );
};
