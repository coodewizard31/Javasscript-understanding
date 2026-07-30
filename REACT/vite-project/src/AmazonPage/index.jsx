import Navigation from "./Navigation";
import MainSection from "./MainSection";
import SiderBar from "./SideBar";

function AmazonPage() {
  return (
    <div>
      <Navigation />
      <div style={{ display: "flex" }}>
        <SiderBar />
        <MainSection />
      </div>
    </div>
  );
}

export default AmazonPage;
