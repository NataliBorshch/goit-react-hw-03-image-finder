import React, { Component } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default class Spinner extends Component {
  render() {
    return <Loader type="Bars" color="#646de6" height={80} width={80} />;
  }
}
