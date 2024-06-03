import PunchArrow from "@/components/icons/PunchArrow";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Text from "@/components/ui/text";
import { CourseTabs } from "./CoursesTab";
import { Fade } from "react-awesome-reveal";

function FirstSection() {
  return (
    <div className="w-full  flex flex-col items-center justify-center">
      <div className="md:p-10 p-5 md:pt-16 flex flex-col justify-center items-center">
        <Fade triggerOnce>
          <div className="hidden md:flex ">
            <Text.H1 className="text-center">
              Finding the right fit{" "}
              <span className="inline-block">
                <img src="/assets/text-image.svg" />
              </span>
              has <br />
              never been easier.
            </Text.H1>
          </div>
        </Fade>

        <Fade triggerOnce>
          {" "}
          <div className="md:hidden ">
            <Text.H2 className="text-center">
              Finding the right fit{" "}
              <span className="inline-block">
                <img src="/assets/text-image.svg" className="w-10" />
              </span>
              has <br />
              never been easier.
            </Text.H2>
          </div>
        </Fade>
      </div>
      <Fade
        triggerOnce
        className="md:w-2/5 w-full space-y-5 p-5 flex flex-col justify-center items-center"
      >
        <p className="text-center text-lg text-text_color">
          With our rigorous pre-vetting process, you'll never have to worry
          about finding the ideal candidate ever again.
        </p>
        <div className="flex w-full max-w-md items-center -space-x-10">
          <Input
            className="focus-visible:ring-punch_yellow caret-punch_yellow duration-300 ease-in-out transition caret"
            type="search"
            placeholder="Looking for?"
          />
          <Button
            className="bg-punch_yellow hover:bg-punch_yellow/70 duration-300 ease-in-out transition-colors rounded-md"
            size={"icon"}
          >
            <PunchArrow className="-rotate-90 p-1" fill="black" />
          </Button>
        </div>
      </Fade>
      <CourseTabs />
      <div className="bg-[url('/assets/Union.svg')] w-full h-32 bg-no-repeat"></div>
    </div>
  );
}

export default FirstSection;
