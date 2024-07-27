import React, { useState } from "react";

import { Flex } from "../../common/Index";

import ThumbsUpImg from "../../../assets/image/ThumbsUp.svg";
import ThumbsDownImg from "../../../assets/image/ThumbsDown.svg";

import AgreeDisAgreeButton from "../../specific/AnalystReport/AgreeDisAgreeButton";

const AnalystReportBodyAgree = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonType) => {
    setActiveButton(activeButton === buttonType ? null : buttonType);
  };

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      gap="32px"
      style={{ alignSelf: "stretch", width: "100%" }}
    >
      <AgreeDisAgreeButton
        image={ThumbsUpImg}
        number={91}
        isActive={activeButton === 'agree'}
        onClick={() => handleButtonClick('agree')}
      >
        동의해요
      </AgreeDisAgreeButton>
      <AgreeDisAgreeButton
        image={ThumbsDownImg}
        number={4}
        isActive={activeButton === 'disagree'}
        onClick={() => handleButtonClick('disagree')}
      >
        반대해요
      </AgreeDisAgreeButton>
    </Flex>
  );
};

export default AnalystReportBodyAgree;
