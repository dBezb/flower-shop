import React from 'react';
import styles from '../../styles/Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.text}>
                &copy; {new Date().getFullYear()} Flower Shop by Dmytro
                Bezborodko
            </p>
        </footer>
    );
};

export default Footer;
