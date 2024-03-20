import 'boxicons';
import styles from './Cart.module.scss';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { NumericFormat } from 'react-number-format';
import Button from 'components/Button/Button';
import { setToggleCart } from 'redux/cartSlice';
import ProductCart from 'components/ProductCart/ProductCart';
const cx = classNames.bind(styles);

function Cart() {
  const dispatch = useDispatch();
  const toggleCart = useSelector((state) => state.cart.toggleCart);
  const productCart = useSelector((state) => state.cart.productCart);
  const totalPriceCart = useSelector((state) => state.cart.totalPriceCart);

  function handleClickCart(e) {
    if (e.currentTarget === e.target) {
      dispatch(setToggleCart(false));
    }
  }

  function handleCloseCart() {
    dispatch(setToggleCart(false));
  }

  return (
    <div
      className={toggleCart ? cx('cart-wrapper', 'show-cart__wrapper') : cx('cart-wrapper', 'hide-cart__wrapper')}
      onClick={(e) => handleClickCart(e)}
    >
      <div className={toggleCart ? cx('cart', 'show-cart') : cx('cart', 'hide-cart')}>
        <div className={cx('cart-header')}>
          <p>Giỏ hàng</p>
          <div className={cx('cart-close')} onClick={handleCloseCart}>
            <box-icon name="x" size="lg"></box-icon>
          </div>
        </div>
        <div className={cx('cart-content')}>
          <ul className={cx('cart-list')}>
            {productCart.length > 0 ? (
              productCart.map((item, index) => <ProductCart data={item} />)
            ) : (
              <div className={cx('no-cart__product')}>Giỏ hàng chưa có sản phẩm</div>
            )}
          </ul>
        </div>
        <div className={cx('cart-footer')}>
          <div className={cx('cart-total')}>
            <p>Thành tiền</p>
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
          <Button text="Thanh toán" size="xxl" />
        </div>
      </div>
    </div>
  );
}

export default Cart;
