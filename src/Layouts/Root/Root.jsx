import React from 'react';
import '../../App.css';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../../Components/Footer/Footer';
import Loading from '../../Components/Loading/Loading';

const Root = () => {
  const { state } = useNavigation();
  return (
    <div>
      <Navbar></Navbar>
      <div className=" min-h-screen   text-black  transition-colors duration-300">
        {state == 'loading' ? <Loading /> : <Outlet></Outlet>}
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Root;
