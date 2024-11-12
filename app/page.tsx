import Header from "@/components/Header";
import SectionFour from "@/components/sections/sectionFour";
import SectionOne from "@/components/sections/sectionOne";
import SectionThree from "@/components/sections/sectionThree";
import SectionTwo from "@/components/sections/sectionTwo";
import SubHeader from "@/components/sub-Header";

export default function Home() {
  return (
    <div className="bg-background text-foreground w-full mx-0">
      {/* this is the header component */}
      <div>
        <Header />
        <SubHeader />
      </div>
      {/* this is the body/section side */}
      <div className="border flex flex-row h-full w-full">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </div>
    </div>
  );
}
