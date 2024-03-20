import styles from './ProductItem.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { NumericFormat } from 'react-number-format';

const cx = classNames.bind(styles);

function ProductItems({ data, slideClass }) {
  return (
    <Link to={`/product/${data.id}`} className={cx('product-item', slideClass && 'product-item__slider')} key={data.id}>
      <img src={data.image} alt="" className={cx('product-image')} />
      <p className={cx('product-name')}>{data.name}</p>
      <div className={cx('product-price')}>
        <p className={cx('sale-price')}>
          <NumericFormat
            type="text"
            value={data.salePrice}
            displayType={'text'}
            thousandsGroupStyle="thousand"
            thousandSeparator=","
          />
        </p>
        <p className={cx('old-price')}>
          <del>
            <NumericFormat
              type="text"
              value={data.price}
              displayType={'text'}
              thousandsGroupStyle="thousand"
              thousandSeparator=","
            />
          </del>
        </p>
      </div>
    </Link>
  );
}

export default ProductItems;
