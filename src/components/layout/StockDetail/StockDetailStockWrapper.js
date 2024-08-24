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

  const baseUrl = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/stock/profile/${stockId}`);
        setStockData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch stock data");
        setLoading(false);
      }
    };

    fetchStockData();
  }, [stockId, baseUrl]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Flex
      direction="column"
      align="flex-start"
      gap="32px"
      style={{ width: "100%", padding: "0px 20px", marginBottom: "48px" }}
    >
      <StockDetailStockHeader stockData={stockData} />
      <StockDetailStockPrice stockData={stockData} />
      <StockDetailStockChart stockId={stockId} />
    </Flex>
  );
};

export default StockDetailStockWrapper;
