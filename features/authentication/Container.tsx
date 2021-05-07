// Import FirebaseAuth and firebase.
import React, { useEffect, useState } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { signInConfig, signUpConfig } from "features/authentication/constants";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import firebase from "store/auth/firebase";
import { useAuth } from "store/auth/useAuth";

type Props = {
  type: "SIGN_IN" | "SIGN_UP";
};

function AuthenticationContainer({ type }: Props) {
  const { hasLoadedUser, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/teacher");
    }
  }, [user]);

  if (!hasLoadedUser) {
    return <div>Loading...</div>;
  }
  if (!user) {
    return (
      <Box>
        <Heading textAlign="center">
          {type === "SIGN_IN" ? "Sign In" : "Sign Up"}
        </Heading>
        <StyledFirebaseAuth
          uiConfig={type === "SIGN_IN" ? signInConfig : signUpConfig}
          firebaseAuth={firebase.auth()}
        />
      </Box>
    );
  }
  return null;
}

export default AuthenticationContainer;
