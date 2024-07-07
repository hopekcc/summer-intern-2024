import styles from '../assets/css-modules/header.module.css'
import {NavLink} from 'react-router-dom';

function NavBar(){
    return (
        <div className={styles.navbarContainer}>
            <ul className={styles.navbar}>
                <NavLink 
                    to="/"   
                    className={styles.navbarItem}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/profile"   
                    className={styles.navbarItem}
                >
                    Profile
                </NavLink>
            </ul>
        </div>
    );
}

export default NavBar;