import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import routes from "./routes/routes.js";
import { AuthProvider } from "./context/authContext";
import AppRoute from "./routes/AppRoute";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Switch>
            {routes.map((route) => (
              <AppRoute
                key={route.path}
                path={route.path}
                component={route.component}
                isPrivate={route.isPrivate}
                title={route.title}
              />
            ))}
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
