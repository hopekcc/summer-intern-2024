import { Outlet } from 'react-router-dom';
import NavBar from './navbar.jsx';
import styles from '../assets/css-modules/header.module.css';

function Header(){
    return (
        <div>
            <div className={styles.header}>
                <h1>HopeKCC</h1>
                <NavBar />
            </div>
            <Outlet />
        </div>
    );
}

export default Header;