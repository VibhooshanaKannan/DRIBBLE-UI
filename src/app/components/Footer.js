// components/Footer.js
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';
import { FaTwitter, FaFacebookF, FaInstagram, FaPinterestP } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <Link href="/" className={styles.logoLink}>
            <Image src="/logo.png" alt="Dribbble" width={92} height={28} />
          </Link>
          
          <nav className={styles.mainNav}>
            <Link href="/for-designers" className={styles.navLink}>For designers</Link>
            <Link href="/hire-talent" className={styles.navLink}>Hire talent</Link>
            <Link href="/inspiration" className={styles.navLink}>Inspiration</Link>
            <Link href="/advertising" className={styles.navLink}>Advertising</Link>
            <Link href="/blog" className={styles.navLink}>Blog</Link>
            <Link href="/about" className={styles.navLink}>About</Link>
            <Link href="/careers" className={styles.navLink}>Careers</Link>
            <Link href="/support" className={styles.navLink}>Support</Link>
          </nav>
          
          <div className={styles.socialIcons}>
            <Link href="https://twitter.com/dribbble" aria-label="Twitter">
              <FaTwitter />
            </Link>
            <Link href="https://facebook.com/dribbble" aria-label="Facebook">
              <FaFacebookF />
            </Link>
            <Link href="https://instagram.com/dribbble" aria-label="Instagram">
              <FaInstagram />
            </Link>
            <Link href="https://pinterest.com/dribbble" aria-label="Pinterest">
              <FaPinterestP />
            </Link>
          </div>
        </div>
      
        <div className={styles.bottomSection}>
          <div className={styles.copyright}>
            <span>© 2025 Dribbble</span>
            <Link href="/terms" className={styles.link}>Terms</Link>
            <Link href="/privacy" className={styles.link}>Privacy</Link>
            <Link href="/cookies" className={styles.link}>Cookies</Link>
          </div>
          
          <div className={styles.rightLinks}>
            <Link href="/jobs" className={styles.link}>Jobs</Link>
            <Link href="/designers" className={styles.link}>Designers</Link>
            <Link href="/freelancers" className={styles.link}>Freelancers</Link>
            <Link href="/tags" className={styles.link}>Tags</Link>
            <Link href="/places" className={styles.link}>Places</Link>
            <Link href="/resources" className={styles.link}>Resources</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;