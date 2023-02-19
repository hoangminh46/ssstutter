import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { TextSlider } from '../Slider/Slider';
import Search from 'components/Search/Search';
import MenuMobile from 'components/MenuMobile/MenuMobile';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <TextSlider />
        <div className={cx('content')}>{children}</div>
      </div>
      <Footer />
      <Search />
      <MenuMobile />
    </div>
  );
}

export default DefaultLayout;
