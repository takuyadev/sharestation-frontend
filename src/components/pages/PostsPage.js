import Page from "../templates/PageTemplate";
import Post from "../organisms/Post";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function PostsPage({ user, background }) {
  const [post, setPost] = useState({})
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) navigate("/");
  }, [user]);

  return (
    <Page>
      <Post background={background} />
    </Page>
  );
}

export default PostsPage;
