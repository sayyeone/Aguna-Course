"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiShoppingBag, FiSearch, FiX } from "react-icons/fi";
import CartPopup from "../ui/cart-popup";
import { useCartStore } from "@/app/hooks/use-cart-store";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);
  const { items } = useCartStore();

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-5 px-4 lg:px-0">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo.svg"
            alt="logo sporton"
            width={127}
            height={30}
          />
        </Link>

        {/* Desktop Nav - Centered */}
        <nav className="hidden lg:flex gap-16 font-semibold text-dark">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Link href="#category-section" className="hover:text-primary transition-colors">Category</Link>
          <Link href="#products-section" className="hover:text-primary transition-colors">Explore Products</Link>
          <Link href="/admin/login" className="hover:text-primary transition-colors text-gray-500">Admin</Link>
        </nav>

        {/* Desktop Icons */}
        <div className="hidden lg:flex gap-10 items-center">
          <button className="text-dark hover:text-primary transition-colors cursor-pointer">
            <FiSearch size={24} />
          </button>
          
          <div className="relative">
            <button
              className="relative cursor-pointer hover:text-primary transition-colors"
              onClick={() => setIsCartPopupOpen(!isCartPopupOpen)}
            >
              <FiShoppingBag size={24} />
              {items.length > 0 && (
                <div className="bg-primary rounded-full w-4 h-4 absolute -top-1 -right-1 text-[10px] text-white flex items-center justify-center font-bold">
                  {items.length}
                </div>
              )}
            </button>
            {isCartPopupOpen && <CartPopup close={() => setIsCartPopupOpen(false)} />}
          </div>
        </div>

        {/* Mobile Hamburger & Icons */}
        <div className="flex lg:hidden gap-5 items-center">
          <button className="text-dark hover:text-primary transition-colors">
            <FiSearch size={22} />
          </button>
          
          <div className="relative">
            <button
              className="relative cursor-pointer"
              onClick={() => setIsCartPopupOpen(!isCartPopupOpen)}
            >
              <FiShoppingBag size={22} />
              {items.length > 0 && (
                <div className="bg-primary rounded-full w-3.5 h-3.5 absolute -top-1 -right-1 text-[10px] text-white flex items-center justify-center font-bold">
                  {items.length}
                </div>
              )}
            </button>
          </div>
          
          <button
            className="p-1 text-dark"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg z-50 flex flex-col gap-5 px-6 py-8 lg:hidden border-t border-gray-100">
            <Link href="/" className="font-semibold hover:text-primary transition-colors text-lg" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="#category-section" className="font-semibold hover:text-primary transition-colors text-lg" onClick={() => setMenuOpen(false)}>Category</Link>
            <Link href="#products-section" className="font-semibold hover:text-primary transition-colors text-lg" onClick={() => setMenuOpen(false)}>Explore Products</Link>
            <Link href="/admin/login" className="font-semibold hover:text-primary transition-colors text-lg text-gray-500" onClick={() => setMenuOpen(false)}>Admin</Link>
          </div>
        )}
      </div>
      {isCartPopupOpen && (
        <div className="lg:hidden absolute top-full right-4 z-50">
          <CartPopup close={() => setIsCartPopupOpen(false)} />
        </div>
      )}
    </header>
  );
};

export default Header;