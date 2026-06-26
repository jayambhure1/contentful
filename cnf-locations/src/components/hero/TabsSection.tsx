import { Card, Tabs } from "@contentful/f36-components";
import { StatsTab } from "./StatsTab";

const TabsSection = () => {
  return (
    <>
      <Card
        style={{
          borderRadius: "24px",
          padding: "28px",
          border: "1px solid  #dbe4f0",
          boxShadow: "0px 18px 45px rgba(15, 23, 42, 0.05)",
          background: "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "16px",
            alignItems: "Flex-end",
            marginBottom: "28px",
          }}
        >
          <div>
            <p
              style={{
                margin: 0,
                fontSize: "12px",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#52627a",
              }}
            >
              Your Workspace
            </p>

            <h2
              style={{
                margin: "8px 0 0",
                fontSize: "28px",
                lineHeight: "1.2",
                color: "#10233f",
              }}
            >
              Daily Author tracking and statistics for your Contentful space
            </h2>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultTab="statistics">
          <Tabs.List
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              padding: "18px",
              borderRadius: "18px",
              background: "#f6f9fc",
            }}
          >
            <Tabs.Tab panelId="statistics">Statistics</Tabs.Tab>
            <Tabs.Tab panelId="second">Second Tab</Tabs.Tab>
            <Tabs.Tab panelId="third">Third Tab</Tabs.Tab>
          </Tabs.List>

          {/* Statistics Tab Content */}
          <Tabs.Panel id="statistics">
            <StatsTab />
          </Tabs.Panel>
          
          <Tabs.Panel id="second">Content for the second tab</Tabs.Panel>
          <Tabs.Panel id="third">Content for the third tab</Tabs.Panel>
        </Tabs>
      </Card>
    </>
  );
};

export default TabsSection;
