import Button from "../ui/button";
import { FiFastForward } from "react-icons/fi";
import Image from "next/image";

const CtaSection = () => {
  return (
    <section className="container mx-auto my-20 lg:my-32 px-4 lg:px-0">
      <div className="relative bg-dark rounded-2xl overflow-hidden flex flex-col lg:flex-row items-center justify-between px-8 sm:px-12 lg:px-20 py-14 lg:py-0 lg:min-h-[320px] gap-8">
        
        {/* Background Ornament */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-10 -left-10 w-60 h-60 rounded-full bg-primary blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-60 h-60 rounded-full bg-primary blur-3xl" />
        </div>

        {/* Basketball Image - decorative */}
        <Image
          src="/images/img-basketball-transparent.png"
          alt=""
          width={260}
          height={260}
          className="absolute -left-8 -bottom-8 opacity-10 hidden lg:block pointer-events-none"
          aria-hidden="true"
        />

        {/* Text */}
        <div className="relative z-10 text-center lg:text-left">
          <p className="text-primary font-semibold italic mb-2 text-sm tracking-widest uppercase">
            Limited Time Offer
          </p>
          <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white italic leading-tight">
            GET <span className="text-primary">50% OFF</span> <br />
            YOUR FIRST ORDER
          </h2>
          <p className="text-gray-400 mt-4 max-w-md text-sm sm:text-base leading-relaxed">
            Sign up today and unlock exclusive deals on premium sportswear.
            Don&apos;t miss out — offer ends soon!
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="relative z-10 flex flex-col sm:flex-row gap-4 shrink-0">
          <Button>
            Shop Now <FiFastForward />
          </Button>
          <Button variant="ghost" className="!text-white hover:!bg-white/10 border border-white/20">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
