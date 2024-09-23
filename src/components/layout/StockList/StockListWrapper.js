import React from "react";
import styled from "styled-components";

import { Flex, Text } from "../../common/Index";
import StockItemContainer from "../../specific/StockList/StockItemContainer";

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
  }, []);

  if (loading) return <Text>Loading...</Text>;

  return (
    <Flex direction="column" style={{ padding: "20px" }}>
      {stockListData.map((stock, index) => (
        <React.Fragment>
          <StockItemContainer key={index} stock={stock} />
          <Divider />
        </React.Fragment>
      ))}
    </Flex>
  );
};

export default StockListWrapper;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #f5f6f7;
  margin-top: 10px;
  margin-bottom: 10px;
`;
