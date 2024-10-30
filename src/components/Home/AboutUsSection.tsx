import React from 'react';
import styles from '../../styles/Home.module.css';

const AboutUsSection: React.FC = () => (
    <section id="about" className={styles.aboutUs}>
        <h2 className={styles.sectionTitle}>
            <span className={styles.line}></span> About Us
            <span className={styles.line}></span>
        </h2>
        <p className={styles.aboutText}>
            We are a passionate team of florists and flower enthusiasts,
            dedicated to delivering not just flowers, but emotions and memories
            wrapped in delicate petals. Every bouquet is crafted with love,
            combining vibrant colors, unique textures, and fragrant scents to
            brighten up any space. From classic roses to exotic lilies, each
            flower is carefully selected and arranged to ensure freshness and
            elegance. Our mission is to bring the beauty of nature closer to
            you, providing a seamless experience of floral artistry that makes
            every moment memorable. Whether for celebrations, expressions of
            love, or simply to uplift your day, we are here to make every flower
            count.
        </p>
    </section>
);

export default AboutUsSection;
