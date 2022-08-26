import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { newProducts } from '../../utils/Database';
import CategoryProducts from '../includes/CategoryProducts';
import Footer from '../includes/Footer';
import Header from '../includes/Header';
import Hero from '../includes/Hero';
import HomeProducts from '../includes/HomeProducts';
import Navbar from '../includes/Navbar';
import Partner from '../includes/Partner';
import SubHero from '../includes/SubHero';
import Testimonial from '../Testimonial';

export default function Home() {
  //document.cookie = 'cart=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  const [newests, setNewests] = useState(newProducts);
  const [cookies, setCookies] = useCookies(['cart']);
  const [cart, setCart] = useState(cookies.cart);
  console.log(cookies);
  function handleCookies(event) {
    let productId = event.target.getAttribute('product-id');
    let productInstance = newests.filter(function (currentValue, index) {
      return currentValue.id == productId;
    });
    typeof cart != 'undefined'
      ? cart.push(productInstance[0])
      : setCart(productInstance);

    setCookies('cart', cart, {
      path: '/',
      maxAge: 2000000,
    });
    console.log(cookies.cart);
  }

  // console.log(cookies.cart);
  // useEffect(() => {
  //   setCart(cookies.cart);
  // }, []);

  return (
    <div>
      <Navbar />
      {/* {cart ? <Header cart={cart} /> : <Header />} */}
      <Header cart={cart} />
      <Hero />
      <SubHero />
      <CategoryProducts />
      <HomeProducts products={newests} handleCookies={handleCookies} />
      <Testimonial />
      <Partner />
      <Footer />
    </div>
  );
}
