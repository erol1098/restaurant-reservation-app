import React from 'react';

import { Link } from 'react-router-dom';

import Logo from '../../assets/images/logo.png';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <nav
      className={`${styles.navbar} navbar sticky-top  navbar-expand-lg py-2 px-2`}
    >
      <div className='container-fluid'>
        <Link className='nav-link d-flex gap-3 align-items-center' to={'/'}>
          <img src={Logo} width={100} alt='logo' />
          <h3 className={styles.logo}>Merkez Lokantası</h3>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarTogglerDemo02'
          aria-controls='navbarTogglerDemo02'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li className='nav-item ms-2'>
              <Link className={`${styles.li} nav-link`} to={'/reservation'}>
                Make a Reservation
              </Link>
            </li>
            <li className='nav-item ms-2'>
              <Link className={`${styles.li} nav-link`} to={'/'}>
                About Us
              </Link>
            </li>
            <li className='nav-item ms-2'>
              <Link className={`${styles.li} nav-link`} to={'/'}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
