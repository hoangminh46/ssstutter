import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import 'boxicons';
import images from 'assets/images';

const cx = classNames.bind(styles);

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {};

  return (
    <div className={cx('wrapper')}>
      <div className={cx('login-title')}>{images.logo}SSStutter</div>
      <form onSubmit={handleSubmit} className={cx('login-form')}>
        <div className={cx('form-title')}>Đăng nhập</div>
        <div className={cx('input-section')}>
          <label htmlFor="username">Tài khoản</label>
          <input
            type="text"
            id="username"
            placeholder="Nhập tài khoản..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={cx('input-section')}>
          <label htmlFor="password">Mật khẩu</label>
          <input
            type="password"
            placeholder="Nhập mật khẩu..."
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className={cx('submit-btn')}>
          Đăng Nhập
        </button>
        <div className={cx('register')}>
          <p>
            Bạn chưa có tài khoản? <a href="">Đăng ký</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
