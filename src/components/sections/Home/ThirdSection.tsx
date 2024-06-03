import PunchArrow from "@/components/icons/PunchArrow";
import { Button } from "@/components/ui/button";
import Text from "@/components/ui/text";

function ThirdSection() {
  return (
    <div className="w-full  -mt-16 relative">
      <div className="bg-[url('/assets/footer_small_vector.svg')] w-full h-16 bg-no-repeat"></div>
      <div className="md:px-10 pt-20 px-5 bg-gradient-to-b md:flex from-punch_gradient_black  to-punch_black h-full">
        <img
          alt="quot"
          src="/assets/quot.svg"
          className="absolute z-10 w-16 md:w-auto top-12 md:top-3.5 right-2 -rotate-3"
        />

        <div className="w-full md:w-2/4">
          <div className="w-3/4 hidden md:block  ">
            <Text.H1 className="max-w-md  text-[54px] leading-tight font-bold text-white lg:max-w-sm">
              How it worked for Jason
              <span className="inline-block">
                <img src="/assets/text-image.svg" className="w-16" />
              </span>
              at
            </Text.H1>
            <img src="/assets/groovehq.svg" className="mt-4 hidden md:flex" />
          </div>
          <div className="w-full md:hidden  ">
            <Text.H2 className="max-w-md  leading-tight  text-white lg:max-w-sm">
              How it worked for Jason
              <span className="inline-block">
                <img src="/assets/text-image.svg" className="w-16" />
              </span>
              at
            </Text.H2>
            <img src="/assets/groovehq.svg" className="mt-4 hidden md:flex" />
          </div>

          <div className="mt-2">
            <p className="text-lg text-white/70">
              Zwilt enabled us to deliver on time and they’ve <br /> been heavy
              hitters in our corner since.
            </p>
          </div>
          <div className="flex space-x-4 mt-5 items-center">
            <Button
              className="bg-punch_offwhite hover:bg-punch_offwhite/70"
              size={"icon"}
            >
              <PunchArrow fill="#50589F" className="rotate-90" />
            </Button>
            <Button
              className="bg-punch_offwhite hover:bg-punch_offwhite/70"
              size={"icon"}
            >
              <PunchArrow fill="#50589F" className="-rotate-90" />
            </Button>
          </div>
        </div>
        <div className="w-full md:w-2/4 pt-24">
          <div className="flex items-center space-x-3">
            <img src="/assets/Frame_626655.svg" className="mt-4 w-16" />
            <div className="space-y-1 mt-2">
              <Text.H4 className="text-white">Jason Makki</Text.H4>
              <p className="text-xs text-punch_offwhite/50">
                Engineer at GROOVE
              </p>
              <p className="text-xs text-punch_offwhite/50">San Francisco</p>
            </div>
          </div>
          <div className="mt-2">
            <p className="text-lg text-white/70">
              Zwilt enabled us to deliver on time and they’ve been heavy hitters
              in our corner since. Zwilt enabled us to deliver on time and
              they’ve been heavy hitters in our corner since.Zwilt enabled us to
              deliver on time and they’ve been heavy hitters.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[url('/assets/Vector_343.svg')] w-full h-16 bg-no-repeat"></div>
    </div>
  );
}

export default ThirdSection;
