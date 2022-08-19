import { SecondaryBtn, BorderBtn } from "./components/Buttons";
import { BlurredRndContainer } from "./components/RoundedContainer";
import { UilFacebookF } from "@iconscout/react-unicons";

function App() {
  return (
    <div className="flex h-screen gap-2 bg-hero bg-cover bg-center">
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
        <BorderBtn>Sign up with email</BorderBtn>
      </BlurredRndContainer>
    </div>
  );
}

export default App;
