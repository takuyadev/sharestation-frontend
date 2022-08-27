import { useState } from "react";
import Description from "../atoms/Description";
import PostButtons from "../molecules/PostButtons";
import PostContainer from "../molecules/PostContainer";
import PostHeader from "../molecules/PostHeader";

function Post({ description, title, likes }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <PostButtons />
      <PostContainer isActive={isActive} setIsActive={setIsActive}>
        <PostHeader title={title} likes={likes} />
        <Description>{description}</Description>
      </PostContainer>
    </>
  );
}

export default Post;
