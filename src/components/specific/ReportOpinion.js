import React from "react";
import styled from "styled-components";

const ReportOpinion = ({ children }) => {
  const opinion = children.toLowerCase();
  let type;

  switch (opinion) {
    case "buy":
    case "최고":
      type = "buy";
      break;
    case "hold":
    case "평균":
      type = "hold";
      break;
    case "sell":
    case "최저":
      type = "sell";
      break;
    default:
      type = "unknown";
  }

  return <OpinionBox type={type}>{children}</OpinionBox>;
};

export default ReportOpinion;

const OpinionBox = styled.div`
  display: flex;
  width: 40px;
  padding: 4px 6px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: ${(props) => {
    switch (props.type) {
      case "buy":
        return "rgba(255, 59, 48, 0.10)";
      case "hold":
        return "rgba(32, 32, 32, 0.10)";
      case "sell":
        return "rgba(49, 130, 246, 0.1)";
      default:
        return "rgba(200, 200, 200, 0.1)";
    }
  }};
  color: ${(props) => {
    switch (props.type) {
      case "buy":
        return "#FF3B30";
      case "hold":
        return "#202020";
      case "sell":
        return "#3182f6";
      default:
        return "#808080";
    }
  }};
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
