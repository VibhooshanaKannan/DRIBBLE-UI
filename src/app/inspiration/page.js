'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import CategoryTabs from "../components/CategoryTabs";
import DesignCard from "../components/DesignCard";
import FilterDropdown from "../components/FilterDropdown";
import styles from '../styles/mobile.module.css';
import ImageGallery from '../components/ImageGallery';

export default function MobilePage() {
  const [filter, setFilter] = useState('Popular');
  
  // Sample design showcase data
  const designs = [
    {
      id: 1,
      title: "Smart Watch App UI",
      author: "Emote",
      isTeam: true,
      image: "/images/smartwatch-ui.png",
      likes: 42,
      views: "3.3k"
    },
    {
      id: 2,
      title: "Order Details UI",
      author: "Robin Holesinsky",
      isPro: true,
      image: "/images/order-details.png",
      likes: 29,
      views: "902"
    },
    {
      id: 3,
      title: "Sneaker Store App",
      author: "Nixtio",
      isTeam: true,
      image: "/images/sneaker-app.png",
      likes: 76,
      views: "1.6k"
    },
    {
      id: 4,
      title: "Mood Tracker App",
      author: "Ronas IT | UI/UX Team",
      isTeam: true,
      image: "/images/mobile.png",
      likes: 102,
      views: "6.6k"
    },
    {
      id: 5,
      title: "Health Analytics Dashboard",
      author: "Akshay Hooda",
      isPro: true,
      image: "/images/health-app.png",
      likes: 28,
      views: "374"
    },
    {
      id: 6,
      title: "Nike Store App Concept",
      author: "UIX Maruf Hossen",
      image: "/images/nike-store.png",
      likes: 87,
      views: "1.6k"
    },
    {
      id: 7,
      title: "Trading App Dark Mode",
      author: "Extej UI UX Design Agency",
      isPro: true,
      image: "/images/trading-app.png",
      likes: 297,
      views: "7.1k"
    },
    {
      id: 8,
      title: "Online Course App",
      author: "Uzzal mondal",
      isPro: true,
      image: "/images/online-course.png",
      likes: 297,
      views: "7.1k"
    },
  ];

  // Category tabs seen in the image
  const categories = [
    "Discover", "Animation", "Branding", "Illustration", 
    "Mobile", "Print", "Product Design", "Typography", "Web Design"
  ];

  return (
    <>
      <Navbar />
      <main className={styles.container}>
        <div className={styles.filtersRow}>
          <FilterDropdown value={filter} onChange={setFilter} options={["Popular", "New & Noteworthy", "Recently Added"]} />
          
          <CategoryTabs categories={categories} activeCategory="Mobile" />
          
          <button className={styles.filtersButton}>
            <span>Filters</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="8" x2="20" y2="8"></line>
              <line x1="8" y1="16" x2="16" y2="16"></line>
              <line x1="10" y1="4" x2="10" y2="12"></line>
              <line x1="14" y1="12" x2="14" y2="20"></line>
            </svg>
          </button>
        </div>

        <div className={styles.designGrid}>
          {designs.map(design => (
            <DesignCard key={design.id} design={design} />
          ))}
        </div>
        
        <div className={styles.paginationControls}>
          <button className={styles.loadMoreButton}>Sign Up to continue</button>
          <div className={styles.pageNavigation}>
            <span>Page 1 of 42</span>
            <div className={styles.pageButtons}>
              <button disabled>Previous</button>
              <button>Next</button>
            </div>
          </div>
        </div>
      </main>
      <ImageGallery/> 
      <Footer />
    </>
  );
}