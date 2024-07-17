import React from "react";
import styled from "styled-components";

const MainBody = () => {
  <BodyContainer>
    <MainLine>숨겨진 매도 의견을\n 확인해보세요.</MainLine>
  </BodyContainer>;
  return;
};

export default MainBody;

const BodyContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 20px 40px;
`;

const MainLine = styled.span`
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: 160%;
  white-space: pre-line;
`;
