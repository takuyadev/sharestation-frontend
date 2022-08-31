import Page from "../templates/PageTemplate";
import Signup from "../organisms/Signup";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SignupPage({user}) {

  const navigate = useNavigate();
  useEffect(() => {
    console.log(user)
    if (user) navigate("/posts");
  }, [user]);

  return (
    <Page>
      <Signup />
    </Page>
  );
}

export default SignupPage;
