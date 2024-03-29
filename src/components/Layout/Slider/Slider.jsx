import styles from './Slider.module.scss';
import classNames from 'classnames/bind';

import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import images from 'assets/images';
import { useSelector } from 'react-redux';
import ProductItems from 'components/ProductItem/ProductItem';

const cx = classNames.bind(styles);

function TextSlider() {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <Slider {...settings} className={cx('text-slider')}>
      <div className={cx('slider-content')}>
        <p>Đồng giá ship chỉ 20.000 cho đơn toàn quốc</p>
      </div>
      <div className={cx('slider-content')}>
        <p>Ưu đãi giảm 10.000 khi thanh toán trả trước</p>
      </div>
      <div className={cx('slider-content')}>
        <p>Đồng giá ship chỉ 10.000 cho đơn nội thành</p>
      </div>
    </Slider>
  );
}

function ImageSlider() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dotsClass: cx('custom-dots', 'slick-dots'),
  };
  return (
    <Slider {...settings} className={cx('image-slider')}>
      <div className={cx('slider-content')}>
        <img src={images.SliderImage1} alt="" />
      </div>
      <div className={cx('slider-content')}>
        <img src={images.SliderImage2} alt="" />
      </div>
      <div className={cx('slider-content')}>
        <img src={images.SliderImage5} alt="" />
      </div>
      <div className={cx('slider-content')}>
        <img src={images.SliderImage4} alt="" />
      </div>
      <div className={cx('slider-content')}>
        <img src={images.SliderImage3} alt="" />
      </div>
    </Slider>
  );
}

function ProductsSlider() {
  const products = useSelector((state) => state.product.products);
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className={cx('products-slider')}>
      {products.map((item) => (
        <ProductItems data={item} slideClass={true} key={item.id} />
      ))}
    </Slider>
  );
}

function PromotionSlider() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dotsClass: cx('custom-dots', 'slick-dots'),
  };
  return (
    <Slider {...settings} className={cx('promotion-slider')}>
      <div className={cx('slider-content')}>
        <img src={images.PromotionImage1} alt="" className={cx('promition-image')} />
      </div>
      <div className={cx('slider-content')}>
        <img src={images.PromotionImage2} alt="" className={cx('promition-image')} />
      </div>
      <div className={cx('slider-content')}>
        <img src={images.PromotionImage3} alt="" className={cx('promition-image')} />
      </div>
    </Slider>
  );
}

function BlogSlider() {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className={cx('blog-slider')}>
      <div className={cx('blog-content')}>
        <img src={images.BlogImage1} alt="" />
        <div className={cx('blog-desc')}>6 BÍ QUYẾT PHỐI MÀU GIÚP OUTFIT NỔI BẬT HƠN</div>
      </div>
      <div className={cx('blog-content')}>
        <img src={images.BlogImage2} alt="" />
        <div className={cx('blog-desc')}>BLAZER VÀ NHỮNG CÂU CHUYỆN THÚ VỊ</div>
      </div>
      <div className={cx('blog-content')}>
        <img src={images.BlogImage3} alt="" />
        <div className={cx('blog-desc')}>LỊCH SỬ NHỮNG CHIẾC QUẦN JEANS</div>
      </div>
      <div className={cx('blog-content')}>
        <img src={images.BlogImage4} alt="" />
        <div className={cx('blog-desc')}>SWEATSHIRT SWEATSHIRT</div>
      </div>
    </Slider>
  );
}

export { TextSlider, ImageSlider, ProductsSlider, PromotionSlider, BlogSlider };
