import React, { useState } from "react";

import { Flex } from "../../common/Index";

import AgreeDisAgreeButton from "../../specific/AnalystReport/AgreeDisAgreeButton";

const thumbsUpIcon = (
  <path d="M1.5 16.5h3v-9h-3v9zm16.5-8.25c0-.825-.675-1.5-1.5-1.5h-4.815l.735-3.54.015-.165c0-.315-.135-.615-.345-.825L11.175 1.5 5.85 6.84c-.3.285-.45.675-.45 1.11v7.5c0 .825.675 1.5 1.5 1.5h7.5c.615 0 1.155-.375 1.38-.915l2.265-5.295c.075-.18.105-.375.105-.585v-1.5l-.015-.015.015-.195z" />
);

const thumbsDownIcon = (
  <path d="M16.5 1.5h-3v9h3v-9zM0 9.75c0 .825.675 1.5 1.5 1.5h4.815l-.735 3.54-.015.165c0 .315.135.615.345.825L6.825 16.5l5.325-5.34c.3-.285.45-.675.45-1.11v-7.5c0-.825-.675-1.5-1.5-1.5h-7.5c-.615 0-1.155.375-1.38.915L0 7.215c-.075.18-.105.375-.105.585v1.5l.015.015L0 9.555v.195z" />
);

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
        icon={thumbsUpIcon}
        number={91}
        isActive={activeButton === "agree"}
        onClick={() => handleButtonClick("agree")}
      >
        동의해요
      </AgreeDisAgreeButton>
      <AgreeDisAgreeButton
        icon={thumbsDownIcon}
        number={4}
        isActive={activeButton === "disagree"}
        onClick={() => handleButtonClick("disagree")}
      >
        반대해요
      </AgreeDisAgreeButton>
    </Flex>
  );
};

export default AnalystReportBodyAgree;
