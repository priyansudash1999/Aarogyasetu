import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row bg-blue-500 rounded-2xl overflow-hidden px-6 sm:px-10 lg:px-20">
      {/* Left Section (Text) */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center gap-5 py-12 md:py-[8vw] text-white text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-snug max-w-[90%] md:max-w-none">
          Book Appointment <br /> with Trusted Doctors
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 text-sm sm:text-base font-light">
          <img
            className="w-24 sm:w-28"
            src={assets.group_profiles}
            alt="Group Profiles"
          />
          <p className="max-w-[400px]">
            Connect with trusted doctors anytime, anywhere.{" "}
            <br className="hidden sm:block" />
            Schedule your appointments effortlessly.
          </p>
        </div>

        <a
          href="#speciality"
          className="flex items-center justify-center gap-2 bg-white text-gray-700 font-medium px-8 py-3 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
        >
          Book Appointment
          <img className="w-3.5" src={assets.arrow_icon} alt="Arrow Icon" />
        </a>
      </div>

      {/* Right Section (Image) */}
      <div className="w-full md:w-1/2 flex justify-center items-end mb-6 md:mb-0">
        <img
          className="w-[85%] sm:w-[70%] md:w-full max-w-[500px] md:max-w-none object-contain md:object-cover rounded-t-xl md:rounded-none md:rounded-l-3xl"
          src={assets.header_img}
          alt="Doctor Header"
        />
      </div>
    </div>
  );
};

export default Header;
