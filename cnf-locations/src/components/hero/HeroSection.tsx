import { HomeAppSDK } from "@contentful/app-sdk";
import { Card } from "@contentful/f36-components";

interface HeroSectionProps {
  spaceName: string;
  sdk: HomeAppSDK;
}

// CSS
const heroSectionStyles = {
  overflow: "hidden",
  borderRadius: "24px",
  border: "1px solid  #d7e2f3",
  boxShadow: "0px 24px 60px rgba(15, 23, 42, 0.08)",
  background:
    "linear-gradient(135deg,#16325c 0%, #1d4a86 48%, #2f6fed 100%)",
  color: "#ffffff",
};

const HeroSection = ({ spaceName, sdk }: HeroSectionProps) => {
  return (
    <Card className="hero" style={heroSectionStyles}>
      <div
        style={{
          padding: "32px",
        }}
      >
        <div>
          <p
            style={{
              margin: 0,
              fontSize: "12px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              opacity: 0.78,
            }}
          >
            Auther Dashboard
          </p>

          <h1
            style={{
              margin: "18px 0 0",
              fontSize: "38px",
              lineHeight: "1.1",
              color: "#fff",
            }}
          >
            Hello {sdk.user?.firstName || "Author"}
          </h1>

          <p
            style={{
              margin: "14px 0 0",
              fontSize: "16px",
              lineHeight: "1.5",
              color: "rgba(255, 255, 255, 0.92)",
            }}
          >
            Welcome to {spaceName}, your Contentful space! This dashboard
            provides you with an overview of your content, allowing you to
            manage and monitor your entries, assets, and other resources
            efficiently.
          </p>
        </div>
      </div>
    </Card>
  );
};

export default HeroSection;
