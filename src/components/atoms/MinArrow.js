import { UilAngleDown } from "@iconscout/react-unicons";

function MinArrow({ onClick, isActive }) {
  return (
    <UilAngleDown
      onClick={onClick}
      className={`${isActive &&
        "rotate-180"} cursor-pointer ease-in-out duration-200 hover:translate-y-[-4px] self-center mb-16 z-50`}
    />
  );
}

MinArrow.defaultProps = {
  onClick: () => console.log("Clicked!"),
  isActive: false
};

export default MinArrow;
