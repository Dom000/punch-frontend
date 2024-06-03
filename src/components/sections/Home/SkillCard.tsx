import { dummySkils } from "./types.courselist";
import { RiMedalFill } from "react-icons/ri";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { RiUserStarFill } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import PunchArrow from "@/components/icons/PunchArrow";

function SkillCard({ data, index }: { data: dummySkils; index?: number }) {
  return (
    <div className="w-full space-y-5 md:space-y-0 md:flex mb-5 ">
      <div className="w-full md:w-2/5 space-y-5">
        <p className="text-punch_black text-lg font-semibold">{data.heading}</p>
        <div className="grid grid-cols-2 gap-2">
          <span className="flex -space-x-2 items-center text-lg -ml-5">
            <RiMedalFill className="text-punch_violet" />
            <small className="text-punch_gray text-xs">{data.skilled}</small>
          </span>
          <span className="flex -space-x-2 items-center text-md -ml-5">
            <BsFillGrid1X2Fill className="text-punch_violet" />
            <small className="text-punch_gray text-xs">{data.category}</small>
          </span>

          <span className="flex -space-x-2 items-center text-lg -ml-5">
            <RiUserStarFill className="text-punch_violet" />
            <small className="text-punch_gray text-xs">{data.account}</small>
          </span>
        </div>
      </div>
      <div className="w-full md:w-4/5 flex md:justify-end">
        <div className="bg-white shadow-sm rounded-md w-full md:w-4/5 space-y-3 p-3">
          <p className="text-punch_black text-sm font-semibold">
            {data.courselist.title}
          </p>
          <div
            className={`flex  overflow-x-scroll md:overflow-hidden ${
              index == 1 && "flex-row-reverse"
            } justify-between space-x-10 md:space-x-0 `}
          >
            {data.courselist.courses.map((course, index) => (
              <div
                key={index}
                className="flex flex-col space-y-2 w-16 items-center justify-center"
              >
                <img alt="pictures" className="w-14 md:w-16" src={course.image} />
                <p className="text-punch_black text-center text-xs font-semibold">
                  {course.name}
                </p>
              </div>
            ))}

            <Button size={"icon"} className="md:w-14 md:h-14 md:mt-1 bg-punch_offwhite">
              <PunchArrow
                fill="black"
                className={index == 1 ? "rotate-90" : "-rotate-90"}
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillCard;
