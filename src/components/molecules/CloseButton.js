import IconButton from "../atoms/IconButton";
import { UilMultiply } from "@iconscout/react-unicons";

function CloseButton() {
  return (
    <div className="fixed top-4 left-4">
      <IconButton icon={<UilMultiply />}/>
    </div>
  );
}

export default CloseButton;
