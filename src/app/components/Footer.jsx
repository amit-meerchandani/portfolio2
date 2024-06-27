import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-[#33353F] border-l-transparent border-r-transparent text-white flex justify-center">
      <div className="container p-12 flex justify-center">
        {/* <span>Thanks for visiting...</span> */}
        <p className="text-slate-500 text-sm lg:text-lg text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">© Amit Meerchandani, Have a great day!</p>
      </div>
    </footer>
  );
};

export default Footer;
