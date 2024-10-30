import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFlowers } from '../../store/FlowerSlice';
import { Flower } from '../../types/Types';
import { fetchedFlowers } from '../../API/flowerData';

import HeroSection from './HeroSection';
import BestSellersSection from './BestSellersSection';
import AboutUsSection from './AboutUsSection';
import CommentsSection from './CommentsSection';

import styles from '../../styles/Home.module.css';

const Home: React.FC = () => {
    const dispatch = useDispatch();
    const flowers = useSelector(
        (state: { flowers: { flowers: Flower[] } }) => state.flowers.flowers,
    );

    useEffect(() => {
        if (flowers.length === 0) {
            dispatch(setFlowers(fetchedFlowers));
        }
    }, [dispatch, flowers.length]);

    return (
        <div className={styles.homeContainer}>
            <HeroSection />
            <BestSellersSection flowers={flowers.slice(0, 4)} />
            <AboutUsSection />
            <CommentsSection />
        </div>
    );
};

export default Home;
