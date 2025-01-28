"use client";
import Link from 'next/link';
import Image from 'next/image'; 
import { useState, useEffect } from 'react';

function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0.5);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "/", text: "Home" },
    { href: "/features", text: "Our Features" },
    { href: "/how-it-works", text: "How it Works" },
    { href: "/faqs", text: "FAQs" },
    { href: "/testimonials", text: "Testimonials" },
    { href: "/contact", text: "Contact" },
  ];

  return (
    <nav className={`fixed bg-white h-[112px] sm:h-[100px] md:h-[112px] lg:h-[112px] xl:h-[112px] left-2 right-2 w-auto mx-4 my-4 rounded-lg custom-shadow z-20 transition-all ${scrolled ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto px-8 py-8 flex justify-between items-center z-50">
        {/* Logo */}
        <div className="flex items-center opacity-0">
          <Image
            src="/brightedu.svg"
            alt="Logo"
            width={100}
            height={100}
            className="opacity-0 md:opacity-100"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.href} legacyBehavior>
              <a className="text-gray-600 font-normal hover:text-white font-bold hover:text-[#5E3CB5] focus:text-[#5E3CB5] px-2 py-1 rounded transition-all duration-200 ease-in-out">
                {link.text}
              </a>
            </Link>
          ))}
        </div>

        {/* Desktop Right Section */}
        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-all duration-200 ease-in-out"
            >
              <Image src="/lang.svg" alt="Language Icon" width={20} height={20} />
              <span>{selectedLanguage}</span>
              <Image src="/down.svg" alt="Down Arrow Icon" width={10} height={20} />
            </button>

            {/* Dropdown Animation */}
            <div className={`absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10 transition-all duration-300 ease-in-out transform ${isDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
              <ul>
                <li
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleLanguageChange('EN')}
                >
                  English
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleLanguageChange('TR')}
                >
                  Türkçe
                </li>
              </ul>
            </div>
          </div>

          <button className="bg-[#5E3CB5] text-white py-2 px-4 rounded-lg transition-all duration-200 ease-in-out">
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden p-2 text-gray-600 transition-all duration-200 ease-in-out"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <div className={`md:hidden bg-white absolute custom-shadow top-[102px] left-0 right-0 rounded-b-lg shadow-lg z-10 transition-all duration-300 ease-in-out transform ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
        <div className="px-6 py-4 space-y-4">
          {/* Mobile Links */}
          {navLinks.map((link) => (
            <Link href={link.href} key={link.href} legacyBehavior>
              <a 
                className="block text-gray-600 font-normal hover:text-[#5E3CB5] px-2 py-1 rounded transition-all duration-200 ease-in-out"
                onClick={toggleMobileMenu}
              >
                {link.text}
              </a>
            </Link>
          ))}

          {/* Mobile Language Dropdown */}
          <div className="relative mt-4">
            <button
              onClick={toggleDropdown}
              className="flex items-center space-x-2 text-gray-600 w-full transition-all duration-200 ease-in-out"
            >
              <Image src="/lang.svg" alt="Language Icon" width={20} height={20} />
              <span>{selectedLanguage}</span>
              <Image src="/down.svg" alt="Down Arrow Icon" width={10} height={20} />
            </button>

            {/* Dropdown Animation */}
            <div className={`mt-2 w-full bg-white border rounded-lg shadow-lg transition-all duration-300 ease-in-out transform ${isDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
              <ul>
                <li
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleLanguageChange('EN')}
                >
                  English
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleLanguageChange('TR')}
                >
                  Türkçe
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile Contact Button */}
          <button className="w-full bg-[#5E3CB5] text-white py-2 px-4 rounded-lg mt-4 transition-all duration-200 ease-in-out">
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
