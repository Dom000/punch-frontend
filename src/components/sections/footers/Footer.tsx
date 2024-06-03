import PunchArrow from "@/components/icons/PunchArrow";
import { Button } from "@/components/ui/button";
import Text from "@/components/ui/text";
import { Fade } from "react-awesome-reveal";
import SubFooter from "./SubFooter";
import FooterQuickLinks from "./FooterQuickLinks";

const Footer = () => {
  return (
    <footer className="w-full relative ">
      <div className="bg-[url('/assets/footer_small_vector.svg')] absolute z-10 -top-16  w-full h-16 bg-no-repeat"></div>
      <div className="w-full bg-gradient-to-b from-punch_gradient_black  to-punch_gradient_black h-[200px] md:h-[350px] lg:h-[500px] px-5 md:px-10">
        <div className="w-full bg-[url('/assets/footer_violet.svg')] h-full bg-contain bg-no-repeat flex justify-center items-center space-y-3 md:space-y-7 flex-col">
          <div className="md:w-3/4 -mt-6 md:-mt-10 lg:-mt-24">
            <Fade
              triggerOnce
              damping={0.1}
              className="!w-full flex items-center justify-center"
            >
              <Text.H1 className="!text-white hidden md:flex text-center">
                Need a job done, and done well? <br /> Get started
              </Text.H1>
              <Text.H5 className="!text-white md:hidden  text-center">
                Need a job done, and done well? <br /> Get started
              </Text.H5>
            </Fade>
          </div>
          <Button size={"icon"} className="p-4 shadow-md">
            <PunchArrow />
          </Button>
        </div>
      </div>
      <FooterQuickLinks />
      <SubFooter />
    </footer>
  );
};

export default Footer;
