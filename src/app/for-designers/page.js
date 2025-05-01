"use client";
import React from "react";
import styles from "../styles/HeroSection.module.css"; // Import the CSS module
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import ImageGallery from "../components/ImageGallery";
import ImageGallery2 from "../components/ImageGallery2";
const HeroSection = () => {
  return (
    <>
      <Navbar />
      <div className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.leftSection}>
            <p className={styles.forDesigners}>FOR DESIGNERS</p>
            <h1 className={styles.mainHeading}>
              Join the world's best creative community
            </h1>
            <p className={styles.subText}>
              Build your brand, grow your skills, and land your dream projects
              all on Dribbble.
            </p>
            <div className={styles.buttons}>
              <a href="#" className={styles.createProfileButton}>
                Create your profile
              </a>
              <a href="#" className={styles.hiringDesignersLink}>
                Hiring designers?
              </a>
            </div>
          </div>
          <div className={styles.rightSection}>
            <img
              src="/images/dribble-community.png"
              alt="Dribbble Community"
              className={styles.communityImage}
            />
          </div>
        </div>

        <div className={styles.infoSection}>
          <div className={styles.container}>
            <h2 className={styles.infoHeading}>
              Where millions of designers learn, share, and get hired
            </h2>
            <p className={styles.infoText}>
              Since 2009, Dribbble has been the go-to destination for millions
              of designers worldwide to find inspiration, grow their portfolios,
              connect with top talent, and find new opportunities. Whether
              you're a new designer or a seasoned pro, join the millions of
              designers who started and grew a successful design career on
              Dribbble.
            </p>
          </div>
          <ImageGallery2 />
        </div>

        <div className={styles.testimonialSection}>
          <div className={styles.testimonialContainer}>
            <div className={styles.testimonialImageWrapper}>
              <img
                src="/images/pablo.jpg"
                alt="Pablo Stanley"
                className={styles.testimonialImage}
              />
              <div className={styles.playButtonOverlay}>
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <circle cx="30" cy="30" r="30" fill="black" opacity="0.7" />
                  <polygon points="24,20 40,30 24,40" fill="white" />
                </svg>
              </div>
            </div>
            <div className={styles.testimonialContent}>
              <p className={styles.quote}>
                “With just an internet connection and some design skills,
                creators can make a living from anywhere in the world, no matter
                their race, gender, or background."
              </p>
              <p className={styles.author}>
                Pablo Stanley –{" "}
                <span className={styles.role}>Cofounder @ Bueno</span>
              </p>
              <button className={styles.watchButton}>
                <svg
                  className={styles.buttonIcon}
                  width="16"
                  height="16"
                  fill="currentColor"
                >
                  <circle cx="8" cy="8" r="8" />
                  <polygon points="6,5 11,8 6,11" fill="white" />
                </svg>
                Watch Pablo's story
              </button>
            </div>
          </div>
        </div>

        <div className={styles.portfolioSection}>
          <div className={styles.portfolioContainer}>
            <div className={styles.portfolioImage}>
              <video
                src="/videos/portfolio.mp4"
                autoPlay
                muted
                loop
                playsInline
                className={styles.portfolioMedia}
              />
            </div>
            <div className={styles.portfolioContent}>
              <h2 className={styles.portfolioHeading}>Build your portfolio</h2>
              <p className={styles.portfolioText}>
                Showcase your design work and start building your audience.
              </p>
              <p className={styles.portfolioText}>
                What have you been working on? Show the world. Sharing your
                design work on Dribbble helps you attract hiring managers,
                business owners, and recruiters who may want to hire you. Upload
                your latest project work now!
              </p>
              <button className={styles.portfolioButton}>Share work</button>
            </div>
          </div>
        </div>

        <div className={styles.portfolioSection1}>
          <div className={styles.portfolioContainer1}>
            {/* Text Content (Left Side) */}
            <div className={styles.portfolioContent1}>
              <h2 className={styles.portfolioHeading1}>Find work</h2>
              <p className={styles.portfolioText1}>
                Browse design jobs and find your next career opportunity.
              </p>
              <p className={styles.portfolioText1}>
                Some of the world’s best design-forward companies including
                Apple, Airbnb, IDEO, Meta, Google, Shopify and tens of thousands
                more hire creatives on. Find your next project today!
              </p>
              <button className={styles.portfolioButton1}>
                View Job Board
              </button>
            </div>

            {/* Video (Right Side with Background) */}
            <div className={styles.portfolioVideoWrapper1}>
              <div className={styles.portfolioImage1}>
                <video
                  src="/videos/work.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className={styles.portfolioMedia1}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.exploreSection}>
        <h2 className={styles.exploreSubheading}>Start exploring</h2>
        <h1 className={styles.exploreHeading}>
          Whether you’re a new or seasoned designer, explore resources to grow your career.
        </h1>

        {/* Two Boxes */}
        <div className={styles.boxContainer}>
          <div className={styles.boxViolet}>
            <h2>Free design resources</h2>
            <ul>
              <li>Design Fundamentals</li>
              <li className={styles.hoverPink}>Freelance Design</li>
            </ul>
          </div>

          <div className={styles.boxGreen}>
            <h2>Explore the community</h2>
            <ul>
              <li className={styles.hoverPink}>
                Trending Designs: Explore popular designs to inspire you
              </li>
              <li className={styles.hoverPink}>
                Playoffs: Work designers are riffing on
              </li>
              <li className={styles.hoverPink}>
                Community Blog: Interviews, design stories, and more
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.brandSection}>
        <h2 className={styles.brandHeading}>Build your brand & unlock new opportunities with Dribbble Pro</h2>
        <button className={styles.getStartedButton}>Get Started</button>
        <p className={styles.quote}>
          “If I’ve made one investment that’s truly paid off, it would be paying for Dribbble Pro. Love the projects that I get from there.”
          <br />
          — Kassie Scribner
        </p>
      </div>
      </div>

      </div>
      <ImageGallery />
      <Footer />
    </>
  );
};

export default HeroSection;
