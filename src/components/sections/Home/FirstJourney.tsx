import PunchArrow from "@/components/icons/PunchArrow";
import { Button } from "@/components/ui/button";

function FirstJourney() {
  return (
    <div className="w-full  bg-[#EDEFFF] overflow-hidden -skew-x-[3deg] -rotate-2 md:h-[345px]">
      <div className="h-full pl-6 pr-9 skew-x-[3deg] rotate-2 grid md:grid-cols-2">
        <div
          id="journey-one-image-texts"
          className="py-10 grid grid-cols-[51px_1fr] gap-5 md:py-14 lg:py-20"
        >
          <img loading="eager" src="/assets/journey-1.svg" className="" />

          <div className="space-y-5">
            <h1 className="max-w-[445px] text-[34px] leading-tight font-semibold">
              Find your next star performer.
            </h1>
            <p className="max-w-[320px]">
              Explore the vast Zwilt marketplace to find the candidate that
              meets your needs.
            </p>
            <div className="  flex items-center space-x-2">
              <Button
                className="p-4 hover:w-[164px] transition-all ease-linear duration-300"
                size={"icon"}
              >
                <PunchArrow className="-rotate-90" />
              </Button>
              <p className=" hover:underline cursor-pointer">Explore More</p>
            </div>{" "}
          </div>
        </div>

        <div
          id="journey-one-image-group"
          className="max-md:hidden flex justify-end relative max-lg:-top-[20px] lg:-top-[22px]"
        >
          <img
            loading="eager"
            src="/assets/1st-journey.svg"
            className="max-lg:h-[110%] relative -right-5"
          />
        </div>
      </div>
    </div>
  );
}

export default FirstJourney;
