import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from '../../styles/Navbar.module.css';

const Navbar: React.FC = () => {
    const cartItemsCount = useSelector((state: any) =>
        state.cart.items.reduce(
            (total: number, item: any) => total + item.quantity,
            0,
        ),
    );

    const handleAboutClick = () => {
        if (window.location.pathname !== '/') {
            window.location.href = '/#about';
        } else {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logoContainer}>
                <Link to="/" className={styles.logo}>
                    Flower <span className={styles.logoHighlight}>Shop</span>
                </Link>
            </div>
            <div className={styles.navLinksContainer}>
                <Link to="/shop" className={styles.navLink}>
                    Shop
                </Link>
                <button
                    onClick={handleAboutClick}
                    className={`${styles.navLink} ${styles.navButtonLink}`}
                >
                    About us
                </button>
            </div>
            <Link to="/cart" className={styles.cartLink}>
                Cart <span className={styles.cartCount}>{cartItemsCount}</span>
            </Link>
        </nav>
    );
};

export default Navbar;
