import styles from './Checkout.module.scss';
import classNames from 'classnames/bind';
import images from 'assets/images';
import { useDispatch, useSelector } from 'react-redux';
import ProductCart from 'components/ProductCart/ProductCart';
import { NumericFormat } from 'react-number-format';
import Button from 'components/Button/Button';
import { useEffect, useState } from 'react';
import { fetchCity } from 'redux/configSlice';

const cx = classNames.bind(styles);

function Checkout() {
  const [citis, setCitis] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  const dispatch = useDispatch();
  const productCart = useSelector((state) => state.cart.productCart);
  const totalPriceCart = useSelector((state) => state.cart.totalPriceCart);
  const cityData = useSelector((state) => state.config.cityData);

  useEffect(() => {
    dispatch(fetchCity());
  }, [dispatch]);

  function handleCityChange(e) {
    const selectedCityId = e.target.value;
    const selectedCity = cityData.find((city) => city.Id === selectedCityId);
    setCitis(selectedCity);

    const districtOptions = selectedCity.Districts.map((district) => (
      <option key={district.Id} value={district.Id}>
        {district.Name}
      </option>
    ));
    setDistricts(districtOptions);
    setWards([]);
  }

  const handleDistrictChange = (e) => {
    const selectedDistrictId = e.target.value;
    const selectedCity = citis;
    const selectedDistrict = selectedCity.Districts.find((district) => district.Id === selectedDistrictId);

    const wardOptions = selectedDistrict.Wards.map((ward) => (
      <option key={ward.Id} value={ward.Id}>
        {ward.Name}
      </option>
    ));
    setWards(wardOptions);
  };

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
            <select name="city" id="city" defaultValue="default" onChange={handleCityChange}>
              <option value="default" hidden>
                Chọn tỉnh thành
              </option>
              {cityData.map((item) => (
                <option key={item.Id} value={item.Id}>
                  {item.Name}
                </option>
              ))}
            </select>
          </div>
          <div className={cx('form-section')}>
            <label className={cx('form-label')}>Chọn quận/ Huyện</label>
            <select name="district" id="district" defaultValue="default" onChange={handleDistrictChange}>
              <option value="default" hidden>
                Chọn quận huyện
              </option>
              {districts}
            </select>
          </div>
          <div className={cx('form-section')}>
            <label className={cx('form-label')}>Chọn phường/ Xã</label>
            <select name="ward" id="ward" defaultValue="default">
              <option value="default" hidden>
                Chọn phường xã
              </option>
              {wards}
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
