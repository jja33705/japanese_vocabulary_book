import { Link } from "react-router-dom";
import styles from './Nav.module.css';

const Nav = () => {
    return (
        <>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li className={styles.li}><Link to="/" className={styles.link}>단어장</Link></li>
                    <li><Link to="/dictionary" className={styles.link}>사전</Link></li>
                </ul>
            </nav>
        </>
    );
};

export default Nav;