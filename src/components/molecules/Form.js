// Breaking Atomic System rule due to conveluting the process; to simple of a page
// ...to justify breaking it down even further.

import { PrimaryBtn, SecondaryBtn } from "../atoms/Buttons";
import { UilFacebookF } from "@iconscout/react-unicons";
import TextField from "../atoms/TextField";
import TextDivider from "./TextDivider";

function Form({onSubmit}) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-8 justify-center align-center">
      <TextField placeholder="Email" />
      <TextField placeholder="Password" />
      <TextField placeholder="Full Name" />
      <PrimaryBtn>Sign up</PrimaryBtn>
      <TextDivider>or</TextDivider>
      <SecondaryBtn>
        {" "}
        <UilFacebookF /> Continue with Facebook
      </SecondaryBtn>
    </form>
  );
}

Form.defaultProps = {
  onSubmit: (e) => e.preventDefault()
};

export default Form;
