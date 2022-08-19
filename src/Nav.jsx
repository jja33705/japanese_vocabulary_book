import { NavLink } from "react-router-dom";
import styles from './Nav.module.css';

const Nav = () => {
    const isActive = true;

    return (
        <>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li className={`${styles.li}`}><NavLink to="/" className={styles.navLink}>단어장</NavLink></li>
                    <li className={styles.li}><NavLink to="/dictionary" className={styles.navLink}>사전</NavLink></li>
                </ul>
            </nav>
        </>
    );
};

export default Nav;