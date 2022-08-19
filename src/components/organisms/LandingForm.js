import { SecondaryBtn, BorderBtn } from "../atoms/Buttons";
import { BlurredRndContainer } from "../atoms/RoundedContainer";
import TextDivider from "../molecules/TextDivider";
import { UilFacebookF } from "@iconscout/react-unicons";

// Breaking Atomic System rule due to conveluting the process; to simple of a page
// ...to justify breaking it down even further.

function LandingForm() {
  return (
    <BlurredRndContainer>
      <h1 className="text-2xl text-white font-bold text-center">
        Share your station.
      </h1>
      <SecondaryBtn>
        <UilFacebookF /> Continue with Facebook
      </SecondaryBtn>
      <SecondaryBtn>
        <UilFacebookF /> Continue with Email.
      </SecondaryBtn>
      <TextDivider>or</TextDivider>
      <BorderBtn>Sign up with email</BorderBtn>
    </BlurredRndContainer>
  );
}

export default LandingForm;
