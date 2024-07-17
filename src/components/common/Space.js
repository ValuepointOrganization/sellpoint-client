import React from 'react';
import styled from 'styled-components';

const SpaceDiv = styled.div`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '0'};
`;

const Space = ({ width, height }) => {
  return <SpaceDiv width={width} height={height} />;
};

export default Space;
