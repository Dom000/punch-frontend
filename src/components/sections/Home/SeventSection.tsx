import Text from "@/components/ui/text";
import Faq from "./Faq";

function SeventSection() {
  return (
    <div className="py-20 relative bg-[#F3F3F3] sm:py-36 ">
      <Text.H1 className=" text-pretty text-center hidden  md:block">
        Frequently asked questions
      </Text.H1>
      <Text.H2 className=" text-pretty text-center  md:hidden">
        Frequently asked questions
      </Text.H2>

      <div className="my-16 pl-0.5">
        <Faq />
      </div>
    </div>
  );
}

export default SeventSection;
