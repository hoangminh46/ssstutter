import styles from './ProductDetail.module.scss';
import classNames from 'classnames/bind';

import { NumericFormat } from 'react-number-format';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addProductCart, updateTotalPriceCart } from 'redux/cartSlice';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cx = classNames.bind(styles);

function ProductDetail() {
  // Xu ly khach hang chon so luong
  const [quantityInput, setQuantityInput] = useState(1);

  const [readMore, setReadMore] = useState(false);

  const products = useSelector((state) => state.product.products);
  const { ProductId } = useParams();
  const dispatch = useDispatch();

  const product = products.find((item) => {
    return item.id === ProductId;
  });

  function handleAddProduct() {
    dispatch(
      addProductCart({ ...product, countProduct: quantityInput, totalPrice: quantityInput * product.salePrice }),
    );
    dispatch(updateTotalPriceCart());
    toast.success(`Đã thêm ${product.name} x${quantityInput}`, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Bounce,
    });
  }

  return (
    <div className={cx('wrapper')}>
      <ToastContainer />
      {product && (
        <div className={cx('product-detail')}>
          <div className={cx('product-image')}>
            <img src={product.image} alt="" />
          </div>
          <div className={cx('product-desc')}>
            <div className={cx('product-name')}>{product.name}</div>
            <div className={cx('product-price')}>
              <p className={cx('sale-price')}>
                <NumericFormat
                  type="text"
                  value={product.salePrice}
                  displayType={'text'}
                  thousandsGroupStyle="thousand"
                  thousandSeparator=","
                />
              </p>
              <del className={cx('old-price')}>
                <NumericFormat
                  type="text"
                  value={product.price}
                  displayType={'text'}
                  thousandsGroupStyle="thousand"
                  thousandSeparator=","
                />
              </del>
            </div>
            <div className={cx('product-color')}>
              <p>Màu sắc</p>
              <div className={cx('color-list')}>
                <input type="radio" name="color" id="white" value="white" className={cx('custom-radio', 'white')} />
                <input type="radio" name="color" id="black" value="black" className={cx('custom-radio', 'black')} />
                <input type="radio" name="color" id="blue" value="blue" className={cx('custom-radio', 'blue')} />
              </div>
            </div>
            <div className={cx('product-size')}>
              <p>Kích thước</p>
              <div className={cx('size-list')}>
                <div className={cx('size-item')}>
                  <input type="radio" name="size" id="M" value="M" />
                  <label htmlFor="M">M</label>
                </div>
                <div className={cx('size-item')}>
                  <input type="radio" name="size" id="L" value="L" />
                  <label htmlFor="L">L</label>
                </div>
                <div className={cx('size-item')}>
                  <input type="radio" name="size" id="XL" value="XL" />
                  <label htmlFor="XL">XL</label>
                </div>
              </div>
            </div>
            <div className={cx('product-quantity')}>
              <p>Số lượng</p>
              <div className={cx('select-quantity')}>
                <div
                  className={cx('select-quantity__btn')}
                  onClick={() => {
                    if (quantityInput > 0) {
                      setQuantityInput((prev) => prev - 1);
                    }
                  }}
                >
                  <box-icon name="minus"></box-icon>
                </div>
                <div className={cx('select-quantity__input')}>{quantityInput}</div>
                <div
                  className={cx('select-quantity__btn')}
                  onClick={() => {
                    if (quantityInput < 99) {
                      setQuantityInput((prev) => prev + 1);
                    }
                  }}
                >
                  <box-icon name="plus"></box-icon>
                </div>
              </div>
            </div>
            <div className={cx('product-choice')}>
              <button className={cx('product-btn')} onClick={handleAddProduct}>
                THÊM VÀO GIỎ HÀNG
              </button>
            </div>
          </div>
          <div className={cx('product-info')}>
            <div className={readMore ? cx('info', 'more') : cx('info')}>
              <h3>CHI TIẾT SẢN PHẨM</h3>
              <h4 className={cx('info-name')}>Tên sản phẩm: {product.name}</h4>
              <p>---</p>
              <h4>✨ Thông tin sản phẩm</h4>
              <div className={cx('info-group')}>
                <p>Màu sắc: trắng be, vàng cát, đen, xanh mint, ghi nhạt</p>
                <p>Kích cỡ: 0/1/2/3 tương ứng với S/M/L/XL</p>
                <p>Chất liệu: vải bamboo (thoáng mát và không nhăn)</p>
                <p>Xuất xứ: Việt Nam</p>
              </div>
              <h4>✨ QUI ĐỊNH ĐỔI HÀNG KHI MUA</h4>
              <div className={cx('info-group')}>
                <p>- Mỗi hoá đơn chỉ được đổi một lần. Bạn có thể đổi hàng trong 14 ngày kể từ ngày mua hàng</p>
                <p>
                  - Mặt hàng phải ở trong tình trạng ban đầu, còn nguyên tem mác, chưa qua sử dụng, chưa giặt giũ và có
                  hoá đơn tương ứng
                </p>
                <p>
                  - Bạn vui lòng giữ lại hoá đơn để được đổi hàng. Bạn có thể xuất trình hóa đơn mua hàng dưới dạng giấy
                  in hoặc định dạng điện tử trên điện thoại di động của bạn
                </p>
                <p>
                  - SSSTUTTER không áp dụng trả hàng - hoàn tiền dưới mọi hình thức (cả trong trường hợp hoá đơn đã mua
                  có giá trị cao hơn hoá đơn đổi)
                </p>
                <p>
                  - Với các sản phẩm giảm dưới 30%, SSSTUTTER sẽ hỗ trợ đổi hàng và số lượng sản phẩm đổi nhiều hơn sản
                  phẩm trả, miễn tổng hoá đơn đổi bằng hoặc lớn hơn. Trong trường hợp hoá đơn đổi cao hơn, bạn vui lòng
                  bù thêm phần chênh lệch.
                </p>
                <p>
                  - Với các sản phẩm giảm dưới 30%, SSSTUTTER sẽ hỗ trợ đổi hàng và số lượng sản phẩm đổi nhiều hơn sản
                  phẩm trả, miễn tổng hoá đơn đổi bằng hoặc lớn hơn. Trong trường hợp hoá đơn đổi cao hơn, bạn vui lòng
                  bù thêm phần chênh lệch.
                </p>
                <p>- Với các sản phẩm giảm trên 30% và sản phẩm phụ kiện, SSSTUTTER sẽ không hỗ trợ đổi hàng</p>
                <p>- Quà tặng không được đổi hoặc qui ra tiền, voucher.</p>
              </div>
              <h4>✨ ĐẶC QUYỀN KHI MUA ĐỒ CỦA SSSTUTTER:</h4>
              <div className={cx('info-group')}>
                <p>- Sản phẩm đúng với hình ảnh, thậm chí đẹp hơn trên hình, cả nam và nữ mặc lên đều phù hợp.</p>
                <p>
                  - Bao bì nylon trắng đục có thể thấy được sản phẩm bên trong, tái chế chống mưa và hạn chế các tác
                  động vật lý
                </p>
                <p>- Thiệp cám ơn, Card shop, hoá đơn mua hàng tiêu chuẩn chuyên nghiệp</p>
              </div>
              <h4>✨ NHỮNG ĐIỀU LƯU Ý KHI BẢO QUẢN ÁO:</h4>
              <div className={cx('info-group')}>
                <p>- Không để áo ở các nơi ẩm và nên giặt áo ngay sau khi sử dụng để tránh ẩm mốc;</p>
                <p>- Không giặt chung áo trắng với quần áo màu;</p>
                <p>- Không đổ trực tiếp bột giặt lên quần áo khi giặt để tránh áo bị phai và loang màu;</p>
              </div>
            </div>
            <button
              className={cx('btn-info')}
              onClick={() => {
                setReadMore(!readMore);
              }}
            >
              {readMore ? 'Thu gọn' : 'Xem thêm'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
