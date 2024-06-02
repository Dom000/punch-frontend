import { Button } from "@/components/ui/button";
import Text from "@/components/ui/text";
import { quickLinks } from "./quicklinks";

function FooterQuickLinks() {
  return (
    <div className="md:flex pt-10 bg-gradient-to-b from-punch_gradient_black  to-punch_gradient_gray md:px-10 px-5 w-full">
      <div className="md:w-2/5 space-y-10">
        <div className="space-y-3">
          <img className="md:w-24" src="/assets/logo.svg" />
          <div className="md:w-3/5">
            <p className="!text-white/60 tracking-wider text-sm">
              We take complex hiring processes - and simplify them. Connecting
              you to the world’s highly qualified talent pool.
            </p>
          </div>
        </div>
        <div className="space-y-4  md:pb-10">
          <p className="text-white/50 font-bold tracking-wider text-xs">
            LINKS AND REDIRECTS
          </p>
          <div className="flex space-x-3">
            <Button className="bg-punch_gray text-xs">Hire now</Button>
            <Button className="bg-punch_gray text-xs">Apply now</Button>
          </div>
        </div>
      </div>
      <div className="md:w-3/5 space-y-10 pb-10">
        <Text.H1 className="!text-white hidden md:flex">
          Connecting the right people to the right businesses.
        </Text.H1>
        <Text.H3 className="!text-white md:hidden">
          Connecting the right people to the right businesses.
        </Text.H3>
        <div className="grid grid-cols-2 gap-7 md:grid-cols-3 lg:grid-cols-4">
          {quickLinks.map((link, index) => (
            <div key={index} className="space-y-3">
              <p className="text-white/50 font-bold tracking-wider text-xs">
                {link.title}
              </p>
              {link.links.map((lnk, idx) => (
                <div key={idx} className="space-y-2">
                  <p className="text-white/90 text-sm cursor-pointer transition-all hover:underline">
                    {lnk.name}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FooterQuickLinks;
