import React from "react";
import { Redirect, Route } from "react-router-dom";

import { useAuthState } from "../context/authContext";
import SecuredRoute from "./SecuredRoute";

const AppRoutes = ({
  component: Component,
  path,
  isPrivate,
  title,
  ...rest
}) => {
  const userDetails = useAuthState();
  return (
    <Route
      path={path}
      render={(props) => (
        <SecuredRoute
          component={Component}
          isPrivate={isPrivate}
          title={title}
          {...props}
        />
      )}
      {...rest}
    />
  );
};

export default AppRoutes;
