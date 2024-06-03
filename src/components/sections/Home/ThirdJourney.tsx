import PunchArrow from '@/components/icons/PunchArrow';
import { Button } from '@/components/ui/button';

function ThirdJourney() {
  return (
    <div className="w-full mx-auto bg-[#F3F3F3] overflow-hidden -skew-x-[3deg] -rotate-2 relative right-1 md:h-[345px]">
      <div className="h-full px-6 skew-x-[3deg] rotate-2 grid md:grid-cols-2 md:pr-6">
        <div
          id="journey-one-image-texts"
          className="grid grid-cols-[51px_1fr] gap-5 py-20"
        >
          <img loading="lazy" src="/assets/journey-3.svg" className="" />

          <div className="space-y-5">
            <h1 className="max-w-[276px] text-[34px] leading-tight font-semibold">
              Start building your team
            </h1>
            <p className="max-w-[320px]">
              Assess the candidate through work history, transparent tests and
              video interviews.
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
          className="max-md:hidden flex justify-end relative -right-5 max-lg:-top-[10px] lg:-top-[22px]"
        >
          <img
            loading="eager"
            src="/assets/3rd-journey.svg"
            className="max-lg:h-[350px]"
          />
        </div>
      </div>
    </div>
  );
}

export default ThirdJourney