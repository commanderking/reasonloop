// Import FirebaseAuth and firebase.
import React, { useEffect, useState } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { signInConfig, signUpConfig } from "features/authentication/constants";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import firebase from "store/auth/firebase";
import { useAuth } from "store/auth/store";

type Props = {
  type: "SIGN_IN" | "SIGN_UP";
};

function AuthenticationContainer({ type }: Props) {
  const auth = useAuth();
  const { isLoadingUser, user } = auth;
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/teacher");
    }
  }, [user]);

  if (isLoadingUser) {
    return <div>Loading...</div>;
  }
  if (!user) {
    return (
      <Box>
        <Heading>My App</Heading>
        <Text>Please sign-in:</Text>
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
