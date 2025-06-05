import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './Components/Navbar/Navbar'
import { Cards } from './Components/Cards/Cards'
import { Footer } from './Components/Footer/Index'
import { Carousel } from 'bootstrap'
import img2 from "/ec.jpg"
import img7 from "/img7.jpg"


function App() {
 // const [count, setCount] = useState(0)
 let Products=[
  {name:"product1",price:1000, img:"/public/img1.jpg"},
  {name:"product2",price:1040,},
  {name:"product3",price:1040},
  {name:"product4",price:1240},
  {name:"product5",price:140},
  {name:"product1",price:10060},


 ];



  return (
    <>
     <Navbar/>

<h5 style={{ fontWeight: 'bold', fontSize: '1.6rem', color: '#000' }}>
  Summer Deals..
</h5>
    <div className="container mt-4">
          <div className="row">

 
{
  Products.map((prod,index)=>{
return<Cards img={img2} name={prod.name} price={prod.price} key={index}/>
  })
}   

          </div>
         </div>

<h5 style={{ fontWeight: 'bold', fontSize: '1.6rem', color: '#000' }}>
   Popular Items..
   </h5>
      <div className="container mt-4">
          <div className="row">

  <row>
{
  Products.map((prod,index)=>{
return<Cards name={prod.name} price={prod.price} key={index}/>
  })
}   
  </row>
          </div>
         </div>  

     
     <Footer/>
    </>
  )
}

export default App
