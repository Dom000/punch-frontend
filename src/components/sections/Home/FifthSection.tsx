import Text from "@/components/ui/text";
import FirstJourney from "./FirstJourney";
import SecondJourney from "./SecondJourney";
import ThirdJourney from "./ThirdJourney";
import { Fade } from "react-awesome-reveal";

function FifthSection() {
  return (
    <div className="md:px-10 px-5 mt-40">
      <Fade triggerOnce>
        {" "}
        <Text.H1 className="my-10 text-center hidden md:block">
          Start your journey today.
        </Text.H1>
        <Text.H2 className="my-10 text-center  md:hidden">
          Start your journey today.
        </Text.H2>
        <div className="mt-16 flex flex-col ">
          <div className="space-y-8">
            <FirstJourney />
            <SecondJourney />
            <ThirdJourney />
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default FifthSection;
