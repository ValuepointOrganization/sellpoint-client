import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import styled from "styled-components";
import axios from "axios";

const StockDetailStockChart = ({ stockId }) => {
  const [stockPriceData, setStockPriceData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  // Helper function to convert YYYYMMDD to float timestamp
  const dateToTimestamp = (dateString) => {
    const year = dateString.substring(0, 4);
    const month = dateString.substring(4, 6);
    const day = dateString.substring(6, 8);
    // Convert to seconds (instead of milliseconds) and cast to float
    return Date.UTC(year, month - 1, day);
  };

  const dateToTimestampReal = (dateString) => {
    // Remove dashes from the date string if present
    const cleanedDateString = dateString.replace(/-/g, "");

    // Extract year, month, and day from the cleaned string
    const year = cleanedDateString.substring(0, 4);
    const month = cleanedDateString.substring(4, 6);
    const day = cleanedDateString.substring(6, 8);

    // Convert to a timestamp in milliseconds
    return Date.UTC(year, month - 1, day);
  };

  const dummyData = generateDummyData();
  React.useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await axios.get(
          `https://port-0-server-lzz7360l6d1cd162.sel4.cloudtype.app/api/stock/price/${stockId}`
        );
        setStockPriceData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch stock data");
        setLoading(false);
      }
    };
    fetchStockData();
  }, [stockId]);
  if (stockPriceData) {
    console.log(stockPriceData[0].DATE);
  }
  console.log(dateToTimestamp(dummyData[0][0]));

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const options = {
    chart: {
      height: 400,
      marginBottom: 10, // Remove bottom margin
    },
    turboThreshold: 1000, // Increase this value to handle more data points
    rangeSelector: {
      enabled: true,
    },
    navigator: {
      enabled: true,
    },
    scrollbar: {
      enabled: true,
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
        type: "line",
        data: stockPriceData
          .slice() // Create a shallow copy of the array to avoid mutating the original data
          .reverse()
          .map((dataPoint) => [
            dateToTimestampReal(dataPoint.DATE),
            parseFloat(dataPoint.PRICE),
          ]),
        gapSize: 10,

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

const generateDummyData = () => {
  const startDate = new Date(2020, 0, 1);
  const endDate = new Date(2022, 11, 31);
  const data = [];
  let currentDate = new Date(startDate);
  let price = 100; // Starting price

  while (currentDate <= endDate) {
    const dateString = currentDate.toISOString().slice(0, 10).replace(/-/g, "");
    price += (Math.random() - 0.5) * 5; // Random price change
    price = Math.max(0, price); // Ensure price doesn't go negative
    data.push([dateString, parseFloat(price.toFixed(2))]);
    currentDate.setDate(currentDate.getDate() + 7); // Move to next week
  }

  return data;
};

const ChartContainer = styled.div`
  width: 100%;
  height: 400px;
`;
