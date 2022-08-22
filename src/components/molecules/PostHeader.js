import Title from "../atoms/Title";
import Likes from "../atoms/Likes";
import Avatar from "../atoms/Avatar";

function PostHeader({title, likes }) {
  return (
    <header className="flex justify-between">
      <div className="flex flex-col gap-2">
        <Title>
            {title}
        </Title>
        <Likes amount={likes}/>
      </div>
      <Avatar />
    </header>
  );
}

export default PostHeader;
