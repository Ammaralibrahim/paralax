import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true); // İlk yükleme durumu

  const menuRef = useRef(null);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!isMobile) {
        if (window.scrollY > 2) {
          setScrolled(true); // Kaydırma olduğunda navbar'ı göster
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // İlk yükleme tamamlandığında, navbar'ı gizle
   
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile, isFirstLoad]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { href: "/", text: "Home" },
    { href: "#features", text: "Our Features" },
    { href: "#how-it-works", text: "How it Works" },
    { href: "#faqs", text: "FAQs" },
    { href: "#testimonials", text: "Testimonials" },
    { href: "#contact", text: "Contact Us" },
  ];

  return (
    <nav className={`fixed flex justify-center items-center bg-white h-[112px] sm:h-[100px] md:h-[112px] lg:h-[112px] xl:h-[90px] left-2 right-2 w-auto mx-4 my-4 rounded-lg custom-shadow z-20 transition-all 
      ${scrolled || !isFirstLoad ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto px-8 py-8 flex justify-between items-center z-50">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/brightedu.svg"
            alt="Logo"
            width={100}
            height={100}
            className="opacity-100 sm:opacity-100 md:opacity-0 lg:opacity-0 xl:opacity-0"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link legacyBehavior href={link.href} key={link.href}>
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

            {/* Language Dropdown */}
            <div className={`absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10 transition-all duration-300 ease-in-out 
              ${isDropdownOpen ? 'block' : 'hidden'}`}>
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
          className="md:hidden p-2 text-gray-600 transition-all duration-200 ease-in-out"
          onClick={toggleSidebar}
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
              d={isSidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Sidebar */}
 {/* Mobile Sidebar */}
<div
  className={`md:hidden fixed top-0 left-0 h-full w-96 bg-white shadow-lg z-50 pt-5 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
    }`}
>
  <div className="px-4 py-8">
    {/* Mobile Logo */}
    <div className="flex justify-between items-center mb-1 ml-2">
     <div>
     <Image
        src="/brightedu.svg"
        alt="Logo"
        width={120}
        height={120}
        className="opacity-100"
      />
     </div>
     <div>
      <button className="md:hidden p-2 text-gray-600" onClick={toggleSidebar}>
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        </div>
    </div>

    {/* Mobile Links */}
    {navLinks.map((link) => (
      <Link legacyBehavior href={link.href} key={link.href}>
        <a
          className="block text-gray-600 font-normal hover:text-[#5E3CB5] px-2 py-5 rounded transition-all duration-200 ease-in-out"
          onClick={toggleSidebar}
        >
          {link.text}
        </a>
      </Link>
    ))}

    {/* Mobile Language Dropdown */}
    <div className="mt-4">
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-2 text-gray-600 w-full transition-all duration-200 ease-in-out"
      >
        <Image src="/lang.svg" alt="Language Icon" width={20} height={20} />
        <span>{selectedLanguage}</span>
        <Image src="/down.svg" alt="Down Arrow Icon" width={10} height={20} />
      </button>

      <div className={`mt-2 w-full bg-white border rounded-lg shadow-lg transition-all duration-300 ease-in-out 
        ${isDropdownOpen ? 'block' : 'hidden'}`}>
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

    <button className="w-full bg-[#5E3CB5] text-white py-2 px-4 rounded-lg mt-4 transition-all duration-200 ease-in-out">
      Contact Us
    </button>
  </div>
</div>

    </nav>
  );
}

export default Navbar;
