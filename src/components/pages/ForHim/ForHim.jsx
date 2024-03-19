import styles from './ForHim.module.scss';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import ProductItems from 'components/ProductItem/ProductItem';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function ForHim() {
  const products = useSelector((state) => state.product.products);

  const dispatch = useDispatch();

  // lọc sản phẩm dành cho nam
  const forHimProducts = products.filter((item) => {
    return item.category.includes('ForHim');
  });
  return (
    <div className={cx('wrapper')}>
      <div className={cx('title')}>
        <h2 className={cx('heading')}>FOR HIM</h2>
        <p className={cx('desc')}>
          Tất cả những sản phẩm Mới nhất nằm trong BST được mở bán Hàng Tuần sẽ được cập nhật liên tục tại đây. Chắc
          chắn bạn sẽ tìm thấy những sản phẩm Đẹp Nhất - Vừa Vặn Nhất - Phù Hợp nhất với phong cách của mình.
        </p>
      </div>
      <div className={cx('content')}>
        <div className={cx('category')}>
          <div className={cx('option')}>
            <div className={cx('option-heading')}>DANH MỤC SẢN PHẨM</div>
            <div className={cx('option-select')}>
              <input type="checkbox" name="value" id="1" className={cx('input-option')} />
              <label htmlFor="1">Áo thun</label>
            </div>
            <div className={cx('option-select')}>
              <input type="checkbox" name="value" id="2" className={cx('input-option')} />
              <label htmlFor="2">Áo sơ mi</label>
            </div>
            <div className={cx('option-select')}>
              <input type="checkbox" name="value" id="3" className={cx('input-option')} />
              <label htmlFor="3">Quần jean</label>
            </div>
            <div className={cx('option-select')}>
              <input type="checkbox" name="value" id="4" className={cx('input-option')} />
              <label htmlFor="4">Quần tây</label>
            </div>
            <div className={cx('option-select')}>
              <input type="checkbox" name="value" id="5" className={cx('input-option')} />
              <label htmlFor="5">Váy</label>
            </div>
          </div>
        </div>
        <div className={cx('products')}>
          {forHimProducts.map((item) => (
            <ProductItems data={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ForHim;
