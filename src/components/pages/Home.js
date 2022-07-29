import { useState } from 'react';
import { newProducts } from '../../utils/Database';
import CategoryProducts from '../includes/CategoryProducts';
import Header from '../includes/Header';
import Hero from '../includes/Hero';
import HomeProducts from '../includes/HomeProducts';
import Navbar from '../includes/Navbar';
import SubHero from '../includes/SubHero';
import Testimonial from '../Testimonial';

export default function Home() {
  const [newests, setNewests] = useState(newProducts);
  return (
    <div>
      <Navbar />
      <Header />
      <Hero />
      <SubHero />
      <CategoryProducts />
      <HomeProducts products={newests} />
      <Testimonial />
    </div>
  );
}
