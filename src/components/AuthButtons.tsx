import React from "react";
import { Button, Box } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      sx={{ backgroundColor: 'primary.light', mx: '12px' }}
      variant="contained"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </Button>
  );
};

const SignUpButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      sx={{ mx: '12px' }}
      color="secondary"
      variant="contained"
      onClick={() => loginWithRedirect({ authorizationParams: { screen_hint: 'signup' }})}
    >
      Sign Up
    </Button>
  );
};

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button
      color="secondary"
      variant="contained"
      onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
    >
      Log Out
    </Button>
  );
};

const AuthButtons = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
      {isAuthenticated ? (
        <LogoutButton />
      ) : (
        <>
          <LoginButton />
          <SignUpButton />
        </>
      )}
    </Box>
  );
};

export default AuthButtons;