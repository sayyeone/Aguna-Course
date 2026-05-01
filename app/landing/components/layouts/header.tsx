"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "../ui/button";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="container mx-auto flex justify-between items-center py-6 px-4 lg:px-0 relative">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/images/logo.svg"
          alt="logo sporton"
          width={140}
          height={33}
        />
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex gap-10">
        <Link href="#" className="font-medium hover:text-primary transition-colors">Home</Link>
        <Link href="#category-section" className="font-medium hover:text-primary transition-colors">Categories</Link>
        <Link href="#products-section" className="font-medium hover:text-primary transition-colors">Products</Link>
        <Link href="#" className="font-medium hover:text-primary transition-colors">About Us</Link>
      </nav>

      {/* Desktop Auth */}
      <div className="hidden lg:flex gap-4 items-center">
        <Link href="#" className="font-medium hover:text-primary transition-colors">Login</Link>
        <Button size="small">Sign Up</Button>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="lg:hidden p-2 text-dark"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg z-50 flex flex-col gap-4 px-6 py-6 lg:hidden">
          <Link href="#" className="font-medium hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="#category-section" className="font-medium hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>Categories</Link>
          <Link href="#products-section" className="font-medium hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>Products</Link>
          <Link href="#" className="font-medium hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>About Us</Link>
          <div className="flex gap-3 pt-2 border-t border-gray-100">
            <Link href="#" className="font-medium hover:text-primary transition-colors">Login</Link>
            <Button size="small">Sign Up</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;