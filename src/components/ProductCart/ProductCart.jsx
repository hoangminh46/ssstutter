import { useState } from 'react';
import styles from './ProductCart.module.scss';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { NumericFormat } from 'react-number-format';
import { decreaseQuantityInput, deleteProductCart, increaseQuantityInput, updateTotalPriceCart } from 'redux/cartSlice';

const cx = classNames.bind(styles);

function ProductCart({ data }) {
  const dispatch = useDispatch();

  function handleDeleteProduct(product) {
    dispatch(deleteProductCart(product));
    dispatch(updateTotalPriceCart());
  }

  return (
    <li className={cx('cart-item')} key={data.id}>
      <div className={cx('cart-item__image')}>
        <img src={data.image} alt="" />
      </div>
      <div className={cx('cart-item__info')}>
        <div className={cx('cart-item__name')}>
          <b>{data.name}</b>
          <div className={cx('cart-item__delete')} onClick={() => handleDeleteProduct(data)}>
            <box-icon name="x" size="md"></box-icon>
          </div>
        </div>
        <div className={cx('cart-item-price')}>
          <div className={cx('discounted-price')}>
            <NumericFormat
              type="text"
              value={data.salePrice}
              displayType={'text'}
              thousandsGroupStyle="thousand"
              thousandSeparator=","
            />
          </div>
          <div className={cx('current-price')}>
            <NumericFormat
              type="text"
              value={data.price}
              displayType={'text'}
              thousandsGroupStyle="thousand"
              thousandSeparator=","
            />
          </div>
        </div>
        <div className={cx('cart-item__more')}>
          <p className={cx('cart-item__heading')}>Số lượng:</p>
          <div className={cx('quantity-cart')}>
            <div
              className={cx('quantity__btn')}
              onClick={() => {
                dispatch(decreaseQuantityInput(data));
                dispatch(updateTotalPriceCart());
              }}
            >
              <box-icon name="minus" size="md"></box-icon>
            </div>
            <div className={cx('quantity__input')}>{data.countProduct}</div>
            <div
              className={cx('quantity__btn')}
              onClick={() => {
                dispatch(increaseQuantityInput(data));
                dispatch(updateTotalPriceCart());
              }}
            >
              <box-icon name="plus" size="md"></box-icon>
            </div>
          </div>
        </div>
        <div className={cx('cart-item__more')}>
          <p className={cx('cart-item__heading')}>Màu :</p>
          <div>Be sáng</div>
        </div>
        <div className={cx('cart-item__more')}>
          <p className={cx('cart-item__heading')}>Size :</p>
          <div>M</div>
        </div>
        <div className={cx('cart-item__more')}>
          <p className={cx('cart-item__heading')}>Tổng :</p>
          <div>
            <NumericFormat
              type="text"
              value={data.totalPrice}
              displayType={'text'}
              thousandsGroupStyle="thousand"
              thousandSeparator=","
            />
          </div>
        </div>
      </div>
    </li>
  );
}

export default ProductCart;
