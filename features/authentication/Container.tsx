// Import FirebaseAuth and firebase.
import React, { useEffect, useState } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "store/firebase";
import { signInConfig, signUpConfig } from "features/authentication/constants";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

type Props = {
  type: "SIGN_IN" | "SIGN_UP";
};

function AuthenticationContainer({ type }: Props) {
  // Local signed-in state - null represents not known yet if user is true or false
  const [isSignedIn, setIsSignedIn] = useState(null);
  const router = useRouter();

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        setIsSignedIn(Boolean(user));
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  useEffect(() => {
    if (isSignedIn) {
      router.push("/teacher");
    }
  }, [isSignedIn]);

  if (isSignedIn === null) {
    return <div>Loading...</div>;
  }
  if (!isSignedIn) {
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
