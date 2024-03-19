import styles from './MenuMobile.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import routesConfig from 'config/routes';
import 'boxicons';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { showMenuMobile } from 'redux/configSlice';

const cx = classNames.bind(styles);

function MenuMobile() {
  const menuMobile = useSelector((state) => state.config.showMenuMobile);
  const dispatch = useDispatch();

  const handleCloseMenu = () => {
    dispatch(showMenuMobile(false));
  };

  return (
    <div className={menuMobile ? cx('wrapper', 'show') : cx('wrapper', 'hide')} onClick={handleCloseMenu}>
      <div
        className={menuMobile ? cx('menu', 'show-menu') : cx('menu', 'hide-menu')}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={cx('icon-back')} onClick={handleCloseMenu}>
          <box-icon name="chevron-left" size="lg"></box-icon>
        </div>
        <ul className={cx('menu-list')}>
          <li className={cx('menu-item')}>
            <Link to={routesConfig.home} onClick={handleCloseMenu}>
              TRANG CHỦ
            </Link>
          </li>
          <li className={cx('menu-item')}>
            <Link to={routesConfig.forHim} onClick={handleCloseMenu}>
              NAM
            </Link>
          </li>
          <li className={cx('menu-item')}>
            <Link to={routesConfig.forHer} onClick={handleCloseMenu}>
              NỮ
            </Link>
          </li>
          <li className={cx('menu-item')}>
            <Link to={routesConfig.contact} onClick={handleCloseMenu}>
              LIÊN HỆ
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MenuMobile;
