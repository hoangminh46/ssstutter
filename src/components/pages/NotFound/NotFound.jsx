import styles from './NotFound.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import routesConfig from 'config/routes';

const cx = classNames.bind(styles);

function NotFound() {
  return (
    <div className={cx('wrapper')}>
      <h1>404 Not Found</h1>
      <h2>Không tìm thấy trang</h2>
      <Link to={routesConfig.home}>TRỞ VỀ TRANG CHỦ</Link>
    </div>
  );
}

export default NotFound;
