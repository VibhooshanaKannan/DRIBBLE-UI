// app/careers/page.js
"use client";
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import styles from "../styles/careers.module.css";
import Image from "next/image";

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        {/* Navigation */}
        <nav className={styles.navigation}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="/about" className={styles.navLink}>
                About us
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="/careers" className={styles.navLink}>
                Careers at Dribbble
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="/media-kit" className={styles.navLink}>
                Media kit
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="/customer-stories" className={styles.navLink}>
                Customer stories
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="/advertise" className={styles.navLink}>
                Advertise
              </a>
            </li>
          </ul>
        </nav>

        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.badge}>Careers at Dribbble</div>

          <h1 className={styles.title}>
            Join us in helping bring the world's creative ideas to life
          </h1>

          <p className={styles.description}>
            Our mission is to provide support at every stage of a creative's
            journey; whether that's learning the craft, showcasing portfolio
            work and building an audience, or finding freelance or full-time
            jobs at some of the world's leading design-forward companies. We are
            building the platform that helps designers level up their creative
            careers.
          </p>
        </div>
        <Image
          src="/images/group.png"
          alt="Creative Journey"
          width={1000}
          height={700}
          className={styles.creativeImage}
        />

        <div className={styles.dualSection}>
          <div className={styles.dualText}>
            <h2>A culture of communication, collaboration & connection</h2>
            <p>
              We’ve been fully remote since day one, and are building a fully
              distributed team across North America. We believe that creative
              collaboration can happen anywhere, and that working remotely
              shouldn’t have to mean sacrificing a sense of cohesion, community,
              and connection. We've seen that by combining thoughtful
              collaboration, frequent communication, and the freedom for people
              to be their authentic selves, you can do your best work and
              inspire others to do the same.
            </p>
          </div>
          <div className={styles.dualImage}>
            <Image
              src="/images/remote.png"
              alt="Remote Collaboration"
              width={500}
              height={400}
              className={styles.remoteImage}
            />
          </div>
          <div className={styles.valuesSection}>
  <h2>Our values guide everything</h2>
  <p>
    Our values are part of who we are, what we believe in, what we aspire to be, and they are reflected in our actions.
    They are our commitment to one another, and the collective personality of our organization. We always strive to lean 
    into the fact that when properly practiced, sometimes our values will push us outside of our comfort zone.
  </p>
</div>
        </div>
        <div className={styles.valuesGrid}>
  <div className={styles.valueCard}>
    <h3>01 — We are all owners</h3>
    <p>
      Every day, we take the initiative and accept the responsibility—with integrity and courage—to make our company better. 
      We believe that raising the bar is what we owe to each other. We are committed to pursuing learning, innovation, and growth together.
    </p>
  </div>

  <div className={styles.valueCard}>
    <h3>02 — Help customers succeed</h3>
    <p>
      We come to work every day committed to driving success for our customers. We create value for our community by building and 
      providing meaningful solutions to solve our customer's problems and needs. We overcome obstacles, find creative solutions and 
      deliver exceptional results. We’re only successful if our customers are.
    </p>
  </div>

  <div className={styles.valueCard}>
    <h3>03 — Take action, deliver results</h3>
    <p>
      To make the most impact, we need to solve the most important problems. We measure the results of our work so we can continue to improve. 
      We are relentless in our pursuits of major victories and humble in our successes.
    </p>
  </div>

  <div className={styles.valueCard}>
    <h3>04 — Bring good vibes</h3>
    <p>
      Our success is driven by our ability to build relationships. We have the courage to foster trust, knowing that it will lead to being able 
      to be our authentic selves, and the ability to communicate and collaborate more effectively together. Paramount to maintaining this inclusive 
      and creative culture is respect for the opinions, ideas, and feelings of others.
    </p>
  </div>
</div>
<div className={styles.peopleSection}>
  <h2>People are what matters</h2>

  <div className={styles.testimonialRow}>
    <div className={styles.testimonial}>
      <img src="/images/ashley.png" alt="Ashley Melanson" className={styles.avatar} />
      <p>"Even as a remote team, Dribbble still fosters a cross-collaborative culture and that’s pretty amazing to me. It’s rewarding to feel like you can make an impact across all areas of the company."</p><strong>Ashley Melanson</strong><br />
      <span>Senior Analytics Engineering Manager</span>
    </div>

    <div className={styles.testimonial}>
      <img src="/images/omar.png" alt="Mohamed Omar" className={styles.avatar} />
      <p>"It took me no time at all to realize that Dribbble has figured out how to do remote work the right way. From the interview process to my onboarding to my current day-to-day work, I’ve been given all the time, resources and support I need to learn and excel at my job. The fact that my colleagues are fun, kind and smart is just the icing on the cake.</p> <strong>Mohamed Omar</strong><br />
      <span>Lead Front End Engineer</span>
    </div>

    <div className={styles.testimonial}>
      <img src="/images/marlee.png" alt="Marlee Silverstein" className={styles.avatar} />
      <p>"Not only are my teammates crazy talented, they’re also some of the genuinely nicest people you could ever meet."</p>
      <strong>Marlee Silverstein</strong><br />
      <span>Director of Customer Support</span>
    </div>
  </div>
</div>
<div className={styles.perksSection}>
  <div className={styles.perksContent}>
    <div className={styles.perksText}>
      <h2>Perks and benefits</h2>
      <p>
        Our benefits have been designed with our philosophy about remote work in mind: that it’s the best way to support
        our team in working where they feel most inspired, productive, comfortable and creative. We’re committed to
        providing our team with the freedom and flexibility that comes with working remotely, and support our team by
        providing everyone with the tools you need to do your best work, in the work environment of your choice.
      </p>
      <p>
        While we offer competitive and comprehensive benefits, lots of other organizations can offer you those. We also
        offer a rarer opportunity: The ability to have a significant impact on the livelihoods and careers of our
        customers, working on a platform that operates at (a quickly growing) scale.
      </p>
    </div>

    <div className={styles.perksImage}>
      <Image
        src="/images/perks.png"
        alt="Perks and Benefits"
        width={500}
        height={400}
        className={styles.image}
      />
    </div>
  </div>
</div>
<div className={styles.perkListSection}>
  <h2>Our Perks</h2>
  <div className={styles.perkList}>
    <div className={styles.perkItem}>
      <h3 className={styles.perkTitle}>Work from anywhere</h3>
      <p>We are a 100% distributed team.</p>
    </div>

    <div className={styles.perkItem}>
      <h3 className={styles.perkTitle}>Stay healthy</h3>
      <p>Generous medical and dental for both you and your dependents.</p>
    </div>

    <div className={styles.perkItem}>
      <h3 className={styles.perkTitle}>Buff up</h3>
      <p>Gym and exercise reimbursements so that you stay fit.</p>
    </div>

    <div className={styles.perkItem}>
      <h3 className={styles.perkTitle}>Pro tools</h3>
      <p>MacBook Pro (or Air) and all the tools you need to do a great job.</p>
    </div>

    <div className={styles.perkItem}>
      <h3 className={styles.perkTitle}>Unplug</h3>
      <p>Get at least 22 days of paid time off every year + 20 official company holidays.</p>
    </div>

    <div className={styles.perkItem}>
      <h3 className={styles.perkTitle}>Get your learn on</h3>
      <p>We cover books, conferences, courses… get smarter!</p>
    </div>

    <div className={styles.perkItem}>
      <h3 className={styles.perkTitle}>Paid family leave</h3>
      <p>Time and support to get to know your newest little people when they make their debut.</p>
    </div>

    <div className={styles.perkItem}>
      <h3 className={styles.perkTitle}>Perk up</h3>
      <p>Monthly coffee budget so you’re not just loitering at coffee shops.</p>
    </div>

    <div className={styles.perkItem}>
      <h3 className={styles.perkTitle}>Save up</h3>
      <p>Put pre-tax savings into a 401k or RRSP. We’ll also match a portion of your contributions.</p>
    </div>

    <div className={styles.perkItem}>
      <h3 className={styles.perkTitle}>Give back</h3>
      <p>Paid time off for you to spend giving back to causes and communities that are important to you.</p>
    </div>

    <div className={styles.perkItem}>
      <h3 className={styles.perkTitle}>Hang out</h3>
      <p>Meet up with your remote team face-to-face at least once annually.</p>
    </div>
  </div>
</div>
<div className={styles.joinUsSection}>
  <div className={styles.joinUsText}>
    <h2 className={styles.highlightedText}>We would love for you to join us</h2>
    <p>
      At Dribbble, we serve a global community and we need a diverse team to do that successfully. Women, people of colour, members of the LGBTQIA+ community, individuals with disabilities, and veterans are strongly encouraged to apply. We provide an accessible candidate experience, and if you need any accommodations or adjustments throughout the interview process and beyond, please let us know. We're dedicated to fostering an inclusive and diverse environment for employees from all walks of life.
    </p>
  </div>
  <div className={styles.joinUsImage}>
    <Image
      src="/images/diverse.png"
      alt="Diverse Team"
      width={500}
      height={400}
      className={styles.joinUsImage}
    />
  </div>
</div>
<div className={styles.imageRow}>
  <div className={styles.imageWrapper}>
    <Image
      src="/images/image1.png"
      alt="Image 1"
      width={300}
      height={200}
      className={styles.image}
    />
  </div>
  <div className={styles.imageWrapper}>
    <Image
      src="/images/image2.png"
      alt="Image 2"
      width={300}
      height={200}
      className={styles.image}
    />
  </div>
  <div className={styles.imageWrapper}>
    <Image
      src="/images/image3.png"
      alt="Image 3"
      width={300}
      height={200}
      className={styles.image}
    />
  </div>
</div>
<div className={styles.openPositions}>
  <h2 className={styles.sectionTitle}>Open Positions</h2>
  <p className={styles.noPositions}>
    We currently have no open positions. Please check back as we will most certainly be looking for great people to join our team in the future.
  </p>
  <div className={styles.bambooHR}>
    <p>Powered by BambooHR</p>
    
  </div>
</div>



</div>
      <Footer />
    </>
  );
}
