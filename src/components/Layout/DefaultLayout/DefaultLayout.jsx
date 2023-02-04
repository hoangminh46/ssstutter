import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <div className={cx('content')}>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
