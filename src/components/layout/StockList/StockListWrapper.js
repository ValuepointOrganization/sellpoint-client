import React from "react";
import styled from "styled-components";

import { Flex, Text } from "../../common/Index";

const StockListWrapper = () => {
  const [stockListData, setStockListData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const fetchStockListData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://port-0-server-lzz7360l6d1cd162.sel4.cloudtype.app/api/stock/profile/`
      );
      const data = await response.json();
      setStockListData(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchStockListData();
    console.log(stockListData);
  }, []);

  if (loading) return <Text>Loading...</Text>;

  return;
};

export default StockListWrapper;
