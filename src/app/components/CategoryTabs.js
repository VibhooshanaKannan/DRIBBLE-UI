'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/categoryTabs.module.css';

export default function CategoryTabs({ categories, activeCategory }) {
  return (
    <div className={styles.categoryTabs}>
      <nav>
        <ul className={styles.tabsList}>
          {categories.map((category) => {
            const slug = category.toLowerCase().replace(/\s+/g, '-');
            
            return (
              <li key={category} className={category === activeCategory ? styles.active : ''}>
                <Link href={`/${slug}`} className={styles.tabLink}>
                  {category}
                </Link>
                {category === activeCategory && <div className={styles.activeIndicator} />}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}