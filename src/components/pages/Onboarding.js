import { useState } from "react";
import Page from "../templates/PageTemplate";
import Landing from "../organisms/Landing";
import UserForm from "../organisms/UserForm";

function Onboarding() {
  const [page, setPage] = useState("onboarding");
  return (
    <Page>
      {page === "onboarding" && <Landing setPage={setPage}/>}
      {page === "userform" && <UserForm />}
    </Page>
  );
}

export default Onboarding;
