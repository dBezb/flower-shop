import React from 'react';
import { Flower } from '../../types/Types';
import { FlowerListProps } from '../../types/Types';
import { motion } from 'framer-motion';

import FlowerCard from './FlowerCard';
import styles from '../../styles/FlowerList.module.css';

const FlowerList: React.FC<FlowerListProps> = ({ flowers = [] }) => (
    <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
    >
        <div className={styles.flowerList}>
            {flowers.map((flower: Flower) => (
                <FlowerCard key={flower.id} flower={flower} />
            ))}
        </div>
    </motion.div>
);

export default FlowerList;
