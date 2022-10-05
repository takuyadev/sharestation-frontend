import { useEffect, useState } from "react";
import Description from "../atoms/Description";
import PostButtons from "../molecules/PostButtons";
import PostContainer from "../molecules/PostContainer";
import PostHeader from "../molecules/PostHeader";

function Post({ nextPost, post }) {
  const [isActive, setIsActive] = useState(true);
  const [likes, setLikes] = useState(0)

  useEffect(() => {
    if (post.likes !== undefined) {
      setLikes(post.likes.length)
    }
  }, [post])


  return (
    <>
      <PostButtons pid={post.pid} nextPost={nextPost} />
      <PostContainer isActive={isActive} setIsActive={setIsActive}>
        <PostHeader title={post.title} likes={likes} />
        <Description>{post.description}</Description>
      </PostContainer>
    </>
  );
}

export default Post;
