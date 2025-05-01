'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/designCard.module.css';

export default function DesignCard({ design }) {
  const { id, title, author, image, likes, views, isPro, isTeam } = design;

  return (
    <div className={styles.card}>
      <Link href={`/designs/${id}`}>
        <div className={styles.imageContainer}>
          <Image 
            src={image} 
            alt={title}
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>
      
      <div className={styles.cardFooter}>
        <div className={styles.authorInfo}>
          <div className={styles.avatarContainer}>
            {/* Avatar placeholder with first letter of author name */}
            <div className={styles.avatar}>
              {author.charAt(0)}
            </div>
          </div>
          
          <div className={styles.authorDetails}>
            <Link href={`/users/${author.replace(/\s+/g, '-').toLowerCase()}`} className={styles.authorName}>
              {author}
            </Link>
            
            {isTeam && (
              <span className={styles.badge + ' ' + styles.teamBadge}>TEAM</span>
            )}
            
            {isPro && (
              <span className={styles.badge + ' ' + styles.proBadge}>PRO</span>
            )}
          </div>
        </div>
        
        <div className={styles.stats}>
          <button className={styles.likeButton}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.heartIcon}>
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <span>{likes}</span>
          </button>
          
          <div className={styles.viewCount}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.eyeIcon}>
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            <span>{views}</span>
          </div>
        </div>
      </div>
    </div>
  );
}