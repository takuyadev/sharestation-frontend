
import { BlurredRndContainer } from "../atoms/RoundedContainer";
import LoginForm from "../molecules/LoginForm";
import Tabs from "../molecules/Tabs";

function Login({ user }) {

  return (
    <BlurredRndContainer>
      <Tabs active={false} />
      <LoginForm />
    </BlurredRndContainer>
  );
}

export default Login;
