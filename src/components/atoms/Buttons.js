// Base styles for every button, only edit this for large scale changes.
function BaseBtn({ children, type, onClick, style }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`flex flex-row gap-2 px-4 py-3 pointer ease-in-out duration-100 focus:outline-none ${style &&
        style} justify-center`}
    >
      {children}
    </button>
  );
}

BaseBtn.defaultProps = {
  children: "Default",
  type: "button",
  onClick: () => console.log("Clicked!")
};

//Variations of the BaseButtons
function PrimaryBtn({ children, type, onClick }) {
  return (
    <BaseBtn
      onClick={onClick}
      type={type}
      style={`rounded-lg bg-indigo-600 text-white hover:bg-indigo-900 `}
    >
      {children}
    </BaseBtn>
  );
}

function SecondaryBtn({ children, type, onClick }) {
  return (
    <BaseBtn
      onClick={onClick}
      type={type}
      style={`rounded-lg bg-white text-black hover:bg-slate-600 hover:text-white`}
    >
      {children}
    </BaseBtn>
  );
}

function BorderBtn({ children, type, onClick }) {
  return (
    <BaseBtn
      onClick={onClick}
      type={type}
      style={`rounded-lg border-2 border-white text-white hover:bg-white/50 hover:text-black`}
    >
      {children}
    </BaseBtn>
  );
}

function RndPrimaryBtn({ children, type, onClick }) {
  return (
    <BaseBtn
      onClick={onClick}
      type={type}
      style={`rounded-full bg-indigo-600 text-white hover:bg-indigo-900`}
    >
      {children}
    </BaseBtn>
  );
}

export { PrimaryBtn, SecondaryBtn, RndPrimaryBtn, BorderBtn };
