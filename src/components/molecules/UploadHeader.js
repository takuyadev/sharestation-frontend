import Title from "../atoms/Title";
import Avatar from "../atoms/Avatar";
import Subheading from "../atoms/Subheading";

function UploadHeader({title, subheading }) {
  return (
    <header className="flex justify-between">
      <div className="flex flex-col gap-2">
        <Title>
            {title}
        </Title>
        <Subheading>
            {subheading}
        </Subheading>
      </div>
      <Avatar />
    </header>
  );
}

export default UploadHeader;