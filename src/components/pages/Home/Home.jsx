import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { ImageSlider, TextSlider } from 'components/Layout/Slider/Slider';
import { Link } from 'react-router-dom';
import routesConfig from 'config/routes';
import images from 'assets/images';

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx('wrapper')}>
      <TextSlider />
      <ImageSlider />
      <div className={cx('banner')}>
        <Link to={routesConfig.forHim} className={cx('banner-item')}>
          <img src={images.ForHim} alt="" />
        </Link>
        <Link to={routesConfig.forHer} className={cx('banner-item')}>
          <img src={images.ForHer} alt="" />
        </Link>
      </div>
    </div>
  );
}

export default Home;
