import React from "react";

const About = () => {
  return (
    <div className="w-full flex-grow flex flex-col-reverse sm:flex-row justify-between h-full my-4 px-2 sm:px-8">
      {/* Left Section */}
      <div className="container-left w-full sm:w-3/5 p-4 flex flex-col items-center sm:items-start justify-evenly gap-y-4">
        <h2
          className="text-4xl sm:text-7xl
        lg:text-7xl font-bold text-center sm:text-left font-[Montserrat] mt-4 tracking-wide"
        >
          Bhojan Buddy
        </h2>
        <p className="italic text-center sm:text-left w-full text-xl sm:text-3xl lg:text-3xl font-semibold">
          Your Trusted Buddy for Delicious Discoveries
        </p>
        <a
          href="https://www.github.com/kapilsinghnegi/Bhojan-Buddy"
          className="flex justify-center sm:justify-start items-center bg-black text-white py-2 px-3 rounded-lg hover:scale-105 transition-transform transform text-sm sm:text-base lg:px-5 lg:py-2 gap-2 lg:gap-4"
        >
          <i className="w-5 h-5 sm:w-6 sm:h-6 lg:h-12 lg:w-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
            </svg>
          </i>
          <span className="ml-2 text-sm sm:text-lg lg:text-xl font-bold">
            Go to GitHub
          </span>
        </a>
      </div>

      {/* Right Section */}
      <div className="container-right flex justify-center items-center w-full sm:w-2/5 mb-4 sm:mb-0">
        <img
          className="object-cover w-3/4 sm:w-full h-full sm:object-contain "
          src="../../images/burger.png"
          alt="burger"
        />
      </div>
    </div>
  );
};

export default About;
