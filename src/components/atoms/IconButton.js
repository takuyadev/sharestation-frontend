
function IconButton({ onClick, icon }) {
  return (
    <button
      onClick={onClick}
      className="p-4 rounded-full bg-black/20 backdrop-blur-sm duration-100 hover:bg-black/75 hover:text-white focus:outline-none"
    >
      {icon && icon}
    </button>
  );
}

IconButton.defaultProps = {
  onClick: () => console.log("Clicked!")
};

export default IconButton;
