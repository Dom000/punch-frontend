import { Button } from "@/components/ui/button";
import { Slide } from "react-awesome-reveal";
import Nav from "./Nav";
const Header = () => {
  return (
    <Slide triggerOnce direction="down" damping={0.1}>
      <header className="w-full p-2 pt-4 md:p-8 flex items-center justify-center">
        <div className="flex justify-center cursor-pointer shadow-lg  p-3 w-full bg-punch_violet rounded-lg shadow-gray-200 hover:shadow-lg">
          <div className="w-1/3 pl-3 flex items-center">
            <img className="md:w-24" src="/assets/logo.svg" />
          </div>
          <div className="w-2/3 flex items-center justify-center ">
            <Nav />
          </div>
          <div className="w-1/3 flex justify-end space-x-4 items-center">
            <nav className="hidden md:flex text-white text-sm hover:text-white/60">Log In</nav>
            <Button
              size={"sm"}
              className="rouded-lg bg-white text-puunch_black"
            >
              Join Now
            </Button>
          </div>
        </div>
      </header>
    </Slide>
  );
};

export default Header;
