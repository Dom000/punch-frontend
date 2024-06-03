import { Button } from "@/components/ui/button";
import { Slide } from "react-awesome-reveal";
import Nav from "./Nav";
import { useState } from "react";
import { links } from "./navLinks";
const Header = () => {
  const [open, setopen] = useState<Boolean>(false);

  return (
    <Slide
      triggerOnce
      className="fixed z-40 w-full"
      direction="down"
      damping={0.1}
    >
      <header className="w-full  p-2 pt-4 md:p-8 flex flex-col items-center justify-center">
        <div
          className={` cursor-pointer flex flex-col shadow-lg  p-3 w-full bg-punch_violet rounded shadow-gray-950/20 hover:shadow-lg  transition ease-linear duration-300`}
        >
          <div className="flexjustify-center flex w-full">
            
            
            <div className="w-1/3 pl-3 flex items-center">
              <img className="md:w-24" src="/assets/logo.svg" />
            </div>
            <div className="w-2/3 flex items-center justify-center ">
              <Nav open={open} setopen={setopen} />
            </div>
            <div className="w-1/3 flex justify-end space-x-4 items-center">
              <nav className="hidden md:flex text-white text-sm hover:text-white/60">
                Log In
              </nav>
              <Button
                size={"sm"}
                className="rouded-lg bg-white text-puunch_black"
              >
                Join Now
              </Button>
            </div>
          </div>
          
          <div
            className={`  ${
              open ? "h-[300px]  pt-10 " : "h-0"
            }   w-full transition-all flex flex-col items-center lg:hidden space-y-3 ease-linear duration-300 `}
          >
            
            
            {links.map((link, index) => (
              <nav
                className={`${
                  !open && "hidden"
                } text-white text-lg -ml-5 text-right hover:text-white/60`}
                key={index}
              >
                {link.name}
              </nav>
            ))}
          </div>
        </div>
      </header>
    </Slide>
  );
};

export default Header;
