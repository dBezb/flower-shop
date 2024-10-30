import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import AppRoutes from '../Routes/AppRouters';
import Footer from '../Footer/Footer';
import styles from '../../styles/App.module.css';

const App: React.FC = () => {
    return (
        <Router>
            <div className={styles.app}>
                <Navbar />
                <div className={styles.content}>
                    <AppRoutes />
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
