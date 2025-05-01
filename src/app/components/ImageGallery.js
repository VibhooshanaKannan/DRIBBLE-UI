import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/ImageGallery.module.css';

const images = [
  { src: '/images/branding.png', name: 'Branding', link: '/branding' },
  { src: '/images/print.png', name: 'Print', link: '/print' },
  { src: '/images/mobile.png', name: 'Mobile', link: '/mobile' },
  { src: '/images/webdesign.png', name: 'Web Design', link: '/web-design' },
  { src: '/images/illustartion.png', name: 'Illustration', link: '/illustration' },
  { src: '/images/product-design.png', name: 'Product Design', link: '/product-design' },
  { src: '/images/typography.png', name: 'Typography', link: '/typography' },
];

const ImageGallery = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Double the images to allow seamless scroll loop
  const loopImages = [...images, ...images];

  return (
    <div
      className={`${styles.galleryWrapper} ${isPaused ? styles.paused : ''}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={styles.gallery}>
        {loopImages.map((img, idx) => (
          <Link href={img.link} key={idx} className={styles.imageCard}>
            <div className={styles.imageCard}>
              <div className={styles.imageWrapper}>
                <Image src={img.src} alt={img.name} layout="fill" objectFit="cover" />
              </div>
              <span className={styles.imageName}>{img.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
