import React from "react";
import Page from "../layout/Page";

const SecuredRoute = ({ component: Component, title, isPrivate, ...rest }) => {
  return (
    <Page title={title}>
      <Component {...rest} />;
    </Page>
  );
};

export default SecuredRoute;
