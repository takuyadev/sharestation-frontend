import { useState } from "react";
import { BlurredRndContainer } from "../atoms/RoundedContainer";
import Form from "../molecules/Form";
import Tabs from "../molecules/Tabs";

function UserForm() {
  return (
    <BlurredRndContainer>
      <Tabs />
      <Form></Form>
    </BlurredRndContainer>
  );
}

export default UserForm;
