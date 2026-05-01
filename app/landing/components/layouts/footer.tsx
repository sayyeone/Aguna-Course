import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-dark-alternate text-white mt-32 lg:mt-52">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-10 pt-14 pb-12 lg:pb-24 px-4 lg:px-0">
        <div className="w-full lg:w-105">
          <Image
            src="/images/logo-footer.svg"
            alt="logo sporton footer"
            width={187}
            height={44}
          />
          <p className="mt-8 text-gray-300 leading-relaxed">
            Engineered for endurance and designed for speed. Experience gear
            that moves as fast as you do.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 lg:w-105">
          <div className="flex gap-6 flex-col">
            <Link href="#" className="hover:text-primary transition-colors">Home</Link>
            <Link href="#" className="hover:text-primary transition-colors">Categories</Link>
            <Link href="#" className="hover:text-primary transition-colors">Products</Link>
            <Link href="#" className="hover:text-primary transition-colors">About Us</Link>
          </div>
          <div className="flex gap-6 flex-col">
            <Link href="#" className="hover:text-primary transition-colors">Instagram</Link>
            <Link href="#" className="hover:text-primary transition-colors">Facebook</Link>
            <Link href="#" className="hover:text-primary transition-colors">TikTok</Link>
            <Link href="#" className="hover:text-primary transition-colors">YouTube</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-t-white/15">
        <div className="container mx-auto py-6 flex flex-col sm:flex-row justify-between gap-3 px-4 lg:px-0 text-sm text-gray-400">
          <div>SportsOn © 2025 All Rights Reserved.</div>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;