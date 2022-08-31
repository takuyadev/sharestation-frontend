// Breaking Atomic System rule due to conveluting the process; to simple of a page
// ...to justify breaking it down even further.

import { PrimaryBtn, SecondaryBtn } from "../atoms/Buttons";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider
} from "firebase/auth";
import { UilGoogle } from "@iconscout/react-unicons";
import { LightTextField } from "../atoms/TextField";
import TextDivider from "./TextDivider";
import { useState } from "react";
import { app } from "../../firebase.config";
import { logIn, googleLogin } from "../../modules/handleAuth";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(app);

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          logIn(auth, email, password);
        }}
        className="flex flex-col gap-8 justify-center align-center"
      >
        <LightTextField
          onChange={e => setEmail(e.target.value)}
          type="email"
          required={true}
          placeholder="Email"
        />
        <LightTextField
          onChange={e => setPassword(e.target.value)}
          type="password"
          required={true}
          placeholder="Password"
        />
        <PrimaryBtn type="submit">Login</PrimaryBtn>
        <TextDivider>or</TextDivider>
      </form>
      <SecondaryBtn onClick={() => googleLogin(auth)}>
        <UilGoogle /> Continue with Google
      </SecondaryBtn>
    </>
  );
}

LoginForm.defaultProps = {
  onSubmit: e => e.preventDefault(),
  showName: false
};

export default LoginForm;
