import { NavLink, useLocation, useNavigate } from 'react-router';
import './navbar.css';
import { use } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Tooltip } from 'react-tooltip';
import Swal from 'sweetalert2';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, userLogout } = use(AuthContext);
  const links = (
    <>
      <li className="dark:text-white text-black">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="dark:text-white text-black">
        <NavLink to="/addProduct">Add product</NavLink>
      </li>
      <li className="dark:text-white text-black">
        <NavLink to="/categories">Categories</NavLink>
      </li>
      <li className="dark:text-white text-black">
        <NavLink to="/allProduct">All product </NavLink>
      </li>

      <li className="dark:text-white text-black">
        <NavLink to="/myProduct">My product</NavLink>
      </li>
      <li className="dark:text-white text-black">
        <NavLink to="/cart">Cart</NavLink>
      </li>
    </>
  );

  const handelLogout = () => {
    userLogout()
      .then(() => {
        Swal.fire({
          title: 'Google login successful!!',
          icon: 'success',
          draggable: true,
        });
      })
      .catch(error => {
        toast.error(error);
      });
  };

  return (
    <div className="px-2 lg:px-0  bg-[#ffffff] dark:bg-[#2F2F2F] text-white shadow-sm py-5 md:py-6 ">
      <div className="navMenu flex justify-between items-center lg:w-11/12 md:mx-auto">
        <div className="flex items-center ">
          <div className="dropdown mr-2">
            <div
              tabIndex={0}
              role="button"
              className=" lg:hidden cursor-pointer "
            >
              <GiHamburgerMenu
                size={29}
                className="dark:text-white text-black"
              />{' '}
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content dark:bg-[#2F2F2F] bg-white rounded-box z-20 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <button
            className="cursor-pointer text-xl dark:text-white text-black  font-semibold"
            onClick={() => navigate('/')}
          >
            Global
            <span className="font-serif font-bold text-blue-600">Bazaar</span>
          </button>
        </div>

        {/* for mobile */}
        <div className=" hidden lg:flex ">
          <ul className="menu-horizontal px-1 navLink ">{links}</ul>
        </div>

        <div className="flex hidden lg:flex gap-2">
          <div>
            {user ? (
              <>
                <button
                  onClick={handelLogout}
                  className=" bg-indigo-600 font-medium py-2 px-4 rounded-lg transition "
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => navigate('/login')}
                  className={`bg-indigo-600 font-medium py-2 px-4 rounded-lg transition duration-200 ${
                    pathname === '/login'
                      ? 'hover:bg-indigo-700 text-white'
                      : ''
                  }`}
                >
                  Login
                </button>
                <button
                  onClick={() => navigate('/register')}
                  className="bg-indigo-600 font-medium py-2 px-4 rounded-lg transition duration-200 ml-2"
                >
                  SignUp
                </button>
              </>
            )}
          </div>
          <div className="hidden lg:flex">
            <ThemeToggle></ThemeToggle>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
