import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Span = styled.span`
  display: block;
  width: 100%;
  padding-top: ${props => props.size};
`;

const Spacer = props => <Span {...props} />;

Spacer.propTypes = {
  size: PropTypes.string.isRequired,
};

Spacer.defaultProps = {
  size: "10px",
};

export default Spacer;
