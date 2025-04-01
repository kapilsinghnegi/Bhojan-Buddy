import React from "react";

const Footer = () => {
  const currYear = new Date().getFullYear();
  return (
    <footer className="footer text-center p-4 bg-white">
      <p className="font-semibold text-sm sm:text-base">
        Made with ❤️ by{" "}
        <a href="https://github.com/kapilsinghnegi/rep-eat">
          <span className="font-bold">Kapil Singh Negi</span>
        </a>
        &nbsp; &copy; {currYear}
      </p>
    </footer>
  );
};

export default Footer;
