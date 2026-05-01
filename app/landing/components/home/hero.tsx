
import { FiFastForward } from "react-icons/fi";
import Button from "../ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="hero-section" className="relative">

      {/* === DESKTOP LAYOUT (lg ke atas) === */}
      <div className="hidden lg:block h-screen relative overflow-hidden">
        <div className="container mx-auto h-full flex items-center relative">
          {/* Basketball decorative */}
          <Image
            src="/images/img-basketball-transparent.png"
            width={432}
            height={423}
            alt="image sporton"
            className="grayscale absolute left-0 -top-20"
          />
          {/* Text Content */}
          <div className="relative ml-40 w-full z-10">
            <div className="text-primary italic">Friday Sale, 50%</div>
            <h1 className="font-extrabold text-[95px] italic bg-gradient-to-b leading-tight from-black to-[#979797] bg-clip-text text-transparent">
              WEAR YOUR <br /> TOP-QUALITY <br /> SPORTSWEAR
            </h1>
            <p className="w-1/2 mt-10 leading-loose">
              Engineered for endurance and designed for speed. Experience gear
              that moves as fast as you do. Premium fabrics. Unmatched comfort.
              Limitless motion.
            </p>
            <div className="flex gap-5 mt-14">
              <Button>
                Explore More <FiFastForward />
              </Button>
              <Button variant="ghost">
                Watch Video{" "}
                <Image
                  src="/images/icon-play-video.svg"
                  alt="icon playvideo"
                  width={29}
                  height={29}
                />
              </Button>
            </div>
          </div>
        </div>
        {/* Hero Image - positioned relative to full-width div so it bleeds to the right */}
        <Image
          src="/images/img-hero.png"
          width={700}
          height={950}
          alt="image sporton hero"
          className="absolute right-0 top-1/2 -translate-y-1/2"
        />
        {/* Ornament - bleeds off the right edge */}
        <Image
          src="/images/img-ornament-hero.svg"
          width={420}
          height={420}
          alt="image sporton ornament"
          className="absolute -right-[200px] top-1/2 -translate-y-1/2"
        />
      </div>

      {/* === MOBILE LAYOUT (dibawah lg) === */}
      <div className="flex lg:hidden flex-col items-center text-center px-4 py-16 gap-8">
        <div>
          <div className="text-primary italic font-medium mb-2">Friday Sale, 50%</div>
          <h1 className="font-extrabold text-[52px] sm:text-[68px] italic bg-gradient-to-b leading-tight from-black to-[#979797] bg-clip-text text-transparent">
            WEAR YOUR <br /> TOP-QUALITY <br /> SPORTSWEAR
          </h1>
          <p className="mt-6 leading-loose text-gray-600 max-w-sm mx-auto">
            Engineered for endurance and designed for speed. Experience gear
            that moves as fast as you do. Premium fabrics. Unmatched comfort.
            Limitless motion.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button>
              Explore More <FiFastForward />
            </Button>
            <Button variant="ghost">
              Watch Video{" "}
              <Image
                src="/images/icon-play-video.svg"
                alt="icon playvideo"
                width={29}
                height={29}
              />
            </Button>
          </div>
        </div>
        <Image
          src="/images/img-hero.png"
          width={400}
          height={540}
          alt="image sporton hero"
          className="w-64 sm:w-80 object-contain"
        />
      </div>

    </section>
  );
};

export default HeroSection;
