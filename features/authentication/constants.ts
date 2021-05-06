import firebase from "store/firebase";

// Firebase sign up and sign in go through same UI
// https://github.com/firebase/firebaseui-web/issues/665
// Edit text to distinguish between signin and signup
const providers = [
  {
    id: firebase.auth.EmailAuthProvider.PROVIDER_ID,
    signInLabel: "Sign In with Email",
    signUpLabel: "Sign Up with Email",
  },
  {
    id: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    signInLabel: "Sign in with Google",
    signUpLabel: "Sign up with Google",
  },
];

const commonUIConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // We will display Google and Facebook as auth providers.
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: (authResult, redirectUrl) => {
      return true;
    },
  },
  signInSuccessUrl: "/teacher",
};

export const signInConfig = {
  ...commonUIConfig,
  signInOptions: providers.map((provider) => ({
    provider: provider.id,
    fullLabel: provider.signInLabel,
  })),
};

export const signUpConfig = {
  ...commonUIConfig,
  signInOptions: providers.map((provider) => ({
    provider: provider.id,
    fullLabel: provider.signUpLabel,
  })),
};
