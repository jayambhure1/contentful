import { HomeAppSDK } from "@contentful/app-sdk/dist/types/api.types";
import { useSDK } from "@contentful/react-apps-toolkit";
import useHomeStats from "../../services/home";
import { useState } from "react";
import { Card } from "@contentful/f36-components";
import { ImageSquareIcon, PenNibIcon, WrenchIcon } from "@contentful/f36-icons";

export const StatsTab = () => {
  const sdk = useSDK<HomeAppSDK>();
  const { spaceName, totalEntries, totalAssets, totalContentTypes } =
    useHomeStats(sdk);

  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const cardWrapperStyle = {
    flex: "1 1 calc(33.333% - 24px)",
    minWidth: "220px",
  };

  const baseCardStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: "16px",
    padding: "24px 22px",
    borderRadius: "18px",
    background: "linear-gradient(135deg, #ffffff 0%, #f7f9fb 100%)",
    boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)",
    border: "1px solid rgba(15, 23, 42, 0.08)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
    cursor: "pointer",
    position: "relative" as const,
    overflow: "hidden",
  };

  const getCardstyle = (isHovered: boolean) => ({
    ...baseCardStyle,
    ...(isHovered && {
      boxShadow: "0 20px 40px rgba(15, 23, 42, 0.14)",
      transform: "translateY(-6px)",
      border: "1px solid rgba(15, 23, 42, 0.12)",
      background: "linear-gradient(135deg, #ffffff 0%, #eef4ff 100%)",
    }),
  });

  const iconContainerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    width: "100%",
  };

  const textBlockStyle = {
    display: "flex",
    flexDirection: "column" as const,
    gap: "6px",
  };

  const getIconStyle = (color: string, bgColor: string) => {
    return {
      width: "60px",
      height: "60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "14px",
      background: bgColor,
      color,
      flexShrink: 0,
      boxShadow: "0 8px 16px rgba(15, 23, 42, 0.08)",
    };
  };
  const valueStyle = {
    fontSize: "32px",
    fontWeight: 800,
    margin: 0,
    color: "#0a0e27",
    lineHeight: "1",
    letterSpacing: "-0.5px",
  };

  const titleStyle = {
    fontSize: "13px",
    fontWeight: 600,
    margin: 0,
    color: "#6b7280",
    letterSpacing: "0.3px",
    textTransform: "uppercase" as const,
  };

  interface StatCardProps {
    id: string;
    icon: React.ReactNode;
    value: number;
    title: string;
    iconColor: string;
    iconBg: string;
  }

  const StatCard = ({
    id,
    icon,
    value,
    title,
    iconColor,
    iconBg,
  }: StatCardProps) => {
    const isHovered = hoveredCard === id;

    return (
      <div
        style={cardWrapperStyle}
        onMouseEnter={() => setHoveredCard(id)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <Card style={getCardstyle(isHovered)}>
          <div style={iconContainerStyle}>
            <div style={getIconStyle(iconColor,iconBg)}>{icon}</div>
            <div style={textBlockStyle}>
              <p style={valueStyle}>{value}</p>
              <p style={titleStyle}>{title}</p>
            </div>
          </div>
        </Card>
      </div>
    );
  };

  return (
    <>
      <div style={
        {
          marginTop: "20px",
          display: "flex",
          flexWrap: "wrap",
          gap:"24px",
          padding: "0 4px"
        }
      }>
        <StatCard
          id="entries"
          icon={<PenNibIcon />}
          value={totalEntries}
          title="Entries"
          iconColor="#0c3c76"
          iconBg="#e7f1ff"
        />

        <StatCard
          id="dontent-types"
          icon={<WrenchIcon />}
          value={totalContentTypes}
          title="Content type"
          iconColor="#0c3c76"
          iconBg="#e7f1ff"
        />

        <StatCard
          id="assets"
          icon={<ImageSquareIcon />}
          value={totalAssets}
          title="Assets"
          iconColor="#0c3c76"
          iconBg="#e7f1ff"
        />
      </div>
    </>
  );
};
