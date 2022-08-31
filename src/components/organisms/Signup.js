import { BlurredRndContainer } from "../atoms/RoundedContainer";
import SignupForm from "../molecules/SignupForm";
import Tabs from "../molecules/Tabs";

function Signup() {
  return (
    <BlurredRndContainer>
      <Tabs active={true}/>
      <SignupForm showName={true}></SignupForm>
    </BlurredRndContainer>
  );
}

export default Signup;
