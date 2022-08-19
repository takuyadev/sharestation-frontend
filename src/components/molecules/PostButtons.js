import IconButton from "../atoms/IconButton";
import {
  UilHeart,
  UilAngleRight,
  UilAngleDoubleLeft,
  UilPlus
} from "@iconscout/react-unicons";

function PostButtons() {
  return (
    <div className="flex justify-between absolute top-0 w-full p-4">
      <UilAngleDoubleLeft />
      <div className="flex flex-col gap-8 align-center">
        <IconButton icon={<UilAngleRight />} />
        <IconButton icon={<UilHeart />} />
        <IconButton icon={<UilPlus />} />
      </div>
    </div>
  );
}

export default PostButtons;
