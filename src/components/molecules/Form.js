// Breaking Atomic System rule due to conveluting the process; to simple of a page
// ...to justify breaking it down even further.

import { PrimaryBtn, SecondaryBtn } from "../atoms/Buttons";
import { UilFacebookF } from "@iconscout/react-unicons";
import { LightTextField } from "../atoms/TextField";
import TextDivider from "./TextDivider";
import { Link } from "react-router-dom";

function Form({ onSubmit }) {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-8 justify-center align-center"
    >
      <LightTextField placeholder="Email" />
      <LightTextField placeholder="Password" />
      <LightTextField placeholder="Full Name" />
      <PrimaryBtn>Sign up</PrimaryBtn>
      <TextDivider>or</TextDivider>
      <Link to="/posts">
        <SecondaryBtn>
          {" "}
          <UilFacebookF /> Continue with Facebook
        </SecondaryBtn>
      </Link>
    </form>
  );
}

Form.defaultProps = {
  onSubmit: e => e.preventDefault()
};

export default Form;
