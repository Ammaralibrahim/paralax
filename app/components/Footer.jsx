import React from 'react';

const Footer = () => {
  return (
    <section className="h-[750px] bg-gradient-to-r from-[#247be8] via-[#394578] to-[#885cc6] flex flex-col justify-between items-center text-white">
      <div className="text-center mt-20">
        <h1 className="text-8xl font-bold">
          Join Schools Transforming <br /> Education Today
        </h1>
        <button className="relative bg-gradient-to-r from-[#0099FF] to-[#CC00FF] text-white px-20 py-2 rounded-2xl text-2xl shadow-xl transition-all duration-300 transform hover:scale-105 group mt-24">
          {/* Sol yıldızlar */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 flex space-x-1">
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.5909 3.1421C20.2365 2.69314 16.3396 5.37089 14.3934 5.6771C12.0447 6.06748 9.64153 5.61315 7.61423 4.39549C6.02995 3.47039 3.58413 0.0344596 3.14213 0.306406C2.74474 0.639123 5.2292 4.04722 5.60489 5.84294C6.11802 8.15152 5.78776 10.575 4.67336 12.679C3.76648 14.4281 -0.00810462 17.2766 0.306034 17.7546C0.660301 18.2045 4.55761 15.5264 6.50388 15.2202C8.85259 14.8295 11.2559 15.2838 13.2831 16.5017C14.8674 17.4268 17.3132 20.8628 17.7546 20.5913C18.1525 20.2582 15.6681 16.85 15.2924 15.0543C14.7795 12.7457 15.1097 10.3224 16.2239 8.21821C17.1308 6.46913 20.9049 3.62101 20.5909 3.1421Z"
                fill="white"
                stroke="#CDCDCD"
                strokeWidth="0.48"
                strokeMiterlimit="2.613"
              />
            </svg>

            <svg width="21" className="mt-4" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.5909 3.1421C20.2365 2.69314 16.3396 5.37089 14.3934 5.6771C12.0447 6.06748 9.64153 5.61315 7.61423 4.39549C6.02995 3.47039 3.58413 0.0344596 3.14213 0.306406C2.74474 0.639123 5.2292 4.04722 5.60489 5.84294C6.11802 8.15152 5.78776 10.575 4.67336 12.679C3.76648 14.4281 -0.00810462 17.2766 0.306034 17.7546C0.660301 18.2045 4.55761 15.5264 6.50388 15.2202C8.85259 14.8295 11.2559 15.2838 13.2831 16.5017C14.8674 17.4268 17.3132 20.8628 17.7546 20.5913C18.1525 20.2582 15.6681 16.85 15.2924 15.0543C14.7795 12.7457 15.1097 10.3224 16.2239 8.21821C17.1308 6.46913 20.9049 3.62101 20.5909 3.1421Z"
                fill="white"
                stroke="#CDCDCD"
                strokeWidth="0.48"
                strokeMiterlimit="2.613"
              />
            </svg>
          </div>

          {/* Sağ yıldızlar */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex space-x-1">
            <svg className="mt-4" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.5909 3.1421C20.2365 2.69314 16.3396 5.37089 14.3934 5.6771C12.0447 6.06748 9.64153 5.61315 7.61423 4.39549C6.02995 3.47039 3.58413 0.0344596 3.14213 0.306406C2.74474 0.639123 5.2292 4.04722 5.60489 5.84294C6.11802 8.15152 5.78776 10.575 4.67336 12.679C3.76648 14.4281 -0.00810462 17.2766 0.306034 17.7546C0.660301 18.2045 4.55761 15.5264 6.50388 15.2202C8.85259 14.8295 11.2559 15.2838 13.2831 16.5017C14.8674 17.4268 17.3132 20.8628 17.7546 20.5913C18.1525 20.2582 15.6681 16.85 15.2924 15.0543C14.7795 12.7457 15.1097 10.3224 16.2239 8.21821C17.1308 6.46913 20.9049 3.62101 20.5909 3.1421Z"
                fill="white"
                stroke="#CDCDCD"
                strokeWidth="0.48"
                strokeMiterlimit="2.613"
              />
            </svg>

            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.5909 3.1421C20.2365 2.69314 16.3396 5.37089 14.3934 5.6771C12.0447 6.06748 9.64153 5.61315 7.61423 4.39549C6.02995 3.47039 3.58413 0.0344596 3.14213 0.306406C2.74474 0.639123 5.2292 4.04722 5.60489 5.84294C6.11802 8.15152 5.78776 10.575 4.67336 12.679C3.76648 14.4281 -0.00810462 17.2766 0.306034 17.7546C0.660301 18.2045 4.55761 15.5264 6.50388 15.2202C8.85259 14.8295 11.2559 15.2838 13.2831 16.5017C14.8674 17.4268 17.3132 20.8628 17.7546 20.5913C18.1525 20.2582 15.6681 16.85 15.2924 15.0543C14.7795 12.7457 15.1097 10.3224 16.2239 8.21821C17.1308 6.46913 20.9049 3.62101 20.5909 3.1421Z"
                fill="white"
                stroke="#CDCDCD"
                strokeWidth="0.48"
                strokeMiterlimit="2.613"
              />
            </svg>
          </div>

          Request a Demo Now
        </button>
      </div>
      <footer className="text-center w-full py-6 ">
        <nav className="mb-4 ">
          <ul className="flex justify-center space-x-6 text-sm text-gray-300">
            {['Home', 'Feature', 'How it works', 'Testimonials', 'Join us', 'FAQs'].map((item) => (
              <li key={item}>
                <a className="hover:underline" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mb-4">
          <img alt="BrightEdu logo" className="mx-auto" src="/lightlogo.svg" />
        </div>
        <p className="text-sm">© {new Date().getFullYear()} BrightEdu</p>
      </footer>
    </section>
  );
};

export default Footer;
