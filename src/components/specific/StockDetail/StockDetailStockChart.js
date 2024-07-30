import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import styled from "styled-components";

const ChartContainer = styled.div`
  width: 100%;
  height: 400px;
`;

const StockDetailStockChart = () => {
  const options = {
    chart: {
      height: 400,
    },
    rangeSelector: {
      selected: 1,
    },
    title: {
      text: "",
    },
    series: [
      {
        name: "AAPL",
        data: [
          [1167609600000, 12.5],
          [1167696000000, 12.61],
          [1167782400000, 12.69],
          [1167868800000, 12.88],
          [1167955200000, 12.79],
          [1168214400000, 12.3],
          [1168300800000, 12.8],
          [1168387200000, 13.1],
          [1168473600000, 13.5],
          [1168560000000, 13.87],
        ],
        tooltip: {
          valueDecimals: 2,
        },
      },
    ],
  };

  return (
    <ChartContainer>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={"stockChart"}
        options={options}
      />
    </ChartContainer>
  );
};

export default StockDetailStockChart;
