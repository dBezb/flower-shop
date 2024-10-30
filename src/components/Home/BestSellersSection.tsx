import React from 'react';
import FlowerCard from '../FlowerShop/FlowerCard';
import styles from '../../styles/Home.module.css';
import { BestSellersSectionProps } from '../../types/Types';

const BestSellersSection: React.FC<BestSellersSectionProps> = ({ flowers }) => (
    <section className={styles.bestSellers}>
        <h2 className={styles.sectionTitle}>
            <span className={styles.line}></span> Best Sellers{' '}
            <span className={styles.line}></span>
        </h2>
        <div className={styles.galleryItems}>
            {flowers.map((flower) => (
                <FlowerCard key={flower.id} flower={flower} />
            ))}
        </div>
    </section>
);

export default BestSellersSection;
