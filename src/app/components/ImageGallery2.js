"use client";
import Image from "next/image";
import styles from "../styles/ImageGallery2.module.css";

const images = [
  "/images/img1.png",
  "/images/img2.png",
  "/images/img3.png",
  "/images/img4.png",
  "/images/img5.png",
  "/images/img6.png",
  "/images/img7.png",
  "/images/img8.png",
  "/images/img9.png",
];

export default function ImageGallery2() {
  return (
    <div className={styles.galleryWrapper}>
      <div className={`${styles.row} ${styles.scrollLeftToRight}`}>
        {[...images.slice(0, 4), ...images.slice(0, 4)].map((src, index) => (
          <div key={index} className={styles.imageWrapper}>
            <Image src={src} alt={`Image ${index}`} width={300} height={200} />
          </div>
        ))}
      </div>
      <div className={`${styles.row} ${styles.scrollRightToLeft}`}>
        {[...images.slice(4), ...images.slice(4)].map((src, index) => (
          <div key={index + 20} className={styles.imageWrapper}>
            <Image src={src} alt={`Image ${index + 4}`} width={300} height={200} />
          </div>
        ))}
      </div>
    </div>
  );
}
