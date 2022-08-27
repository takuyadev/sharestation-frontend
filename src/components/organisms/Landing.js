import { SecondaryBtn, BorderBtn } from "../atoms/Buttons";
import { BlurredRndContainer } from "../atoms/RoundedContainer";
import TextDivider from "../molecules/TextDivider";
import { Link } from "react-router-dom";

// Breaking Atomic System rule due to conveluting the process; to simple of a page
// ...to justify breaking it down even further.

function Landing({ setPage }) {

  function changePage() {
    setPage("userform");
    console.log("clicked")
  }

  return (
    <BlurredRndContainer>
      <h1 className="text-2xl text-white font-bold text-center">
        Share your station.
      </h1>
      <SecondaryBtn onClick={changePage}>Login</SecondaryBtn>
      <TextDivider>or</TextDivider>
      <BorderBtn onClick={changePage}>Sign up</BorderBtn>
    </BlurredRndContainer>
  );
}

export default Landing;
