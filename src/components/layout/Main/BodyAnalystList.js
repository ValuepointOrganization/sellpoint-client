import React from "react";
import styled from "styled-components";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import Space from "../../common/Space";
import ListContainerHeader from "../../specific/Main/ListContainerHeader";
import ScrollContainer from "../../specific/Main/ScrollContainer";
import ListSquare from "../../specific/Main/ListSquare";

const BodyAnalystList = () => {
  const [analysts, setAnalysts] = React.useState([]);
  const [error, setError] = React.useState(null);

  const navigate = useNavigate();

  const handleMoreButtonClick = () => {
    navigate("/analyst-list");
  };

  const handleAnalystClick = (analystId) => {
    navigate(`/analyst/${analystId}`);
  };

  const baseUrl = process.env.BASE_URL;

  React.useEffect(() => {
    const fetchAnalysts = async () => {
      try {
        const response = await axios.get(
          `https://port-0-server-lzz7360l6d1cd162.sel4.cloudtype.app/api/analyst`
        );
        setAnalysts(response.data);
      } catch (err) {
        setError("Failed to fetch analyst data");
      }
    };

    fetchAnalysts();
  }, [baseUrl]);

  // console.log(analysts);
  return (
    <AnalystListContainer>
      <ListContainerHeader
        title="인기 애널리스트"
        buttonText="애널리스트 더보기"
        buttonWidth={119}
        buttonHeight={22}
        onButtonClick={handleMoreButtonClick}
      />
      <Space height="20px" />
      <ScrollContainer>
        {analysts.map((analyst, index) => (
          <ListSquare
            key={index}
            type="analyst"
            onClick={() => handleAnalystClick(analyst.ANALYST_ID)}
          >
            <AnalystName>{analyst.ANALYST_NAME}</AnalystName>
            <AnalystFirm>{analyst.ANALYST_COMPANY}</AnalystFirm>
          </ListSquare>
        ))}
      </ScrollContainer>
    </AnalystListContainer>
  );
};

export default BodyAnalystList;

const AnalystListContainer = styled.div`
  width: 100%;
`;

const AnalystName = styled.div`
  color: #000;
  font-size: ${(props) => (props.children.length > 6 ? "10px" : "14px")};
  font-style: normal;
  font-weight: 600;
  line-height: 160%;
  width: 100%;
  text-align: center;
`;

const AnalystFirm = styled.div`
  color: #bababf;
  font-size: ${(props) => (props.children.length > 4 ? "8px" : "12px")};
  font-style: normal;
  font-weight: 600;
  line-height: 160%;
  width: 100%;
  text-align: center;
`;
