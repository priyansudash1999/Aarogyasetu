import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img
        onClick={() => navigate("/")}
        src={assets.logo}
        alt=""
        className="w-[100px] cursor-pointer"
      />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1">Home</li>
          <hr className="border-none outline-noe h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1">All Doctors</li>
          <hr className="border-none outline-noe h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1">About</li>
          <hr className="border-none outline-noe h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1">Contact</li>
          <hr className="border-none outline-noe h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img src={assets.profile_pic} className="w-8 rounded-full" />
            <img src={assets.dropdown_icon} alt="" className="w-2.5 " />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("/my-profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/my-appointments")}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointments
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block cursor-pointer"
          >
            Create Account
          </button>
        )}
        <img
          src={assets.menu_icon}
          alt=""
          onClick={() => setShowMenu(true)}
          className="w-5 md:hidden cursor-pointer"
        />

        {/* Menu on mobile */}
        <div
          className={`${
            showMenu ? "fixed w-full" : "h-0 w-0"
          } md:hidden right-0 top-0 bottom-0 overflow-hidden z-20 bg-white transition-all`}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <img src={assets.logo} alt="" className="w-36" />
            <img
              className="w-8 cursor-pointer"
              src={assets.cross_icon}
              alt=""
              onClick={() => setShowMenu(false)}
            />
          </div>
          <ul className="flex flex-col items-center gap-3 mt-2 font-semibold text-lg">
            <NavLink onClick={() => setShowMenu(false)} to="/">
              Home
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/doctors">
              All Doctors
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/about">
              About
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/contact">
              Contact
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
