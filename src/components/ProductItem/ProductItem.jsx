import styles from './ProductItem.module.scss';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { showSearchInput } from 'redux/actions';

const cx = classNames.bind(styles);

function ProductItems({ data }) {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(showSearchInput(false));
  };
  return (
    <Link to={`/product/${data.id}`} className={cx('product-item')} key={data.id} onClick={handleClick}>
      <img src={data.image} alt="" className={cx('product-image')} />
      <p className={cx('product-name')}>{data.name}</p>
      <div className={cx('product-price')}>
        <p className={cx('sale-price')}>{data.salePrice}</p>
        <p className={cx('old-price')}>
          <del>{data.price}</del>
        </p>
      </div>
    </Link>
  );
}

export default ProductItems;
