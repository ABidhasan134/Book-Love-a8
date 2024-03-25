import React from "react";
import { Link, NavLink } from "react-router-dom";
import './navCss.css'

const Navbar = () => {
  const logo = (
    <>
      <a className="btn btn-ghost text-xl hover:bg-sky-400">Book Love</a>
    </>
  );
  const navItem = (
    <>
      <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
      <li><NavLink to="/list" activeClassName="active">Listed Book</NavLink></li>
      <li><NavLink to="/readed" activeClassName="active">Page to Read</NavLink></li>
    </>
  );
  return (
    <div className="navbar bg-base-100 haveto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItem}
          </ul>
        </div>
        {logo}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItem}
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <Link className="btn btn-success">Sing In</Link>
        <Link className="btn btn-info">Sing Up</Link>
      </div>
    </div>
  );
};

export default Navbar;
