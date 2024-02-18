import styles from './Admin.module.scss';
import classNames from 'classnames/bind';
import 'boxicons';
import images from 'assets/images';
import ProductsManager from './ProductsManager/ProductsManager';

const cx = classNames.bind(styles);

function Admin() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <h1>SSStutter Admin</h1>
        <div className={cx('logo')}>{images.logo}</div>
        <div className={cx('user')}>
          <div className={cx('user-name')}>Hoang Minh</div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" />
        </div>
      </div>
      <div className={cx('container')}>
        <div className={cx('sidebar')}>
          <div className={cx('sidebar-item')}>
            <box-icon name="menu-alt-left" color="#4154f1"></box-icon>
            <div className={cx('item-title')}>Quản lý sản phẩm</div>
          </div>
        </div>
        <div className={cx('content')}>
          <ProductsManager />
        </div>
      </div>
    </div>
  );
}

export default Admin;
