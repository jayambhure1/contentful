import { Card } from "@contentful/f36-components";

const HelpTab = () => {
  const cardStyle = {
    borderRadius: "24px",
    padding: "28px",
    border: "1px solid #dbe4f0",
    boxShadow: "0px 18px 45px rgba(15, 23, 42, 0.05)",
    background: "#ffffff",
    minHeight: "220px",
  };

  return (
    <div>
      <Card style={cardStyle}>
        <h3 style={{ margin: 0, fontSize: "20px", color: "#10233f" }}>Help</h3>
        <p style={{ margin: "16px 0 0", color: "#52627a", lineHeight: 1.6 }}>
          This card provides guidance and support content for the Help tab. Add any help text,
          links, or resources here to assist your users.
        </p>
      </Card>
    </div>
  );
};

export default HelpTab;