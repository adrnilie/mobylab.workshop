import React from "react";
import { connect } from "react-redux";

const ShowCounter = ({ counter }) => <div>{counter}</div>;

const mapStateToProps = ({ counter }) => ({ counter });

export default connect(mapStateToProps, {})(ShowCounter);
