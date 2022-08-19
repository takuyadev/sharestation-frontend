import Divider from "../atoms/Divider";

function TextDivider({ children }) {
  return (
    <div className="flex gap-2 items-center justify-between">
      <Divider />
      <p className="text-white">{children}</p>
      <Divider />
    </div>
  );
}

TextDivider.defaultProps = {
  children: "Default"
};

export default TextDivider;
