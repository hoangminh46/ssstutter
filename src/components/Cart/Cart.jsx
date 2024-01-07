import 'boxicons';
import styles from './Cart.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setToggleCart } from 'redux/actions';
import Button from 'components/Button/Button';
const cx = classNames.bind(styles);

function Cart() {
  const dispatch = useDispatch();
  const [quantityInput, setQuantityInput] = useState(1);
  const toggleCart = useSelector((state) => state.rootReducer.toggleCart);
  const productCart = useSelector((state) => state.rootReducer.productCart);
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
              productCart.map((item, index) => (
                <li className={cx('cart-item')} key={index}>
                  <div className={cx('cart-item__image')}>
                    <img src={item.image} alt="" />
                  </div>
                  <div className={cx('cart-item__info')}>
                    <div className={cx('cart-item__name')}>
                      <b>{item.name}</b>
                      <div className={cx('cart-item__delete')}>
                        <box-icon name="x" size="md"></box-icon>
                      </div>
                    </div>
                    <div className={cx('cart-item-price')}>
                      <div className={cx('discounted-price')}>{item.salePrice}</div>
                      <div className={cx('current-price')}>{item.price}</div>
                    </div>
                    <div className={cx('cart-item__more')}>
                      <p className={cx('cart-item__heading')}>Số lượng:</p>
                      <div className={cx('quantity-cart')}>
                        <div
                          className={cx('quantity__btn')}
                          onClick={() => {
                            if (quantityInput > 0) {
                              setQuantityInput((prev) => prev - 1);
                            }
                          }}
                        >
                          <box-icon name="minus" size="md"></box-icon>
                        </div>
                        <div className={cx('quantity__input')}>{quantityInput}</div>
                        <div
                          className={cx('quantity__btn')}
                          onClick={() => {
                            if (quantityInput < 99) {
                              setQuantityInput((prev) => prev + 1);
                            }
                          }}
                        >
                          <box-icon name="plus" size="md"></box-icon>
                        </div>
                      </div>
                    </div>
                    <div className={cx('cart-item__more')}>
                      <p className={cx('cart-item__heading')}>Màu:</p>
                      <div>Be sáng</div>
                    </div>
                    <div className={cx('cart-item__more')}>
                      <p className={cx('cart-item__heading')}>Size:</p>
                      <div>M</div>
                    </div>
                    <div className={cx('cart-item__more')}>
                      <p className={cx('cart-item__heading')}>Tổng:</p>
                      <div>500,000</div>
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <div className={cx('no-cart__product')}>Giỏ hàng chưa có sản phẩm</div>
            )}
          </ul>
        </div>
        <div className={cx('cart-footer')}>
          <div className={cx('cart-total')}>
            <p>Thành tiền</p>
            <b className={cx('cart-total__price')}>500,000</b>
          </div>
          <Button text="Thanh toán" size="xxl" />
        </div>
      </div>
    </div>
  );
}

export default Cart;
