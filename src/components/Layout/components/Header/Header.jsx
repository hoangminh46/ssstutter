import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import 'boxicons';

import images from 'assets/images';
import { Link } from 'react-router-dom';
import routesConfig from 'config/routes';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Cart from 'components/Cart/Cart';
import { showMenuMobile, showSearchInput } from 'redux/configSlice';
import { setToggleCart } from 'redux/cartSlice';

const cx = classNames.bind(styles);

function Header() {
  const dispatch = useDispatch();
  const showSearch = useSelector((state) => state.config.showSearchInput);
  const toggleCart = useSelector((state) => state.cart.toggleCart);
  const quantityCart = useSelector((state) => state.cart.productCart.length);

  // Active khi an vao menu header
  const [isActive, setActive] = useState(1);

  const [isScroll, setScroll] = useState(false);

  const handleActiveMenu = (id) => {
    setActive(id);
  };

  // Handle khi scroll thi thu nho header
  const handleScroll = () => {
    if (window.scrollY >= 100) {
      setScroll(true);
    } else {
      setScroll(false);
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

  const handleShowSearch = () => {
    dispatch(showSearchInput(!showSearch));
  };

  const handleShowMenuMobile = () => {
    dispatch(showMenuMobile(true));
  };

  function handleClickCart() {
    dispatch(setToggleCart(!toggleCart));
  }

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
          <div className={cx('icon-menu__mobile')} onClick={handleShowMenuMobile}>
            <box-icon name="menu-alt-left"></box-icon>
          </div>
          <div className={cx('menu-right')}>
            <div className={cx('menu-item')} onClick={handleShowSearch}>
              <box-icon name="search"></box-icon>
            </div>
            <div className={cx('menu-item', 'shopping-bag')} onClick={handleClickCart}>
              <box-icon name="shopping-bag"></box-icon>
              <div className={cx('cart-count')}>{quantityCart}</div>
            </div>
          </div>
        </div>
      </div>
      <Cart />
    </div>
  );
}

export default Header;
