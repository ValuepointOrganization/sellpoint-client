import React from "react";
import styled from "styled-components";

const ReportOpinion = ({ children }) => {
  const isBuy = children.toLowerCase() === 'buy';
  return <OpinionBox isBuy={isBuy}>{children}</OpinionBox>;
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
  background: ${(props) =>
    props.isBuy ? "rgba(255, 59, 48, 0.10)" : "rgba(49, 130, 246, 0.1)"};
  color: ${(props) => (props.isBuy ? "#FF3B30" : "#3182f6")};
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
