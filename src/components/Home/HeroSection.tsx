// HeroSection.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/Home.module.css';
import { fetchedFlowers } from '../../API/flowerData';

const HeroSection: React.FC = () => (
    <section className={styles.hero}>
        <div className={styles.heroTextContainer}>
            <h1 className={styles.heroTitle}>
                Flowers, 🌻
                <br />
                what the world needs
            </h1>
            <p className={styles.heroText}>
                You can buy flowers for yourself and for your loved ones here.
            </p>
            <Link to="/shop" className={styles.heroButton}>
                Browse
            </Link>
        </div>
        <div className={styles.heroImagesContainer}>
            {fetchedFlowers.slice(0, 6).map((flower, index) => (
                <img
                    key={index}
                    src={flower.image}
                    alt={flower.name}
                    className={styles.heroImage}
                />
            ))}
        </div>
    </section>
);

export default HeroSection;
