import AccordionCard from "./Accordion";
import Text from "@/components/ui/text";

function FourtSection() {
  return (
    <div className="md:px-10 px-5 pt-20">
      <Text.H1 className="max-sm:text-center hidden md:block max-w-[570px] text-pretty   ">
        How we ensure you’re in good hands.
      </Text.H1>
      <Text.H2 className="max-sm:text-center  md:hidden max-w-[570px] text-pretty   ">
        How we ensure you’re in good hands.
      </Text.H2>

      <div className="grid gap-14  sm:grid-cols-2 lg:gap-14">
        <div className="mt-7 ">
          <p className="max-w-[600px] my-7 text-lg text-center text-punch_black sm:text-start lg:text-lg">
            With our comprehensive screening process, we hand-pick highly
            skilled candidates so you can onboard them in a matter of days.
          </p>

          <AccordionCard />
        </div>

        <div
          id="image"
          className="max-w-[541px] w-full ml-auto flex flex-col"
        ></div>
      </div>
    </div>
  );
}

export default FourtSection;
