import styles from './Checkout.module.scss';
import classNames from 'classnames/bind';
import images from 'assets/images';
import { useDispatch, useSelector } from 'react-redux';
import ProductCart from 'components/ProductCart/ProductCart';
import { NumericFormat } from 'react-number-format';
import Button from 'components/Button/Button';
import { useEffect, useState } from 'react';
import { fetchCity } from 'redux/configSlice';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const cx = classNames.bind(styles);

const schema = yup.object().shape({
  name: yup.string().required('Vui lòng điền tên của bạn'),
  email: yup.string().email('Email không hợp lệ').required('Vui lòng điền Email của bạn'),
  phone: yup.string().matches(/^\d+$/, 'Số điện thoại không hợp lệ').required('Vui lòng điền số điện thoại'),
  city: yup.string().notOneOf(['default'], 'Bạn chưa chọn thành phố').required('Bạn chưa chọn thành phố'),
  district: yup.string().notOneOf(['default'], 'Bạn chưa chọn quận huyện').required('Bạn chưa chọn quận huyện'),
  ward: yup.string().notOneOf(['default'], 'Bạn chưa chọn phường xã').required('Bạn chưa chọn phường xã'),
  address: yup.string().required('Vui lòng điền địa chỉ'),
  paymentMethod: yup.string().required('Vui lòng chọn phương thức thanh toán'),
});

function Checkout() {
  const dispatch = useDispatch();
  const [citis, setCitis] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitForm1 = (data) => {
    console.log('Form 1 data:', data);
  };

  const onSubmitForm2 = (data) => {
    console.log('Form 2 data:', data);
  };

  const handleValidateAll = () => {
    handleSubmit(onSubmitForm1)();
    handleSubmit(onSubmitForm2)();
  };

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
        <form action="" className={cx('checkout-form')} onSubmit={handleSubmit(onSubmitForm1)}>
          <div className={cx('form-section')}>
            <label className={cx('form-label')}>Họ và Tên</label>
            <input label="Họ và Tên" name="customerName" type="text" {...register('name')} />
            {errors.name && <p className={cx('error-message')}>{errors.name.message}</p>}
          </div>

          <div className={cx('form-section')}>
            <label className={cx('form-label')}>Email</label>
            <input label="Email" name="customerEmail" type="text" {...register('email')} />
            {errors.email && <p className={cx('error-message')}>{errors.email.message}</p>}
          </div>

          <div className={cx('form-section')}>
            <label className={cx('form-label')}>Số điện thoại</label>
            <input label="Số điện thoại" name="customerPhone" type="text" {...register('phone')} />
            {errors.phone && <p className={cx('error-message')}>{errors.phone.message}</p>}
          </div>
          <div className={cx('form-section')}>
            <label className={cx('form-label')}>Chọn tỉnh/ Thành phố</label>
            <select name="city" id="city" defaultValue="default" {...register('city')} onChange={handleCityChange}>
              <option value="default" hidden>
                Chọn tỉnh thành
              </option>
              {cityData.map((item) => (
                <option key={item.Id} value={item.Id}>
                  {item.Name}
                </option>
              ))}
            </select>
            {errors.city && <p className={cx('error-message')}>{errors.city.message}</p>}
          </div>
          <div className={cx('form-section')}>
            <label className={cx('form-label')}>Chọn quận/ Huyện</label>
            <select
              name="district"
              id="district"
              defaultValue="default"
              {...register('district')}
              onChange={handleDistrictChange}
            >
              <option value="default" hidden>
                Chọn quận huyện
              </option>
              {districts}
            </select>
            {errors.district && <p className={cx('error-message')}>{errors.district.message}</p>}
          </div>
          <div className={cx('form-section')}>
            <label className={cx('form-label')}>Chọn phường/ Xã</label>
            <select name="ward" id="ward" defaultValue="default" {...register('ward')}>
              <option value="default" hidden>
                Chọn phường xã
              </option>
              {wards}
            </select>
            {errors.ward && <p className={cx('error-message')}>{errors.ward.message}</p>}
          </div>
          <div className={cx('form-section')}>
            <label className={cx('form-label')}>Số nhà, tên đường</label>
            <input label="Số nhà, tên đường" name="address" type="text" {...register('address')} />
            {errors.address && <p className={cx('error-message')}>{errors.address.message}</p>}
          </div>
        </form>
      </div>
      <div className={cx('checkout-item')}>
        <div className={cx('checkout-title')}>PHƯƠNG THỨC THANH TOÁN</div>
        <form action="" className={cx('form-method')} onSubmit={handleSubmit(onSubmitForm2)}>
          <label htmlFor="card" className={cx('method-section')}>
            <input type="radio" name="paymentMethod" value="card" id="card" {...register('paymentMethod')} />
            <img className={cx('checkout-icon')} src={images.PaymentImage1} alt="" />
            <p>Thanh toán thẻ (ATM, Visa)</p>
          </label>
          <label htmlFor="momo" className={cx('method-section')}>
            <input type="radio" name="paymentMethod" value="momo" id="momo" {...register('paymentMethod')} />
            <img className={cx('checkout-icon')} src={images.PaymentImage2} alt="" />
            <p>Thanh toán bằng MoMo</p>
          </label>
          <label htmlFor="cod" className={cx('method-section')}>
            <input type="radio" name="paymentMethod" value="cod" id="cod" {...register('paymentMethod')} />
            <img className={cx('checkout-icon')} src={images.PaymentImage3} alt="" />
            <p>Thanh toán khi nhận hàng (COD)</p>
          </label>
          {errors.paymentMethod && <p className={cx('error-message')}>{errors.paymentMethod.message}</p>}
        </form>
      </div>
      <div className={cx('checkout-item')}>
        <div className={cx('checkout-title')}>THÔNG TIN SẢN PHẨM</div>
        <ul className={cx('checkout-list')}>
          {productCart.map((item, index) => (
            <ProductCart data={item} checkout={true} />
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
        <div className={cx('payment-button')} onClick={handleValidateAll}>
          HOÀN TẤT ĐƠN HÀNG
        </div>
      </div>
    </div>
  );
}

export default Checkout;
