import React from 'react';
// import '@styles/Menu.scss';
import styles from '@styles/Header.module.scss';
import Link from 'next/link';

const Menu = () => {
  return (
    <div className={styles.Menu}>
      <ul>
        <li>
          <Link href="/" className="title">
            My orders
          </Link>
        </li>
        <li>
          <Link href="/">My account</Link>
        </li>
        <li>
          <Link href="/">Sign out</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
