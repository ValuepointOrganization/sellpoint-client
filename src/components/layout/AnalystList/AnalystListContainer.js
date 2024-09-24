import React from "react";
import styled from "styled-components";
import ListContent from "../../specific/AnalystList/ListContent";

import { useNavigate } from "react-router-dom";
import axios from "axios";

const AnalystListContainer = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [analystProfile, setAnalystProfile] = React.useState([]);
  const fetchAnalystProfile = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/analyst`);
      const data = response.data;
      console.log(data);
      setAnalystProfile(data);
    } catch (err) {
      console.error(err);
    }
  };

  React.useEffect(() => {
    fetchAnalystProfile();
  }, []);

  const navigate = useNavigate();
  const handleAnalystClick = (analystId) => {
    navigate(`/analyst/${analystId}`);
  };

  return (
    <ListContainer>
      <ListHeader>
        <span style={{ width: "131px" }}>랭킹</span>
        <StatHeaderArea>
          <span style={{ width: "70px" }}>오차</span>
          <span style={{ width: "70px" }}>적중기간</span>
          <span style={{ width: "70px" }}>리포트 수</span>
        </StatHeaderArea>
      </ListHeader>
      {analystProfile.map((analyst, index) => (
        <ListContent
          key={index}
          analyst={analyst}
          index={index + 1}
          onClick={() => handleAnalystClick(analyst.ANALYST_ID)}
        />
      ))}
    </ListContainer>
  );
};

export default AnalystListContainer;

const ListContainer = styled.div`
  padding: 20px;
`;

const ListHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  color: #565656;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: 0.24px;
  padding-bottom: 10px;
  border-bottom: solid 1px #dadbdc;
`;

const StatHeaderArea = styled.div`
  display: flex;
  margin-left: auto;
`;
