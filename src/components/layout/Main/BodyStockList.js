import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Flex from "../../common/Flex.js";
import Space from "../../common/Space.js";
import Text from "../../common/Text.js";
import ListContainerHeader from "../../specific/Main/ListContainerHeader.js";
import ListSquare from "../../specific/Main/ListSquare.js";
import { ReactComponent as NvidiaLogo } from "../../../assets/image/NvidiaLogo.svg";

const baseUrl = process.env.BASE_URL;

const BodyStockList = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleStockClick = (stockId) => {
    navigate(`/stock/${stockId}`);
  };

  const handleMoreClick = () => {
    navigate("/stock-list");
  };

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await axios.get(
          `https://port-0-server-lzz7360l6d1cd162.sel4.cloudtype.app/api/stock/profile`
        );
        setStocks(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch stock data");
        setLoading(false);
      }
    };

    fetchStocks();
  }, []);
  // console.log(stocks);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Flex direction="column" style={{ width: "100%" }}>
      <ListContainerHeader
        title="인기 종목"
        buttonText="종목 더보기"
        buttonWidth={82}
        buttonHeight={22}
        onButtonClick={handleMoreClick}
      />
      <Space height="20px" />
      {stocks.slice(0, 3).map((stock, index) => (
        <ListSquare
          key={index}
          type="stock"
          onClick={() => handleStockClick(stock.STOCK_ID)}
        >
          <Flex
            align="center"
            gap="12px"
            style={{ width: "auto", fontSize: "14px" }}
          >
            {/* <Flex
              justify="center"
              align="center"
              style={{ width: "30px", height: "30px" }}
            >
              <StyledSVG width="26" height="18" viewBox="0 0 26 18">
                <NvidiaLogo />
              </StyledSVG>
            </Flex> */}
            <Text
              fontSize="14px"
              fontWeight="500"
              lineHeight="normal"
              color="#2c2c2c"
            >
              {stock.STOCK_NAME}
            </Text>
          </Flex>
          <Flex direction="column" justify="center" align="flex-end" gap="4px">
            <Text
              fontSize="12px"
              fontWeight="500"
              lineHeight="normal"
              color="#2c2c2c"
            >
              {stock.CODE}
            </Text>
            <Text
              fontSize="12px"
              color={parseFloat(stock.FLUC_RATE) < 0 ? "#3182F6" : "#FF3B30"}
              fontWeight="500"
              lineHeight="normal"
            >
              {stock.FLUC_RATE}
            </Text>
          </Flex>
        </ListSquare>
      ))}
    </Flex>
  );
};

export default BodyStockList;
