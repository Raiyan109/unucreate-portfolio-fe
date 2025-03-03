import Contact from "@/components/Home/Contact";
import DisignForTheHuman2 from "@/components/Home/DisignForTheHuman2";
import Hero from "@/components/Home/Hero";
import InnovationMobile from "@/components/Home/InnovationMobile";
import LetsChat2 from "@/components/Home/LetsChat2";
import MyProjects2 from "@/components/Home/MyProjects2";
import MyProjectsMobile from "@/components/Home/MyProjectsMobile";
import Showroom from "@/components/Home/Showroom";
import ShowroomMobile from "@/components/Home/ShowroomMobile";
import Welcome from "@/components/Home/Welcome";
import WhatIDo from "@/components/Home/WhatIDo";
import WhoIHaveWorked from "@/components/Home/WhoIHaveWorked";



export default function Home() {
  return (
    <div className="mx-auto max-w-[1400px]">
      <div className="hidden lg:block">
        <Hero />
      </div>
      <Welcome />
      <WhoIHaveWorked />
      {/* <WhatIDo /> */}
      {/* <DesignForTheHuman2 /> */}
      {/* <MyProjects /> */}
      <div className="block lg:hidden">
        <InnovationMobile />
      </div>
      <div className="hidden lg:block">
        <MyProjects2 />
      </div>
      <div className="block lg:hidden">
        <MyProjectsMobile />
      </div>
      {/* <Contact /> */}
      {/* <LetsChat /> */}
      <DisignForTheHuman2 />
      <div className="hidden lg:block">
        <Showroom />
      </div>
      <LetsChat2 />
      <div className="block md:hidden">
        <ShowroomMobile />
      </div>
      {/* <LetsStart /> */}
    </div>
  );
}
