import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Page from "../templates/PageTemplate";
import Post from "../organisms/Post";
import { db } from "../../firebase.config";
import { collection, query, startAfter, limit, getDocs, orderBy } from "firebase/firestore";

function PostsPage({ user, background }) {
  const [post, setPost] = useState({});
  const [position, setPosition] = useState(null);
  const [image, setImage] = useState("/img/home..jpg")
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/");
  }, [user]);

  const nextPost = async () => {
    const nextQuery = query(collection(db, "posts"), orderBy("creationDate"), startAfter(position), limit(1));
    const data = await getDocs(nextQuery)
    setPosition(data.docs[data.docs.length - 1])
    data.forEach(doc => {
      const data = doc.data()
      setPost(data)
      setImage(data.image)
    })
  }

  useEffect(() => {
    const unsub = async () => {
      const firstQuery = query(collection(db, "posts"), orderBy("creationDate"), limit(1));
      const data = await getDocs(firstQuery)
      setPosition(data.docs[data.docs.length - 1])
      data.forEach(doc => {
        const data = doc.data()
        setPost(data)
        setImage(data.image)
      })
    }
    return unsub
  }, [])


  
  return (
    <Page background={image}>
      {post && <Post post={post} nextPost={nextPost} background={background} />}
    </Page>
  );
}

export default PostsPage;
