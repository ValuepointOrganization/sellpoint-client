import styled from "styled-components";

const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 12px;
  padding-bottom: 8px;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export default ScrollContainer;
