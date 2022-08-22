import IconButton from "../atoms/IconButton";
import {
  UilHeart,
  UilAngleRight,
  UilAngleDoubleLeft,
  UilPlus
} from "@iconscout/react-unicons";

function PostButtons() {
  return (
    <div className="flex justify-between absolute top-0 p-4 w-full z-50">
      <div className="self-start">
       <IconButton icon={<UilAngleDoubleLeft />} />
      </div>
      <div className="flex flex-col gap-8 align-center">
        <IconButton icon={<UilAngleRight />} />
        <IconButton icon={<UilHeart />} />
        <IconButton icon={<UilPlus />} />
      </div>
    </div>
  );
}

export default PostButtons;
