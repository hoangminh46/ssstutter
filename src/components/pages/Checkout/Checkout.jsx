import styles from './Checkout.module.scss';
import classNames from 'classnames/bind';
import images from 'assets/images';
import { useSelector } from 'react-redux';
import ProductCart from 'components/ProductCart/ProductCart';
import { NumericFormat } from 'react-number-format';
import Button from 'components/Button/Button';

const cx = classNames.bind(styles);

function Checkout() {
  const productCart = useSelector((state) => state.cart.productCart);
  const totalPriceCart = useSelector((state) => state.cart.totalPriceCart);

  return (
    <div className={cx('checkout')}>
      <div className={cx('checkout-item')}>
        <div className={cx('checkout-title')}>THÔNG TIN GIAO HÀNG</div>
        <form action="" className={cx('checkout-form')}>
          <div className={cx('form-section')}>
            <label className={cx('form-label')}>Họ và Tên</label>
            <input label="Họ và Tên" name="customerName" type="text" />
            <span className={cx('focus-border')}></span>
          </div>

          <div className={cx('form-section')}>
            <label className={cx('form-label')}>Email</label>
            <input label="Email" name="customerEmail" type="text" />
            <span className={cx('focus-border')}></span>
          </div>

          <div className={cx('form-section')}>
            <label className={cx('form-label')}>Số điện thoại</label>
            <input label="Số điện thoại" name="customerPhone" type="text" />
            <span className={cx('focus-border')}></span>
          </div>

          <div className={cx('form-section')}>
            <label className={cx('form-label')}>Chọn tỉnh/ Thành phố</label>
            <select name="city">
              <option value="default" disabled="" hidden=""></option>
              <option value='{"id":254,"name":"Hà Nội","jntName":"Hà Nội"}'>Hà Nội</option>
              <option value='{"id":255,"name":"Hồ Chí Minh","jntName":"Hồ Chí Minh"}'>Hồ Chí Minh</option>
              <option value='{"id":312,"name":"Đà Nẵng","jntName":"Đà Nẵng"}'>Đà Nẵng</option>
              <option value='{"id":280,"name":"Hải Phòng","jntName":"Hải Phòng"}'>Hải Phòng</option>
              <option value='{"id":270,"name":"Quảng Ninh","jntName":"Quảng Ninh"}'>Quảng Ninh</option>
              <option value='{"id":267,"name":"Khánh Hòa","jntName":"Khánh Hòa"}'>Khánh Hòa</option>
              <option value='{"id":256,"name":"An Giang","jntName":"An Giang"}'>An Giang</option>
              <option value='{"id":257,"name":"Bà Rịa - Vũng Tàu","jntName":"Bà Rịa – Vũng Tàu"}'>
                Bà Rịa - Vũng Tàu
              </option>
              <option value='{"id":258,"name":"Bắc Ninh","jntName":"Bắc Ninh"}'>Bắc Ninh</option>
              <option value='{"id":259,"name":"Bắc Giang","jntName":"Bắc Giang"}'>Bắc Giang</option>
              <option value='{"id":260,"name":"Bình Dương","jntName":"Bình Dương"}'>Bình Dương</option>
              <option value='{"id":261,"name":"Bình Định","jntName":"Bình Định"}'>Bình Định</option>
              <option value='{"id":262,"name":"Bình Phước","jntName":"Bình Phước"}'>Bình Phước</option>
              <option value='{"id":263,"name":"Bình Thuận","jntName":"Bình Thuận"}'>Bình Thuận</option>
              <option value='{"id":264,"name":"Bến Tre","jntName":"Bến Tre"}'>Bến Tre</option>
              <option value='{"id":265,"name":"Bắc Cạn","jntName":"Bắc Kạn"}'>Bắc Cạn</option>
              <option value='{"id":266,"name":"Cần Thơ","jntName":"Cần Thơ"}'>Cần Thơ</option>
              <option value='{"id":268,"name":"Thừa Thiên Huế","jntName":"Thừa Thiên – Huế"}'>Thừa Thiên Huế</option>
              <option value='{"id":269,"name":"Lào Cai","jntName":"Lào Cai"}'>Lào Cai</option>
              <option value='{"id":271,"name":"Đồng Nai","jntName":"Đồng Nai"}'>Đồng Nai</option>
              <option value='{"id":272,"name":"Nam Định","jntName":"Nam Định"}'>Nam Định</option>
              <option value='{"id":273,"name":"Cà Mau","jntName":"Cà Mau"}'>Cà Mau</option>
              <option value='{"id":274,"name":"Cao Bằng","jntName":"Cao Bằng"}'>Cao Bằng</option>
              <option value='{"id":275,"name":"Gia Lai","jntName":"Gia Lai"}'>Gia Lai</option>
              <option value='{"id":276,"name":"Hà Giang","jntName":"Hà Giang"}'>Hà Giang</option>
              <option value='{"id":277,"name":"Hà Nam","jntName":"Hà Nam"}'>Hà Nam</option>
              <option value='{"id":278,"name":"Hà Tĩnh","jntName":"Hà Tĩnh"}'>Hà Tĩnh</option>
              <option value='{"id":279,"name":"Hải Dương","jntName":"Hải Dương"}'>Hải Dương</option>
              <option value='{"id":281,"name":"Hòa Bình","jntName":"Hòa Bình"}'>Hòa Bình</option>
              <option value='{"id":282,"name":"Hưng Yên","jntName":"Hưng Yên"}'>Hưng Yên</option>
              <option value='{"id":283,"name":"Kiên Giang","jntName":"Kiên Giang"}'>Kiên Giang</option>
              <option value='{"id":284,"name":"Kon Tum","jntName":"Kon Tum"}'>Kon Tum</option>
              <option value='{"id":285,"name":"Lai Châu","jntName":"Lai Châu"}'>Lai Châu</option>
              <option value='{"id":286,"name":"Lâm Đồng","jntName":"Lâm Đồng"}'>Lâm Đồng</option>
              <option value='{"id":287,"name":"Lạng Sơn","jntName":"Lạng Sơn"}'>Lạng Sơn</option>
              <option value='{"id":288,"name":"Long An","jntName":"Long An"}'>Long An</option>
              <option value='{"id":289,"name":"Nghệ An","jntName":"Nghệ An"}'>Nghệ An</option>
              <option value='{"id":290,"name":"Ninh Bình","jntName":"Ninh Bình"}'>Ninh Bình</option>
              <option value='{"id":291,"name":"Ninh Thuận","jntName":"Ninh Thuận"}'>Ninh Thuận</option>
              <option value='{"id":292,"name":"Phú Thọ","jntName":"Phú Thọ"}'>Phú Thọ</option>
              <option value='{"id":293,"name":"Phú Yên","jntName":"Phú Yên"}'>Phú Yên</option>
              <option value='{"id":294,"name":"Quảng Bình","jntName":"Quảng Bình"}'>Quảng Bình</option>
              <option value='{"id":295,"name":"Quảng Nam","jntName":"Quảng Nam"}'>Quảng Nam</option>
              <option value='{"id":296,"name":"Quảng Ngãi","jntName":"Quảng Ngãi"}'>Quảng Ngãi</option>
              <option value='{"id":297,"name":"Quảng Trị","jntName":"Quảng Trị"}'>Quảng Trị</option>
              <option value='{"id":298,"name":"Sóc Trăng","jntName":"Sóc Trăng"}'>Sóc Trăng</option>
              <option value='{"id":299,"name":"Sơn La","jntName":"Sơn La"}'>Sơn La</option>
              <option value='{"id":300,"name":"Tây Ninh","jntName":"Tây Ninh"}'>Tây Ninh</option>
              <option value='{"id":301,"name":"Thái Bình","jntName":"Thái Bình"}'>Thái Bình</option>
              <option value='{"id":302,"name":"Thái Nguyên","jntName":"Thái Nguyên"}'>Thái Nguyên</option>
              <option value='{"id":303,"name":"Thanh Hóa","jntName":"Thanh Hóa"}'>Thanh Hóa</option>
              <option value='{"id":304,"name":"Tiền Giang","jntName":"Tiền Giang"}'>Tiền Giang</option>
              <option value='{"id":305,"name":"Trà Vinh","jntName":"Trà Vinh"}'>Trà Vinh</option>
              <option value='{"id":306,"name":"Tuyên Quang","jntName":"Tuyên Quang"}'>Tuyên Quang</option>
              <option value='{"id":307,"name":"Vĩnh Long","jntName":"Vĩnh Long"}'>Vĩnh Long</option>
              <option value='{"id":308,"name":"Vĩnh Phúc","jntName":"Vĩnh Phúc"}'>Vĩnh Phúc</option>
              <option value='{"id":309,"name":"Yên Bái","jntName":"Yên Bái"}'>Yên Bái</option>
              <option value='{"id":310,"name":"Đắc Lắc","jntName":"Đắk Lắk"}'>Đắc Lắc</option>
              <option value='{"id":311,"name":"Đồng Tháp","jntName":"Đồng Tháp"}'>Đồng Tháp</option>
              <option value='{"id":313,"name":"Đắc Nông","jntName":"Đắk Nông"}'>Đắc Nông</option>
              <option value='{"id":314,"name":"Hậu Giang","jntName":"Hậu Giang"}'>Hậu Giang</option>
              <option value='{"id":315,"name":"Bạc Liêu","jntName":"Bạc Liêu"}'>Bạc Liêu</option>
              <option value='{"id":316,"name":"Điện Biên","jntName":"Điện Biên"}'>Điện Biên</option>
            </select>
          </div>
          <div className={cx('form-section')}>
            <label className={cx('form-label')}>Chọn quận/ Huyện</label>
            <select name="district">
              <option value="default" disabled="" hidden=""></option>
            </select>
          </div>
          <div className={cx('form-section')}>
            <label className={cx('form-label')}>Chọn phường/ Xã</label>
            <select name="ward">
              <option value="default" disabled="" hidden=""></option>
            </select>
          </div>
          <div className={cx('form-section')}>
            <label className={cx('form-label')}>Số nhà, tên đường</label>
            <input label="Số nhà, tên đường" name="address" />
          </div>
        </form>
      </div>
      <div className={cx('checkout-item')}>
        <div className={cx('checkout-title')}>PHƯƠNG THỨC THANH TOÁN</div>
        <form action="" className={cx('form-method')}>
          <label htmlFor="card" className={cx('method-section')}>
            <input type="radio" name="paymentMethod" value="card" id="card" defaultChecked />
            <img className={cx('checkout-icon')} src={images.PaymentImage1} alt="" />
            <p>Thanh toán thẻ (ATM, Visa)</p>
          </label>
          <label htmlFor="momo" className={cx('method-section')}>
            <input type="radio" name="paymentMethod" value="momo" id="momo" />
            <img className={cx('checkout-icon')} src={images.PaymentImage2} alt="" />
            <p>Thanh toán bằng MoMo</p>
          </label>
          <label htmlFor="cod" className={cx('method-section')}>
            <input type="radio" name="paymentMethod" value="cod" id="cod" />
            <img className={cx('checkout-icon')} src={images.PaymentImage3} alt="" />
            <p>Thanh toán khi nhận hàng (COD)</p>
          </label>
        </form>
      </div>
      <div className={cx('checkout-item')}>
        <div className={cx('checkout-title')}>THÔNG TIN SẢN PHẨM</div>
        <ul className={cx('checkout-list')}>
          {productCart.map((item, index) => (
            <ProductCart data={item} />
          ))}
        </ul>
        <div className={cx('payment-price')}>
          <div className={cx('price-item')}>
            <p>Tổng đơn</p>
            <b className={cx('cart-total__price')}>
              <NumericFormat
                type="text"
                value={totalPriceCart}
                displayType={'text'}
                thousandsGroupStyle="thousand"
                thousandSeparator=","
              />
            </b>
          </div>
          <div className={cx('price-item')}>
            <p>Ưu đãi (voucher / thành viên)</p>
            <p>- 0</p>
          </div>
          <div className={cx('price-item')}>
            <p>Phí ship</p>
            <p>0</p>
          </div>
        </div>
        <div className={cx('total-payment')}>
          <b>THÀNH TIỀN</b>
          <b className={cx('cart-total__price')}>
            <NumericFormat
              type="text"
              value={totalPriceCart}
              displayType={'text'}
              thousandsGroupStyle="thousand"
              thousandSeparator=","
            />
          </b>
        </div>
        <Button size="xxl" text="HOÀN TẤT ĐƠN HÀNG" />
      </div>
    </div>
  );
}

export default Checkout;
