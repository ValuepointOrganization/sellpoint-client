import React from "react";
import styled from "styled-components";

const PriceBar = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: ${(props) => props.backgroundColor || "#FF304A"};
  padding: 8px 12px;
  color: ${(props) => props.textColor || "#FFF"};
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 19.6px */
  width: ${(props) => props.width || "100%"};
`;

export default PriceBar;
