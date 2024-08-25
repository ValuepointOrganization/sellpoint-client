import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { Flex } from "../../common/Index";

import StockDetailStockHeader from "../../specific/StockDetail/StockDetailStockHeader";
import StockDetailStockPrice from "../../specific/StockDetail/StockDetailStockPrice";
import StockDetailStockChart from "../../specific/StockDetail/StockDetailStockChart";

const StockDetailStockWrapper = () => {
  const { stockId } = useParams();
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(stockId);
  const baseUrl = process.env.BASE_URL;

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await axios.get(
          `https://port-0-server-lzz7360l6d1cd162.sel4.cloudtype.app/api/stock/profile/${stockId}`
        );
        setStockData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch stock data");
        setLoading(false);
      }
    };
    fetchStockData();
    console.log(stockData);
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Flex
      direction="column"
      align="flex-start"
      gap="32px"
      style={{ width: "100%", padding: "0px 20px", marginBottom: "48px" }}
    >
      <StockDetailStockHeader
        stockName={stockData.STOCK_NAME}
        stockCode={stockData.CODE}
      />
      <StockDetailStockPrice
        stockPrice={stockData.PRICE}
        flucPrice={stockData.FLUC_PRICE}
        flucRate={stockData.FLUC_RATE}
        country={stockData.COUNTRY}
      />
      <StockDetailStockChart stockId={stockId} />
    </Flex>
  );
};

export default StockDetailStockWrapper;
