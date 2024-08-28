import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';
import cart from '../assets/Untitled design 1.png';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <button className={styles.closeButton} onClick={toggleSidebar}>×</button>
      <ul className={styles.sidebarLinks}>
        <li><Link to="/catalog" onClick={toggleSidebar}>Catalog</Link></li>
        <li><Link to="/aboutUs" onClick={toggleSidebar}>About us</Link></li>
        <li><Link to="/contact" onClick={toggleSidebar}>Contact</Link></li>
        <li><Link to="/HowItWorks" onClick={toggleSidebar}>Guide</Link></li>
        <Link to="/cart">
            <img src={cart} alt="Cart" className={styles.cartIcon} />
          </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
