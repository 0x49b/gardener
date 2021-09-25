
import LoadingPage from '../pages/loading.f7';
import LoginPage from '../pages/login.f7';
import MainPage from '../pages/home.f7';

var routes = [
  {
    path: '/',
    component: LoadingPage,
  },
  {
    path: '/login',
    component: LoginPage,
  },
  {
    path: '/home',
    component: MainPage,
  },
];

export default routes;