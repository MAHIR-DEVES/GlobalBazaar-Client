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
import PrivateRoute from '../Provider/AuthProvider/PrivateRoute';
import UpdatedProduct from '../Pages/UpdatedProduct/UpdatedProduct';

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
        loader: () =>
          fetch('https://b11-assignment-11.vercel.app/all-categories'),
      },
      {
        path: '/category/:id',
        element: (
          <PrivateRoute>
            <ProductCategories></ProductCategories>
          </PrivateRoute>
        ),
      },
      {
        path: '/allProduct',
        element: (
          <PrivateRoute>
            <AllProduct></AllProduct>
          </PrivateRoute>
        ),
        // loader: () => fetch(''),
      },
      {
        path: '/productDetails/:id',
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
      },
      {
        path: '/addProduct',
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },

      {
        path: '/myProduct',
        element: (
          <PrivateRoute>
            <MyProduct></MyProduct>
          </PrivateRoute>
        ),
      },
      {
        path: '/updatedProduct/:id',
        element: (
          <PrivateRoute>
            <UpdatedProduct></UpdatedProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b11-assignment-11.vercel.app/singleProduct/${params.id}`
          ),
      },
      {
        path: '/cart',
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
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
