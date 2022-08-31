import Page from "../templates/PageTemplate";
import Login from "../organisms/Login";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage({ user }) {

  const navigate = useNavigate();
  useEffect(() => {
    if (user) navigate("/posts");
  }, [user]);

  return (
    <Page>
      <Login />
    </Page>
  );
}

export default LoginPage;
