import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 w-full py-4 flex justify-center absolute bottom-0">
      <div className="flex flex-col text-white items-center">
        <p>Movie App</p>
        <span>@2021, Movie, Inc or its affiliates</span>
      </div>
    </footer>
  );
};

export default Footer;
