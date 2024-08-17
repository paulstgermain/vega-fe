import { withAuthenticationRequired } from "@auth0/auth0-react";
import React from "react";
import Loading from "./Loading";

export const AuthenticationGuard: React.FC<{ component: React.FC }> = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div>
        <Loading />
      </div>
    ),
  });

  return <Component />;
};