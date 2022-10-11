import React from "react";
import { Link } from "react-router-dom";
import profilePic from "../../public/profile-pic.png";

const Header = () => {
  return (
    <header className="flex align-center bg-slate-900 w-full justify-center p-4">
      <nav className="flex w-full max-w-[1300px] align-center justify-between">
        <Link to="/" className="grid place-items-center">
          <span className="font-semibold text-xl text-white">Movie App</span>
        </Link>

        <img className="w-10 h-10  rounded" src={profilePic} alt="" />
      </nav>
    </header>
  );
};

export default Header;
