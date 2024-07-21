import React from "react";
import PropTypes from "prop-types";
import { ListSquareContainer } from "./ListSquareStyles";

const ListSquare = ({ type, children, ...props }) => {
  return (
    <ListSquareContainer type={type} {...props}>
      {children}
    </ListSquareContainer>
  );
};

ListSquare.propTypes = {
  type: PropTypes.oneOf(["analyst", "user", "stock", "report"]).isRequired,
  children: PropTypes.node.isRequired,
};

export default ListSquare;
