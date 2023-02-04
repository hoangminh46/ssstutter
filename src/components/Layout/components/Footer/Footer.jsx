import styles from './Footer.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx('footer')}>
      <h2>Day la footer</h2>
    </div>
  );
}

export default Footer;
