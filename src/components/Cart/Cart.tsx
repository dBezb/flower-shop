import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, clearCart } from '../../store/CartSlice';
import { CartItem } from '../../types/Types';
import { motion } from 'framer-motion';

import styles from '../../styles/Cart.module.css';

const Cart: React.FC = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(
        (state: any) => state.cart.items as CartItem[],
    );
    const totalAmount = useSelector((state: any) => state.cart.totalAmount);

    const handleRemove = (id: number) => {
        dispatch(removeItem(id));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className={styles.cart}>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
            >
                <h2>Your Cart</h2>
                <div className={styles.items}>
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty</p>
                    ) : (
                        cartItems.map((item: CartItem) => (
                            <div key={item.id} className={styles.cartItem}>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className={styles.image}
                                />
                                <div className={styles.details}>
                                    <h4>{item.name}</h4>
                                    <p>Price: €{item.price.toFixed(2)}</p>
                                    <p>Quantity: {item.quantity}</p>
                                    <button
                                        className={styles.removeBtn}
                                        onClick={() => handleRemove(item.id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <div className={styles.total}>
                    <h3>Total: €{totalAmount.toFixed(2)}</h3>
                    <button
                        className={styles.clearCartBtn}
                        onClick={handleClearCart}
                    >
                        Clear Cart
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default Cart;
