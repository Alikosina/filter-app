import React, { memo } from "react";
import classnames from "classnames";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// @ts-ignore
import Loader from "react-loader-spinner";
import { LoaderComponentProps } from "./models";
import "./LoaderComponent.scss";

const LoaderComponent = (props: LoaderComponentProps) => {
  const { fullScreen } = props;
  const className = classnames("loader-container", {
    "loader-container_full-screen": fullScreen
  });
  return (
    <div className={className}>
      <Loader type="Oval" color="#0984e3" height="100" width="100" />
    </div>
  );
};

export default memo(LoaderComponent);
