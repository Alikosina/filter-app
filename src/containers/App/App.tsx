import React, { useEffect } from "react";
import { connect } from "react-redux";

const AppContainer = (props: any) => {
  useEffect(() => {
    console.log("init");
  }, []);
  return <div>Hello Filter-App!</div>;
};

export default connect()(AppContainer);
