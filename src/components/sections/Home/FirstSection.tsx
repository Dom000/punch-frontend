import PunchArrow from "@/components/icons/PunchArrow";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Text from "@/components/ui/text";
import { CourseTabs } from "./CoursesTab";

function FirstSection() {
  return (
    <div className="w-full  flex flex-col items-center justify-center">
      <div className="md:p-10 p-5 pt-16 flex flex-col justify-center items-center">
        <div className="md:flex hidden ">
          <Text.H1 className="text-center">Finding the right fit</Text.H1>
          <img src="/assets/text-image.svg" />
          <Text.H1 className="text-center">has</Text.H1>
        </div>
        <Text.H1 className="text-center md:flex hidden ">
          never been easier.
        </Text.H1>
        <div className="md:hidden flex items-center justify-center ">
          <Text.H2 className="text-center relative ">
            Finding the right fit has never been easier.
          </Text.H2>
        </div>
      </div>
      <div className="md:w-2/5 space-y-5 p-5">
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
      </div>
      <CourseTabs/>
    </div>
  );
}

export default FirstSection;
