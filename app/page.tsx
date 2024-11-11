import Header from "@/components/Header";
import SubHeader from "@/components/sub-Header";

export default function Home() {
  return (
    <div className="bg-background text-foreground w-full mx-0">
      {/* this is the header component */}
      <div>
        <Header />
        <SubHeader />
      </div>
      {/* this is the body */}
      <div>
        {/* first section */}
        <div>
          {/* filter component */}
          <div></div>
          <div></div>
          <div></div>
        </div>
        {/* second section */}
        <div></div>
        {/* third section */}
        <div></div>
        {/* fourth section */}
        <div></div>
      </div>
    </div>
  );
}
