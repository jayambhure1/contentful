import { HomeAppSDK } from "@contentful/app-sdk";
import useHomeStats from "../services/home";
import { useSDK } from "@contentful/react-apps-toolkit";
import { Card, Tab } from "@contentful/f36-components";
import HeroSection from "../components/hero/HeroSection";
import TabsSection from "../components/hero/TabsSection";

const Home = () => {
  const sdk = useSDK<HomeAppSDK>();
  const { spaceName } = useHomeStats(sdk);

  return (
    <>
      <div style={{ minHeight: "100vh" }}>
        {/* Hero Section */}

        <div
          style={{
            
            background:
              "radial-gradient(circle at left top, rgb(244,248,255,1) 0%, rgb(255,255,255) 42% ,rgb(248,250,252) 100%)",
          }}
        >
          <div
            style={{
              padding: "30px 30px 0px",
            }}
          >
            <HeroSection spaceName={spaceName} sdk={sdk} />
          </div>
        </div>

        {/* Tabs Section */}
        <div style={{ padding: "30px" }}>
          <TabsSection />
        </div>
      </div>
    </>
  );
};

export default Home;
