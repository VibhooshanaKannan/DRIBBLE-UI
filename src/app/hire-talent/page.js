// pages/index.js
"use client";
import Image from 'next/image';
import styles from '../styles/Home2.module.css';
import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
export default function Home2() {
  return (
    <><Navbar/>
    <div className={styles.container}>
      {/* Main Heading */}
      <h1 className={styles.mainHeading}>Find the perfect designer for your business.</h1>
      <h3 className={styles.subHeading}>Work with the most talented and accomplished designers in the world on a freelance, contract, part-time, or full-time basis.</h3>

      {/* Three Main Boxes */}
      <div className={styles.boxContainer}>
        {/* Box 1 */}
        <div className={styles.card}>
          <h2>Hire a freelancer</h2>
          <p>Hire and pay designers — no payment needed until project terms are final.</p>
          <p className={styles.priceFree}>Free</p>
          <ul>
            <li>Find a designer</li>
            <li>World-class talent</li>
            <li>Payments, data, and IP are secure</li>
            <li>Payment held until project is final</li>
            <li>No hidden costs – 2-5% platform fee</li>
          </ul>
        </div>

        {/* Box 2 */}
        <div className={styles.card}>
          <h2>Post a job</h2>
          <p>Tap into our community and hire for full-time or part-time roles.</p>
          <p className={styles.priceBasic}>$150 /month</p>
          <ul>
            <li>Post a job</li>
            <li>No placement fees</li>
            <li>Hire for full-time, part-time, or contract roles</li>
            <li>Remote, onsite, or hybrid</li>
          </ul>
        </div>

        {/* Box 3 */}
        <div className={styles.card}>
          <h2>Hiring Suite</h2>
          <p>Make finding and hiring designers easier than ever with premium access.</p>
          <p className={styles.pricePremium}>$300 /month</p>
          <ul>
            <li>Get started</li>
            <li>Highlight and pin job listings</li>
            <li>Pin messages to designers</li>
            <li>Ad-free browsing</li>
            <li>VIP Customer Support</li>
          </ul>
        </div>
      </div>

      {/* Section 2 - Video Left */}
      <div className={styles.mediaSection}>
      <div className={styles.mediaSection}>
        <Image src="/images/PUBLIC.png" alt="Stand out" width={500} height={300} className={styles.image} />
        </div>
        <div>
          <h2>Finding and paying talent couldn’t be easier.</h2>
          <p>Search for members of our community that meet your project’s requirements. Send them a proposal request — once you’ve both agreed to the terms seamlessly pay on Dribbble. To ensure you’re 100% happy, we’ll hold your payment until the project is complete.</p>
        </div>
      </div>

      {/* Section 3 - Text Left, Video Right */}
      <div className={styles.mediaSectionReverse}>
        <div>
          <h2>Post on the #1 job board for hiring designers.</h2>
          <p>Gain access to the most talented and accomplished designer pool in the world. Link directly to your application form or website for ease of access.</p>
        </div>
        <div className={styles.mediaSection}>
        <Image src="/images/standout.png" alt="Stand out" width={500} height={300} className={styles.image} />
        </div>
      </div>

      {/* Section 4 - Image Left, Text Right */}
      <div className={styles.mediaSection}>
        <Image src="/images/stand.png" alt="Stand out" width={500} height={300} className={styles.image} />
        <div>
          <h2>Stand out in the crowd.</h2>
          <p>Hiring Suite subscribers get access to: Featured and pinned job posts, Featured and pinned messages, Ad-free browsing.</p>
        </div>
      </div>

      {/* Section 5 - Final Banner */}
      <div className={styles.finalBanner}>
        <h2>The most design-forward companies on the planet hire designers from Dribbble.</h2>
        <p>Our community partners with some of the most valuable companies on the planet.</p>
        <Image src="/images/logos.png" alt="Partner logos" width={1100} height={200} />
      </div>
    </div>
     <Footer/></>
  );
}
