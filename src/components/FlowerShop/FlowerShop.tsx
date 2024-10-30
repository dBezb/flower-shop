import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFlowers } from '../../store/FlowerSlice';
import { Flower } from '../../types/Types';
import { fetchedFlowers } from '../../API/flowerData';

import FlowerList from './FlowerList';
import styles from '../../styles/FlowerShop.module.css';

const FlowerShop: React.FC = () => {
    const dispatch = useDispatch();
    const flowers = useSelector(
        (state: { flowers: { flowers: Flower[] } }) => state.flowers.flowers,
    );
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (flowers.length === 0) {
            dispatch(setFlowers(fetchedFlowers));
        } else {
            setLoading(false);
        }
    }, [dispatch, flowers.length]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredFlowers = flowers.filter((flower) =>
        flower.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    return (
        <div className={styles.flowerShopContainer}>
            <h2 className={styles.shopTitle}>Our Assortment</h2>
            <input
                type="text"
                placeholder="Search for flowers..."
                value={searchTerm}
                onChange={handleSearchChange}
                className={styles.searchInput}
            />
            {loading ? (
                <h4 className={styles.loading}>Loading...</h4>
            ) : filteredFlowers.length === 0 ? (
                <h4 className={styles.notFound}>No items found</h4>
            ) : (
                <FlowerList flowers={filteredFlowers} />
            )}
        </div>
    );
};

export default FlowerShop;
