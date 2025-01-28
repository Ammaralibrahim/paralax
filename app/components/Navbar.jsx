"use client";
import Link from 'next/link';
import Image from 'next/image'; 
import { useState, useEffect } from 'react';

function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false); // Dropdown kontrolü için state
  const [selectedLanguage, setSelectedLanguage] = useState('EN'); // Seçilen dili tutacak state
  const [scrolled, setScrolled] = useState(false); // Scroll kontrolü için state

  // Dropdown açma/kapama fonksiyonu
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  // Dil değişim fonksiyonu
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language); // Seçilen dili güncelle
    setDropdownOpen(false); // Dropdown menüsünü kapat
  };

  // Scroll kontrolü
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0.5) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
<nav
  className={`fixed bg-white h-[112px] left-2 right-2 w-auto mx-4 my-4 rounded-lg custom-shadow z-20 transition-all ${scrolled ? 'opacity-100' : 'opacity-0'}`}
>
      <div className="container mx-auto px-8 py-8 flex justify-between items-center">
        <div className="flex items-center">
          <Image
          className="opacity-0"
            src="/brightedu.svg"
            alt="Logo"
            width={100}
            height={100}
          />
        </div>

        {/* Navbar Linkleri */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" legacyBehavior>
            <a className="text-gray-600 font-normal hover:text-white font-bold hover:text-[#5E3CB5] focus:text-[#5E3CB5] px-2 py-1 rounded">Home</a>
          </Link>
          <Link href="/features" legacyBehavior>
            <a className="text-gray-600 font-normal hover:text-white font-bold hover:text-[#5E3CB5] focus:text-[#5E3CB5] px-2 py-1 rounded">Our Features</a>
          </Link>
          <Link href="/how-it-works" legacyBehavior>
            <a className="text-gray-600 font-normal hover:text-white font-bold hover:text-[#5E3CB5] focus:text-[#5E3CB5] px-2 py-1 rounded">How it Works</a>
          </Link>
          <Link href="/faqs" legacyBehavior>
            <a className="text-gray-600 font-normal hover:text-white font-bold hover:text-[#5E3CB5] focus:text-[#5E3CB5] px-2 py-1 rounded">FAQs</a>
          </Link>
          <Link href="/testimonials" legacyBehavior>
            <a className="text-gray-600 font-normal hover:text-white font-bold hover:text-[#5E3CB5] focus:text-[#5E3CB5] px-2 py-1 rounded">Testimonials</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="text-gray-600 font-normal hover:text-white font-bold hover:text-[#5E3CB5] focus:text-[#5E3CB5] px-2 py-1 rounded">Contact</a>
          </Link>
        </div>

        {/* Language Dropdown */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center space-x-2 text-gray-600 hover:text-blue-500"
          >
            {/* Language Icon */}
            <Image
              src="/lang.svg" // Dil simgesi
              alt="Language Icon"
              width={20}
              height={20}
            />
            <span>{selectedLanguage}</span>
            <Image
              src="/down.svg" // Ok simgesi
              alt="Down Arrow Icon"
              width={10}
              height={20}
            />
          </button>

          {/* Dropdown Menü */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
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
          )}
        </div>

        {/* Contact Us Butonu */}
        <button className="bg-[#5E3CB5] text-white py-2 px-4 rounded-lg">
          Contact Us
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
