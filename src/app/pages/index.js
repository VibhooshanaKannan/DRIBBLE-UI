"use client";
import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faGlobe,
  faHeart,
  faBookmark,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons"; // If you need brand icons

library.add(faEnvelope, faGlobe, faHeart, faBookmark, faArrowRight, fab);

export default function Home() {
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);

      // Check which section is in view
      sectionRefs.current.forEach((section, index) => {
        if (
          section &&
          section.getBoundingClientRect().top < window.innerHeight * 0.75
        ) {
          setActiveImageIndex(null); // Reset when scrolling to new section
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleImageClick = (index) => {
    setActiveImageIndex(index === activeImageIndex ? null : index);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>CRM Dashboard App Design | Ronas IT</title>
        <meta
          name="description"
          content="CRM Dashboard App Design by Ronas IT"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Navbar component would be imported here */}
      {/* <Navbar /> */}

      <main className={styles.main}>
        <section
          className={styles.heroSection}
          ref={(el) => (sectionRefs.current[0] = el)}
        >
          <h1 className={styles.title}>CRM Dashboard App Design</h1>

          <div className={styles.companyInfo}>
            <div className={styles.companyLogo}>
              <Image
                src="/ronas_logo.jpg"
                alt="Ronas IT Logo"
                width={50}
                height={50}
                className={styles.logoImage}
              />
            </div>
            <div className={styles.companyDetails}>
              <h2>Ronas IT | UI/UX Team</h2>
              <p className={styles.availableTag}>Available for work</p>
              <p className={styles.followBtn}>Follow</p>
              <div className={styles.contactInfo}>
                <p>
                  <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />{" "}
                  hello@ronasit.com
                </p>
                <p>
                  <FontAwesomeIcon icon={faGlobe} className={styles.icon} />{" "}
                  ronasit.com
                </p>
              </div>
            </div>
            <div className={styles.ctaButtons}>
              <button className={styles.likeButton}>
                <FontAwesomeIcon icon={faHeart} className={styles.icon} />
              </button>
              <button className={styles.bookmarkButton}>
                <FontAwesomeIcon icon={faBookmark} className={styles.icon} />
              </button>
              <button className={styles.contactButton}>Get in touch</button>
            </div>
          </div>
        </section>

        <section
          className={`${styles.imageSection} ${
            activeImageIndex === 0 ? styles.expanded : ""
          }`}
          ref={(el) => (sectionRefs.current[1] = el)}
        >
          <div
            className={styles.imageContainer}
            onClick={() => handleImageClick(0)}
          >
            <Image
              src="/crm-dashboard.jpg" // Replace with your actual image
              alt="CRM Dashboard"
              layout="responsive"
              width={1200}
              height={800}
              className={styles.mainImage}
              priority
            />
            <div
              className={`${styles.imageOverlay} ${
                activeImageIndex === 0 ? styles.hidden : ""
              }`}
            >
              <p>Click to expand</p>
            </div>
          </div>
        </section>

        <section
          className={styles.ctaSection}
          ref={(el) => (sectionRefs.current[2] = el)}
        >
          <div
            className={`${styles.ctaBox} ${isScrolled ? styles.visible : ""}`}
          >
            <h2>💌 Have a web application idea? Let's make it together!</h2>
          </div>
        </section>

        <section
          className={`${styles.imageSection} ${
            activeImageIndex === 1 ? styles.expanded : ""
          }`}
          ref={(el) => (sectionRefs.current[3] = el)}
        >
          <div
            className={styles.imageContainer}
            onClick={() => handleImageClick(1)}
          >
            <Image
              src="/crm-details.png" // Replace with your second image
              alt="CRM Details"
              layout="responsive"
              width={1200}
              height={800}
              className={styles.mainImage}
            />
            <div
              className={`${styles.imageOverlay} ${
                activeImageIndex === 1 ? styles.hidden : ""
              }`}
            >
              <p>Click to expand</p>
            </div>
          </div>
        </section>

        <section
          className={styles.descriptionSection}
          ref={(el) => (sectionRefs.current[4] = el)}
        >
          <div className={styles.descriptionBox}>
            <h2>Hello everyone!</h2>
            <p>
              Our team recently crafted a design concept for a CRM application
              where businesses can store information about their clients. Here's
              a brief overview of its features.
            </p>
            <p>
              The application includes a dashboard with client information,
              their engagement status, client filtering, and search
              capabilities. It also displays charts with key performance
              indicators.
            </p>
            <p>
              The interface uses calm pastel tones, reflecting the app's
              business-oriented focus and conveying a serious, professional
              mood.
            </p>
            <p>
              The main characteristic of this design is its neutrality, making
              it suitable for various businesses.
            </p>
          </div>
        </section>
        <section
          className={`${styles.imageSection} ${
            activeImageIndex === 2 ? styles.expanded : ""
          }`}
          ref={(el) => (sectionRefs.current[5] = el)}
        >
          <div
            className={styles.imageContainer}
            onClick={() => handleImageClick(2)}
          >
            <Image
              src="/crm-details-2.png" // Replace with your third image
              alt="CRM Details 2"
              layout="responsive"
              width={1200}
              height={800}
              className={styles.mainImage}
            />
            <div
              className={`${styles.imageOverlay} ${
                activeImageIndex === 2 ? styles.hidden : ""
              }`}
            >
              <p>Click to expand</p>
            </div>
          </div>
        </section>
        <section
          className={`${styles.imageSection} ${
            activeImageIndex === 3 ? styles.expanded : ""
          }`}
          ref={(el) => (sectionRefs.current[6] = el)}
        >
          <div
            className={styles.imageContainer}
            onClick={() => handleImageClick(3)}
          >
            <Image
              src="/crm-details-3.png" // Replace with your fourth image
              alt="CRM Details 3"
              layout="responsive"
              width={1200}
              height={800}
              className={styles.mainImage}
            />
            <div
              className={`${styles.imageOverlay} ${
                activeImageIndex === 3 ? styles.hidden : ""
              }`}
            >
              <p>Click to expand</p>
            </div>
          </div>
        </section>
        <section
          className={styles.authorSection}
          ref={(el) => (sectionRefs.current[7] = el)}
        >
          <div className={styles.authorBox}>
            <div className={styles.authorLogo}>
              <Image
                src="/ronas_logo.jpg"
                alt="Ronas IT Logo"
                width={100}
                height={100}
              />
            </div>
            <h2>Ronas IT | UI/UX Team</h2>
            <p>We make complex applications simple for users🖤</p>

            <button className={styles.contactButton}>Get in touch</button>

            <div className={styles.contactDetails}>
              <p>
                <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />{" "}
                hello@ronasit.com
              </p>
              <p>
                <FontAwesomeIcon icon={faGlobe} className={styles.icon} />{" "}
                ronasit.com
              </p>
            </div>
          </div>
        </section>

        <section
          className={styles.portfolioSection}
          ref={(el) => (sectionRefs.current[8] = el)}
        >
          <div className={styles.portfolioBox}>
            <h2>More by Ronas IT | UI/UX Team</h2>
            <Link href="/profile" className={styles.viewProfile}>
              View profile{" "}
              <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
            </Link>

            <div className={styles.portfolioGrid}>
              <div className={styles.portfolioItem}>
                <Link href="/fintech-web-app-design">
                  <div className={styles.imageWrapper}>
                    <Image
                      src="/fintech.png"
                      alt="Fintech Web App"
                      width={300}
                      height={160}
                      className={styles.portfolioImage}
                    />
                    <div className={styles.hoverIcons}>
                      <FontAwesomeIcon
                        icon={faHeart}
                        className={styles.iconAction}
                      />
                      <FontAwesomeIcon
                        icon={faBookmark}
                        className={styles.iconAction}
                      />
                    </div>
                  </div>
                  <h3>Fintech Web App Design</h3>
                  <p>From $5,000</p>
                </Link>
              </div>

              <div className={styles.portfolioItem}>
                <Link href="/recruitment-dashboard">
                  <div className={styles.imageWrapper}>
                    <Image
                      src="/recruitment-dashboard.png"
                      alt="Recuritment Dashboard"
                      width={300}
                      height={160}
                      className={styles.portfolioImage}
                    />
                    <div className={styles.hoverIcons}>
                      <FontAwesomeIcon
                        icon={faHeart}
                        className={styles.iconAction}
                      />
                      <FontAwesomeIcon
                        icon={faBookmark}
                        className={styles.iconAction}
                      />
                    </div>
                  </div>
                  <h3>Recruitment Dashboard</h3>
                  <p>From $5,000</p>
                </Link>
              </div>
              <div className={styles.portfolioItem}>
                <Link href="/recruitment-web-app">
                  <div className={styles.imageWrapper}>
                    <Image
                      src="/recuritment.png"
                      alt="Recuritment Dashboard"
                      width={300}
                      height={160}
                      className={styles.portfolioImage}
                    />
                    <div className={styles.hoverIcons}>
                      <FontAwesomeIcon
                        icon={faHeart}
                        className={styles.iconAction}
                      />
                      <FontAwesomeIcon
                        icon={faBookmark}
                        className={styles.iconAction}
                      />
                    </div>
                  </div>
                  <h3>Recruitment Web App</h3>
                  <p>From $5,000</p>
                </Link>
              </div>
              <div className={styles.portfolioItem}>
                <Link href="/web-design-saas">
                  <div className={styles.imageWrapper}>
                    <Image
                      src="/web-design.png"
                      alt="Web design SaaS"
                      width={300}
                      height={160}
                      className={styles.portfolioImage}
                    />
                    <div className={styles.hoverIcons}>
                      <FontAwesomeIcon
                        icon={faHeart}
                        className={styles.iconAction}
                      />
                      <FontAwesomeIcon
                        icon={faBookmark}
                        className={styles.iconAction}
                      />
                    </div>
                  </div>
                  <h3>Web design SaaS dashboard</h3>
                  <p>From $5,000</p>
                </Link>
              </div>
              <div className={styles.portfolioItem}>
                <Link href="/mobile-app-redesign">
                  <div className={styles.imageWrapper}>
                    <Image
                      src="/mobile-app-redesign.jpg"
                      alt="Mobil App Re-design"
                      width={300}
                      height={160}
                      className={styles.portfolioImage}
                    />
                    <div className={styles.hoverIcons}>
                      <FontAwesomeIcon
                        icon={faHeart}
                        className={styles.iconAction}
                      />
                      <FontAwesomeIcon
                        icon={faBookmark}
                        className={styles.iconAction}
                      />
                    </div>
                  </div>
                  <h3>Mobile App Redesign</h3>
                  <p>From $5,000</p>
                </Link>
              </div>
              <div className={styles.portfolioItem}>
                <Link href="/ecommerce-web-app">
                  <div className={styles.imageWrapper}>
                    <Image
                      src="/ecommerce.png"
                      alt="Ecommerce Web App"
                      width={300}
                      height={160}
                      className={styles.portfolioImage}
                    />
                    <div className={styles.hoverIcons}>
                      <FontAwesomeIcon
                        icon={faHeart}
                        className={styles.iconAction}
                      />
                      <FontAwesomeIcon
                        icon={faBookmark}
                        className={styles.iconAction}
                      />
                    </div>
                  </div>
                  <h3>Ecommerce Web App design</h3>
                  <p>From $5,000</p>
                </Link>
              </div>
              <div className={styles.portfolioItem}>
                <Link href="/web-design-audit">
                  <div className={styles.imageWrapper}>
                    <Image
                      src="/web-audit.jpg"
                      alt="Web design Audit"
                      width={300}
                      height={160}
                      className={styles.portfolioImage}
                    />
                    <div className={styles.hoverIcons}>
                      <FontAwesomeIcon
                        icon={faHeart}
                        className={styles.iconAction}
                      />
                      <FontAwesomeIcon
                        icon={faBookmark}
                        className={styles.iconAction}
                      />
                    </div>
                  </div>
                  <h3>Web design Audit</h3>
                  <p>From $5,000</p>
                </Link>
              </div>
              <div className={styles.portfolioItem}>
                <Link href="/mobile-app-ui-ux">
                  <div className={styles.imageWrapper}>
                    <Image
                      src="/mobile-app.png"
                      alt="mobile app"
                      width={300}
                      height={160}
                      className={styles.portfolioImage}
                    />
                    <div className={styles.hoverIcons}>
                      <FontAwesomeIcon
                        icon={faHeart}
                        className={styles.iconAction}
                      />
                      <FontAwesomeIcon
                        icon={faBookmark}
                        className={styles.iconAction}
                      />
                    </div>
                  </div>
                  <h3>Mobile App UI/UX design</h3>
                  <p>From $5,000</p>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}