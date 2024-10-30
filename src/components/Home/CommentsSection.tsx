import React from 'react';
import styles from '../../styles/Home.module.css';
import userImage from '../../images/user.jpg';

const CommentsSection: React.FC = () => (
    <section className={styles.comments}>
        <h2 className={styles.sectionTitle}>
            <span className={styles.line}></span>Comments
            <span className={styles.line}></span>
        </h2>
        <div className={styles.commentCards}>
            {[
                {
                    name: 'Lora',
                    text: "Every bouquet I've received is stunning and fragrant! They really know how to make special moments even better! 🌷✨",
                    rating: 4,
                },
                {
                    name: 'Bob',
                    text: 'The arrangements are absolutely breathtaking! I always get compliments when I give them as gifts! 🌺❤️',
                    rating: 5,
                },
                {
                    name: 'Anna',
                    text: "Their flowers are always fresh and last a long time. I can't recommend them enough! Perfect for any occasion! 🌸😊",
                    rating: 5,
                },
            ].map((comment, index) => (
                <div key={index} className={styles.commentCard}>
                    <img
                        src={userImage}
                        alt={comment.name}
                        className={styles.commentAvatar}
                    />
                    <p className={styles.commentName}>{comment.name}</p>
                    <p className={styles.commentText}>{comment.text}</p>
                    <div className={styles.stars}>
                        {'⭐️'.repeat(comment.rating)}
                        {comment.rating < 5 && '☆'}
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default CommentsSection;
