import { useState } from "react";
import Page from "../templates/PageTemplate";
import Upload from "../organisms/Upload";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getDatabase } from "firebase/database";
import { app } from "../../firebase.config";

function UploadPage({ user }) {
  const [users, setUsers] = useState({
    img: [],
    title: "description",
    description: "description",
    username: "username",
    likes: [
      ""
    ]
  });

  const database = getDatabase(app);
  const navigate = useNavigate();
  
  useEffect(() => {
    console.log(user)
    if (!user) navigate("/");
  }, [user]);

  return (
    <Page background="bg-black">
      <Upload setUsers={setUsers}/>
    </Page>
  );
}

export default UploadPage;
