import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import styled from "styled-components";

const ChartContainer = styled.div`
  width: 100%;
  height: 400px;
`;

// Helper function to convert YYYYMMDD to timestamp
const dateToTimestamp = (dateString) => {
  const year = dateString.substring(0, 4);
  const month = dateString.substring(4, 6);
  const day = dateString.substring(6, 8);
  return Date.UTC(year, month - 1, day);
};

const StockDetailStockChart = () => {
  const stockData = [
    ["20070101", 12.5],
    ["20070102", 12.61],
    ["20070103", 12.69],
    ["20070104", 12.88],
    ["20070105", 12.79],
    ["20070108", 12.3],
    ["20070109", 12.8],
    ["20070110", 13.1],
    ["20070111", 13.5],
    ["20070112", 13.87],
  ];

  const options = {
    chart: {
      height: 400,
      marginBottom: 0, // Remove bottom margin
    },
    rangeSelector: {
      enabled: false, // Disable range selector
    },
    navigator: {
      enabled: false, // Disable navigator
    },
    scrollbar: {
      enabled: false, // Disable scrollbar
    },
    title: {
      text: "",
    },
    xAxis: {
      minPadding: 0,
      maxPadding: 0,
    },
    series: [
      {
        name: "AAPL",
        data: stockData.map(([date, price]) => [dateToTimestamp(date), price]),
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
