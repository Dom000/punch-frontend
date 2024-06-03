import Text from "@/components/ui/text";

import { dummySkils } from "./types.courselist";
import SkillCard from "./SkillCard";
import { Button } from "@/components/ui/button";
import PunchArrow from "@/components/icons/PunchArrow";
import { Slide } from "react-awesome-reveal";

function SecondSection() {
  return (
    <div className="bg-[url('/assets/violet_bg.svg')] flex items-center flex-col w-full h-full  p-5 md:p-10">
      <Slide direction="up" triggerOnce>
        <Text.H1 className="text-center hidden md:flex my-14 md:my-32">
          Your one-stop marketplace for finding <br />
          the talent your business needs.
        </Text.H1>
      </Slide>

      <Slide direction="up" triggerOnce>
        <Text.H3 className="text-center flex md:hidden my-14 md:my-32">
          Your one-stop marketplace for finding <br />
          the talent your business needs.
        </Text.H3>
      </Slide>
      {skills.map((skill, index) => (
        <SkillCard key={index} data={skill} index={index} />
      ))}
      <div className="w-full  items-center flex mb-5 ">
        <div className="w-2/4  flex items-center space-x-2">
          <Button
            className="p-4 hover:w-[164px] transition-all ease-linear duration-300"
            size={"icon"}
          >
            <PunchArrow className="-rotate-90" />
          </Button>
          <p className=" hover:underline cursor-pointer">Explore More</p>
        </div>
        <div className="w-2/4 ">
          <p className="md:-ml-10 hover:underline cursor-pointer">
            <span className="font-bold text-punch_black">30 more </span>to
            explore
          </p>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;

const skills: dummySkils[] = [
  {
    heading: "Find Dev and IT professionals to scale your business.",
    account: "1011 Profiles",
    category: "45 Sub-Categories",
    skilled: "1011 Profiles",
    courselist: {
      title: "IT & Development",
      courses: [
        { name: "Shopify Developer", image: "/assets/shopify.svg" },
        { name: "Magento Developer", image: "/assets/magneto.svg" },
        {
          name: "Data Scientist",
          image: "/assets/Frame_626620.svg",
        },
        {
          name: "Webflow Developer",
          image: "/assets/Frame_626621.svg",
        },
        {
          name: "Dot Net Developer",
          image: "/assets/Frame_626622.svg",
        },
      ],
    },
  },
  {
    heading: "Explore Creative individuals with a keen eye for detail.  ",
    account: "1011 Profiles",
    category: "45 Sub-Categories",
    skilled: "1011 Profiles",
    courselist: {
      title: "Design & Creative",
      courses: [
        { name: "UX Designer", image: "/assets/Frame_626619.svg" },
        {
          name: "Graphics Designer",
          image: "/assets/Frame_626620_(2).svg",
        },
        {
          name: "Illustration Artist",
          image: "/assets/Frame_626621_(2).svg",
        },
        {
          name: "Unreal Engine",
          image: "/assets/Frame_626622_(2).svg",
        },
        {
          name: "Cinema 4D",
          image: "/assets/Frame_626618.svg",
        },
      ],
    },
  },
];
