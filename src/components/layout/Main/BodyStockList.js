import React from "react";
import Flex from "../../common/Flex.js";
import Space from "../../common/Space.js";
import ListContainerHeader from "../../specific/Main/ListContainerHeader.js";
import ListSquare from "../../specific/Main/ListSquare.js";
import StyledSVG from "../../common/StyledSVG.js";

import { ReactComponent as NvidiaLogo } from "../../../assets/image/NvidiaLogo.svg";
import { DummyStock } from "../../../assets/dummy.js";

const BodyStockList = () => {
  return (
    <Flex direction="column" style={{ width: "100%" }}>
      <ListContainerHeader
        title="인기 종목"
        buttonText="종목 더보기"
        buttonWidth={82}
        buttonHeight={22}
      />
      <Space height="20px" />
      {DummyStock.map((stock, index) => (
        <ListSquare key={index} type="stock">
          <Flex align="center" gap="12px" style={{ width: "auto", fontSize: "14px" }}>
            <Flex justify="center" align="center" style={{ width: "30px", height: "30px" }}>
              <StyledSVG width="26" height="18" viewBox="0 0 26 18">
                <NvidiaLogo />
              </StyledSVG>
            </Flex>
            <span>{stock.name}</span>
          </Flex>
          <Flex direction="column" justify="center" align="flex-end" gap="4px" style={{ fontSize: "12px" }}>
            <span>{stock.code}</span>
            <span style={{ color: "#FF3B30" }}>{stock.up}</span>
          </Flex>
        </ListSquare>
      ))}
    </Flex>
  );
};

export default BodyStockList;
