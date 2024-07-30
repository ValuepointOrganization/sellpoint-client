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

const generateDummyData = () => {
  const startDate = new Date(2020, 0, 1);
  const endDate = new Date(2022, 11, 31);
  const data = [];
  let currentDate = new Date(startDate);
  let price = 100; // Starting price

  while (currentDate <= endDate) {
    const dateString = currentDate.toISOString().slice(0, 10).replace(/-/g, '');
    price += (Math.random() - 0.5) * 5; // Random price change
    price = Math.max(0, price); // Ensure price doesn't go negative
    data.push([dateString, parseFloat(price.toFixed(2))]);
    currentDate.setDate(currentDate.getDate() + 7); // Move to next week
  }

  return data;
};

const StockDetailStockChart = () => {
  const stockData = generateDummyData();

  const options = {
    chart: {
      height: 400,
      marginBottom: 0, // Remove bottom margin
    },
    rangeSelector: {
      enabled: true, // Disable range selector
    },
    navigator: {
      enabled: false, // Disable navigator
    },
    scrollbar: {
      enabled: true, // Disable scrollbar
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
