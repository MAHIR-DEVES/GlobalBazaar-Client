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
import ProductCategories from '../Components/ProductCategories/ProductCategories';
import ProductDetails from '../Components/ProductDetails/ProductDetails';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch('http://localhost:3000/categories'),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: '/categories',
        Component: Categories,
      },
      {
        path: '/category/:id',
        Component: ProductCategories,
      },
      {
        path: '/allProduct',
        Component: AllProduct,
        loader: () => fetch('http://localhost:3000/get-allProduct'),
      },
      {
        path: '/productDetails/:id',
        Component: ProductDetails,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/singleProduct/${params.id}`),
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
