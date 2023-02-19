import routesConfig from 'config/routes';
// Layouts

import Home from 'components/pages/Home/Home';
import ForHim from 'components/pages/ForHim/ForHim';
import ForHer from 'components/pages/ForHer/ForHer';
import Contact from 'components/pages/Contact/Contact';
import ProductDetail from 'components/pages/ProductDetail/ProductDetail';
import NotFound from 'components/pages/NotFound/NotFound';
//Pages

// Dùng cho những Router không cần đăng nhập vẫn xem được
const publicRoutes = [
  { path: routesConfig.home, components: Home },
  { path: routesConfig.forHim, components: ForHim },
  { path: routesConfig.forHer, components: ForHer },
  { path: routesConfig.contact, components: Contact },
  { path: '/product/:ProductId', components: ProductDetail },
  { path: '*', components: NotFound },
];
// Dùng cho những Router phải đăng nhập mới xem được
// Không đăng nhập sẽ chuyển về trang Login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
