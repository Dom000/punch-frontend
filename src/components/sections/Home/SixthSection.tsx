import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

import { HiOutlineMinusSm } from "react-icons/hi";
import PunchArrow from "@/components/icons/PunchArrow";
import { Button } from "@/components/ui/button";
import Text from "@/components/ui/text";

const ReasonCard = ({
  idx,
  item,
}: {
  item: {
    title: string;
    list: string[];
    image: string;
  };
  idx: number;
}) => {
  return (
    <div className=" bg-white md:py-8 h-full py-4 rounded-[20px] px-10 flex shadow-lg md:flex-row flex-col ">
      <div className="mt-16 md:w-1/2">
        <h1 className="md:text-[44px] md:max-w-full md:leading-[54px] text-center md:!text-left text-4xl leading-[50px] text-zwilt-title-200 font-bold">
          {item.title}
        </h1>
        <div className="my-6">
          {item.list.map((list, i) => (
            <li key={i} className="flex  items-center">
              <HiOutlineMinusSm
                className={`text-3xl ${
                  idx === 0
                    ? "text-zwilt-purple-400"
                    : idx === 1
                    ? "text-zwilt-yellow-500"
                    : "text-zwilt-green-100"
                }  `}
              />
              <p className="text-zwilt-text-200/80 text-sm leading-[20px]">
                {list}
              </p>
            </li>
          ))}
        </div>
        <div className=" mb-5 flex items-center space-x-2">
          <Button
            className="p-4 hover:w-[164px] transition-all ease-linear duration-300"
            size={"icon"}
          >
            <PunchArrow className="-rotate-90" />
          </Button>
          <p className=" hover:underline cursor-pointer">Explore More</p>
        </div>
      </div>
      <div className="md:w-1/2">
        <img
          src={item.image}
          className=" h-[157.45] object-contain"
          alt="cardiMf"
        />
      </div>
    </div>
  );
};

const SixthSection = () => {
  return (
    <section className=" pt-20 pb-28 bg-gradient-to-b from-zwilt-gray-150 via-zwilt-purple-300 to-zwilt-purple-150">
      <div className="  flex md:flex-row flex-col mx-4 items-center  md:mx-10 ">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <Text.H1 className="md:max-w-[380px] md:leading-[64px] text-center md:!text-left text-4xl leading-[50px]">
            Why choose zwilt
          </Text.H1>
          <p className="md:text-[22px] md:max-w-[326px] text-lg mt-2 text-center md:!text-left leading-[32px] text-zwilt-text-200/80 ">
            We take complex hiring processes - and simplify them. Connecting you
            to the world's highly qualified talent pool.
          </p>
        </div>

        <div className="md:w-2/3 w-full shadow-lg rounded-[20px]">
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={2000}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            infinite
            autoPlay
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 1,
                partialVisibilityGutter: 40,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
            }}
            shouldResetAutoplay
            sliderClass=""
            slidesToSlide={2}
            swipeable
          >
            {Content.map((card, idx) => (
              <ReasonCard key={idx} idx={idx} item={card} />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default SixthSection;

export const Content = [
  {
    title: "Onboard without the risk.",
    list: [
      "We pick the best for you to select.",
      "Thousands of vetted candidates in dozens of categories.",
      "Risk-free resource swapping for the best fit.",
    ],
    image: "/assets/card2.svg",
  },
  {
    title: "An open book.",
    list: [
      "Easy and transparent one-to-one chat with candidates.",
      "Simple and convenient payment methods.",
      "Review past ratings.",
    ],
    image: "/assets/card1.svg",
  },
  {
    title: "Stay in the loop.",
    list: [
      "Track your staff activity down to every minute with screenshots.",
      "Comprehensive timesheet data to process payments.",
      "Create projects to organize and assign tasks more effectively.",
    ],
    image: "/assets/card3.svg",
  },
];
