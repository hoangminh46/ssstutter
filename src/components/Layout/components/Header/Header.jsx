import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import 'boxicons';

import images from 'assets/images';
import { Link } from 'react-router-dom';
import routesConfig from 'config/routes';
import { useState, useTransition } from 'react';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function Header() {
  // Active khi an vao item
  const [isActive, setActive] = useState(1);
  const [isScroll, setScroll] = useState(false);

  const handleActiveMenu = (id) => {
    setActive(id);
  };

  const handleScroll = () => {
    if (window.scrollY >= 100) {
      setScroll(true);
      console.log('set');
    } else {
      setScroll(false);
      console.log('unset');
    }
  };

  // Handle scroll thi resize header
  useEffect(() => {
    // Khi load trang o giua
    if (window.scrollY >= 100) {
      setScroll(true);
    }

    window.addEventListener('scroll', () => {
      handleScroll();
    });
    return () => {
      window.removeEventListener('scroll', () => {
        handleScroll();
      });
    };
  }, []);

  return (
    <div className={cx('header', isScroll ? 'shrink' : null)}>
      <div className={cx('wrapper')}>
        <div className={cx('menu-logo')}>{images.logo}</div>
        <div className={cx('menu')}>
          <div className={cx('menu-left')}>
            <div
              className={cx('menu-item', isActive === 1 ? 'active' : null)}
              onClick={() => {
                handleActiveMenu(1);
              }}
            >
              <Link to={routesConfig.home}>TRANG CHỦ</Link>
            </div>
            <div
              className={cx('menu-item', isActive === 2 ? 'active' : null)}
              onClick={() => {
                handleActiveMenu(2);
              }}
            >
              <Link to={routesConfig.forHim}>NAM</Link>
            </div>
            <div
              className={cx('menu-item', isActive === 3 ? 'active' : null)}
              onClick={() => {
                handleActiveMenu(3);
              }}
            >
              <Link to={routesConfig.forHer}>NỮ</Link>
            </div>
            <div
              className={cx('menu-item', isActive === 4 ? 'active' : null)}
              onClick={() => {
                handleActiveMenu(4);
              }}
            >
              <Link to={routesConfig.contact}>LIÊN HỆ</Link>
            </div>
          </div>
          <div className={cx('menu-right')}>
            <div className={cx('menu-item')}>
              <box-icon name="search"></box-icon>
            </div>
            <div className={cx('menu-item')}>
              <box-icon name="heart"></box-icon>
            </div>
            <div className={cx('menu-item', 'shopping-bag')}>
              <box-icon name="shopping-bag"></box-icon>
              <div className={cx('cart-count')}>0</div>
            </div>
            <div className={cx('menu-item')}>
              <box-icon name="user"></box-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
