import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import 'boxicons';
import { useDispatch, useSelector } from 'react-redux';
import ProductItems from 'components/ProductItem/ProductItem';
import { showSearchInput } from 'redux/actions';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  console.log(searchValue);
  const dispatch = useDispatch();
  const showSearch = useSelector((state) => state.rootReducer.showSearchInput);
  const products = useSelector((state) => state.rootReducer.products);

  const searchValueRegex = searchValue.replace(new RegExp('\\\\', 'g'), '\\\\');

  const searchProducts = products.filter((item) => {
    return item.name.toLowerCase().match(searchValueRegex.trim().toLowerCase());
  });

  console.log(searchProducts);

  // handle click an/hien Search
  const handleClick = () => {
    dispatch(showSearchInput(!showSearch));
  };

  //handle nhap du lieu vao input
  const handleSearchValue = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(' ')) {
      setSearchValue(searchValue);
    }
  };

  return (
    <div className={showSearch ? cx('wrapper', 'open-modal') : cx('wrapper', 'close-modal')}>
      <div className={cx('search')}>
        <div className={cx('back-icon')} onClick={handleClick}>
          <box-icon name="arrow-back" size="lg"></box-icon>
        </div>
        <input
          type="text"
          name=""
          id=""
          className={cx('search-input')}
          placeholder="Tìm kiếm sản phẩm..."
          value={searchValue}
          onChange={handleSearchValue}
        />
      </div>
      <div className={cx('search-title')}>{searchValue ? `Đã tìm thấy ${searchProducts.length} sản phẩm` : ''}</div>
      <div className={cx('search-result')}>
        {searchValue && searchProducts.map((item) => <ProductItems data={item} key={item.id} />)}
      </div>
    </div>
  );
}

export default Search;
