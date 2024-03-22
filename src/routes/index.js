import routesConfig from 'config/routes';
// Layouts

import Home from 'components/pages/Home/Home';
import ForHim from 'components/pages/ForHim/ForHim';
import ForHer from 'components/pages/ForHer/ForHer';
import Contact from 'components/pages/Contact/Contact';
import ProductDetail from 'components/pages/ProductDetail/ProductDetail';
import NotFound from 'components/pages/NotFound/NotFound';
import Admin from 'components/pages/Admin/Admin';
import Login from 'components/pages/Login/Login';
import Checkout from 'components/pages/Checkout/Checkout';

//Pages

const publicRoutes = [
  { path: routesConfig.home, components: Home },
  { path: routesConfig.forHim, components: ForHim },
  { path: routesConfig.forHer, components: ForHer },
  { path: routesConfig.contact, components: Contact },
  { path: routesConfig.checkout, components: Checkout },
  { path: routesConfig.admin, components: Admin, layout: null },
  { path: '/product/:ProductId', components: ProductDetail },
  { path: routesConfig.login, components: Login, layout: null },
  { path: '*', components: NotFound },
];

export { publicRoutes };
