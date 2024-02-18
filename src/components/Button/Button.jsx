import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import 'boxicons';

const cx = classNames.bind(styles);

function Button({ text, size }) {
  return (
    <div
      className={size ? cx('wrapper', size) : cx('wrapper')}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <div className={cx('btn-text')}>{text}</div>
    </div>
  );
}

export default Button;
