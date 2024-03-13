import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { ImageSlider, ProductsSlider, PromotionSlider } from 'components/Layout/Slider/Slider';
import { Link } from 'react-router-dom';
import routesConfig from 'config/routes';
import 'boxicons';
import images from 'assets/images';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ProductItems from 'components/ProductItem/ProductItem';
import getProducts from 'apiServices/getProduct';
import Button from 'components/Button/Button';

const cx = classNames.bind(styles);

function Home() {
  const products = useSelector((state) => state.rootReducer.products);
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts(dispatch);
  }, []);

  return (
    <div className={cx('wrapper')}>
      <ImageSlider />
      <div className={cx('new-collection')}>
        <div className={cx('heading')}>
          <p>BỘ SƯU TẬP MỚI</p>
          <div className={cx('line')}></div>
        </div>
        <ProductsSlider />
      </div>
      <div className={cx('winter-banner')}>
        <img src={images.WinterBanner} alt="" />
      </div>

      <div className={cx('new-products')}>
        <div className={cx('heading')}>
          <p>SẢN PHẨM MỚI</p>
          <div className={cx('line')}></div>
        </div>
        <div className={cx('product-list')}>
          {products.map((item) => (
            <ProductItems data={item} key={item.id} />
          ))}
        </div>
        <Button text="XEM THÊM" size="lg" className={cx('load-more')} />
      </div>
      <PromotionSlider />
      <div className={cx('policy')}>
        <div className={cx('policy-card')}>
          <div className={cx('card-icon')}>
            <box-icon name="shopping-bag" size="lg"></box-icon>
          </div>
          <div className={cx('card-info')}>
            <div className={cx('card-info__name')}>Miễn phí giao hàng</div>
            <div className={cx('card-info__desc')}>Miễn phí ship với đơn hàng từ 399k</div>
          </div>
        </div>
        <div className={cx('policy-card')}>
          <div className={cx('card-icon')}>
            <box-icon name="credit-card" size="lg"></box-icon>
          </div>
          <div className={cx('card-info')}>
            <div className={cx('card-info__name')}>Thanh toán COD</div>
            <div className={cx('card-info__desc')}>Thanh toán khi nhận hàng</div>
          </div>
        </div>
        <div className={cx('policy-card')}>
          <div className={cx('card-icon')}>
            <box-icon name="diamond" size="lg"></box-icon>
          </div>
          <div className={cx('card-info')}>
            <div className={cx('card-info__name')}>Khách hàng VIP</div>
            <div className={cx('card-info__desc')}>Ưu đãi dành cho khách hàng VIP</div>
          </div>
        </div>
        <div className={cx('policy-card')}>
          <div className={cx('card-icon')}>
            <box-icon name="donate-heart" size="lg"></box-icon>
          </div>
          <div className={cx('card-info')}>
            <div className={cx('card-info__name')}>Hỗ trợ bảo hành</div>
            <div className={cx('card-info__desc')}>Đổi, sửa đồ tại tất cả store</div>
          </div>
        </div>
      </div>
      <div className={cx('store-banner')}>
        <img src={images.StoreBanner} alt="" />
        <div className={cx('banner-content')}>
          <div className={cx('banner-heading')}>ssstutter</div>
          <div className={cx('banner-desc')}>
            Với thông điệp "Refined Life", SSStutter mong muốn đem đến cho khách hàng một lối sống tinh gọn bằng các sản
            phẩm thời trang tinh tế.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
