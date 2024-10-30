import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/CartSlice';
import { Flower } from '../../types/Types';

import styles from '../../styles/FlowerCard.module.css';

const FlowerCard: React.FC<{ flower: Flower }> = ({ flower }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addItem({ ...flower, quantity: 1 }));
    };

    return (
        <div className={styles.galleryItem}>
            <img
                src={flower.image}
                className={styles.galleryImage}
                alt={flower.name}
            />
            <p className={styles.galleryText}>{flower.name}</p>
            <p className={styles.price}>{flower.price} €</p>
            <p className={styles.description}>{flower.description}</p>
            <button
                className={styles.addToCartButton}
                onClick={handleAddToCart}
            >
                Add to cart
            </button>
        </div>
    );
};

export default FlowerCard;
