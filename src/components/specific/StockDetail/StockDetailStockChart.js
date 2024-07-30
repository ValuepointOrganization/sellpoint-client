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
          [1167609600000, 12.5], // January 1, 2007
          [1167696000000, 12.61], // January 2, 2007
          [1167782400000, 12.69], // January 3, 2007
          [1167868800000, 12.88], // January 4, 2007
          [1167955200000, 12.79], // January 5, 2007
          [1168214400000, 12.3], // January 8, 2007
          [1168300800000, 12.8], // January 9, 2007
          [1168387200000, 13.1], // January 10, 2007
          [1168473600000, 13.5], // January 11, 2007
          [1168560000000, 13.87], // January 12, 2007
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
