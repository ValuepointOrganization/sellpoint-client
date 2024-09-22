import React from "react";

import { Flex, Text } from "../../common/Index";
import Comment from "../../specific/AnalystReport/Comment";
import Divider from "../../specific/Divider";
import axios from "axios";

const AnalystReportBodyComment = ({ analystReportId }) => {
  const [comments, setComments] = React.useState(null);
  const fetchComments = async ({ analystReportId }) => {
    try {
      const response = await axios.get(
        `https://port-0-server-lzz7360l6d1cd162.sel4.cloudtype.app/api/comment?REPORT_ID=${analystReportId}`
      );
      const data = response.data;
      setComments(data);
    } catch (error) {
      console.error(error);
    }
  };
  React.useEffect(() => {
    fetchComments({ analystReportId });
    console.log(comments);
  }, [analystReportId]);
  if (!comments) return null;
  return (
    <Flex
      direction="column"
      justify="center"
      align="flex-start"
      gap="24px"
      style={{ alignSelf: "stretch" }}
    >
      <Flex
        direction="row"
        justify="flex-start"
        align="center"
        style={{ width: "100%" }}
      >
        <Text fontSize="16px" lineHeight="22px">
          이 리포트에 대한 댓글&nbsp;
        </Text>
        <Text color="#8c8c8c" fontSize="16px" lineHeight="22px">
          {comments.length}
        </Text>
      </Flex>
      {comments.map((comment, index) => (
        <React.Fragment key={index}>
          <Comment {...comment} />
          {index < comment.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </Flex>
  );
};

export default AnalystReportBodyComment;
