import styles from './ProductsManager.module.scss';
import classNames from 'classnames/bind';
import 'boxicons';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function ProductsManager() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.rootReducer.products);

  console.log(products);
  return (
    <div className={cx('wrapper')}>
      <div className={cx('product-action')}>
        <input type="text" className={cx('search-product')} placeholder="Tìm kiếm sản phẩm..." />
        <button className={cx('add-product')}>
          <box-icon name="plus" color=""></box-icon>
          <div>Thêm mới sản phẩm</div>
        </button>
      </div>
      <div className={cx('product-list')}>
        <h2>Danh sách sản phẩm</h2>
        <table className={cx('product-table')}>
          <tbody>
            <tr>
              <th>ID</th>
              <th>Tên sản phẩm</th>
              <th>Giá</th>
              <th>Hình ảnh</th>
              <th>Danh mục</th>
            </tr>

            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  <img src={product.image} alt="" width="60px" />
                </td>
                <td>{product.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductsManager;
