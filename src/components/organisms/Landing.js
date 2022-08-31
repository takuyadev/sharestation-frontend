import { SecondaryBtn, BorderBtn } from "../atoms/Buttons";
import { BlurredRndContainer } from "../atoms/RoundedContainer";
import TextDivider from "../molecules/TextDivider";
import { NavLink } from "react-router-dom";

// Breaking Atomic System rule due to conveluting the process; to simple of a page
// ...to justify breaking it down even further.

function Landing() {
  return (
    <BlurredRndContainer>
      <h1 className="text-2xl text-white font-bold text-center">
        Share your station.
      </h1>
      <NavLink className="flex flex-col" to="/login">
        <SecondaryBtn>Login</SecondaryBtn>
      </NavLink>
      <TextDivider>or</TextDivider>
      <NavLink className="flex flex-col" to="/signup">
        <BorderBtn>Sign up</BorderBtn>
      </NavLink>
    </BlurredRndContainer>
  );
}

export default Landing;
