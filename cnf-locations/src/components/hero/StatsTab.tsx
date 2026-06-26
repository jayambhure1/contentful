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
    flex: "1 1 calc(20 % - 20px)",
    minWidth: "160px",
  };

  const baseCardStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: "16px",
    padding: "24px",
    borderRadius: "16px",
    background: "linear-gradient(135deg, #ffffff 0%, #fafbfc 100%)",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08), 0 0 1px rgba(0, 0, 0, 0.04)",
    border: "1px solid rgba(0,0,0,0.06)",
    transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
    cursor: "pointer",
    position: "relative" as const,
    overflow: "hidden",
  };

  const getCardstyle = (isHovered: boolean) => ({
    ...baseCardStyle,
    ...(isHovered && {
      boxShadow: "0 16px 32px rgba(0,0,0,0.15), 0 6px 12px rgba(0,0,0,0.08)",
      transform:"translateY(-8px) scale(1.02)",
      border:"1px solid rgba(0,0,0,0.1)",
      backgroud: "linear-gradient(135deg,#ffffff 0%, #f8fbff 100%)",
    }),
  });

  const iconContainerStyle = {
    display: "flex",
    alignItems:"center",
    gap: "16px",
    width: "100%"
  };

  const textBlockStyle = {
    display: "flex",
    flexDirection: "column" as const,
    gap: "6px"
  };

  const getIconStyle = (color: string, bgColor: string) => {
    return {
      width: "60px",
      height: "60px",
      display: "flex",
      alignItems: "center",
      justifyContent:"center",
      borderRedius: "10px",
      background: bgColor,
      color: color,
      flexShrink:0
    };
  };
  const valueStyle = {
    fontSize: "32px",
    fontWeight: 800,
    margin:0,
    color: "#0a0e27",
    lineHeight:"1",
    letterSpacing: "-0.5px"
  };

  const titleStyle = {
    fontSize : "13px",
    fontWeight: 600,
    mergin: 0,
    color: "#6b7280",
    letterSpacing:"0,3px",
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
          id="Content Types"
          icon={<WrenchIcon />}
          value={totalContentTypes}
          title="Content type"
          iconColor="#0c3c76"
          iconBg="#e7f1ff"
        />

        <StatCard
          id="Content Types"
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
