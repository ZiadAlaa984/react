import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>

      <div className="mx-auto  relative w-full">
        <Navbar />
        <Outlet></Outlet>
        <Footer />
      </div>
    </>
  );
}
{
  // ~ tasks 
  // ~ 1- design 
  // ~ 2- navbar response 
}