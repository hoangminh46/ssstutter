import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import 'boxicons';

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx('footer')}>
      <div className={cx('wrapper')}>
        <div className={cx('footer-content')}>
          <div className={cx('footer-item')}>
            <div className={cx('footer-heading')}>
              <strong>SSSTUTTER</strong>
            </div>
            <div className={cx('footer-desc')}>
              Với thông điệp "Refined Life", SSStutter mong muốn đem đến cho khách hàng một lối sống tinh gọn bằng các
              sản phẩm thời trang tinh tế.
            </div>
          </div>
          <div className={cx('footer-item')}>
            <div className={cx('footer-heading')}>
              <strong>VỀ CHÚNG TÔI</strong>
            </div>
            <div className={cx('footer-desc')}>
              <Link>Giới thiệu</Link>
              <Link>Liên hệ</Link>
              <Link>Tuyển dụng</Link>
              <Link>Tin tức</Link>
              <Link>Hệ thống cửa hàng</Link>
            </div>
          </div>
          <div className={cx('footer-item')}>
            <div className={cx('footer-heading')}>
              <strong>CHĂM SÓC KHÁCH HÀNG</strong>
            </div>
            <div className={cx('footer-desc')}>
              <Link>Chính sách đổi trả</Link>
              <Link>Chính sách bảo hành</Link>
              <Link>Chính sách hoàn tiền</Link>
            </div>
          </div>
          <div className={cx('footer-item')}>
            <div className={cx('footer-heading')}>
              <strong>LIÊN HỆ</strong>
            </div>
            <div className={cx('footer-desc')}>
              <div className={cx('desc-detail')}>
                <box-icon name="envelope" color="white"></box-icon>
                <div>info@ssstutter.com</div>
              </div>
              <div className={cx('desc-detail')}>
                <box-icon name="phone" color="white"></box-icon>
                <div>0869936266</div>
              </div>
            </div>
            <div className={cx('footer-heading')}>
              <strong>SOCIAL</strong>
            </div>
            <div className={cx('footer-desc','footer-desc__social')}>
              <Link>
                <box-icon type="logo" name="facebook-square" color="white" size="lg"></box-icon>
              </Link>
              <Link>
                <box-icon type="logo" name="instagram" color="white" size="lg"></box-icon>
              </Link>
              <Link>
                <box-icon type="logo" name="youtube" color="white" size="lg"></box-icon>
              </Link>
              <Link>
                <box-icon type="logo" name="tiktok" color="white" size="lg"></box-icon>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
