import { createBrowserRouter } from 'react-router';
import Root from '../Layouts/Root/Root';
import Home from '../Pages/Home/Home';

import Login from '../Pages/Login/Login';
import Register from '../Pages/Registerr/Register';

import Loading from '../Components/Loading/Loading';

import ErrorPage from '../Pages/Error/ErrorPage';
import Categories from '../Pages/Categories/Categories';
import AllProduct from '../Pages/AllProduct/AllProduct';
import AddProduct from '../Pages/AddProduct/AddProduct';
import MyProduct from '../Pages/MyProduct/MyProduct';
import Cart from '../Pages/Cart/Cart';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch('https://b11-assignment-11.vercel.app/categories'),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: '/categories',
        Component: Categories,
      },
      {
        path: '/allProduct',
        Component: AllProduct,
        loader: () =>
          fetch('https://b11-assignment-11.vercel.app/get-allProduct'),
      },
      {
        path: '/addProduct',
        Component: AddProduct,
      },
      {
        path: '/myProduct',
        Component: MyProduct,
      },
      {
        path: '/cart',
        Component: Cart,
      },
      {
        path: '/login',
        Component: Login,
      },

      {
        path: '/register',
        Component: Register,
      },
    ],
  },
]);

export default router;
