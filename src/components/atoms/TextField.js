// Base styles for every button, only edit this for large scale changes.
function BaseTextField({ onChange, placeholder, value, style }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value && value}
      onChange={onChange}
      className={`pr-4 py-2 bg-transparent border-b-2 ${style && style} focus:outline-none`}
    />
  );
}

BaseTextField.defaultProps = {
  onChange: e => console.log(e.target.value),
  placeholder: "Default Placeholder..."
};

//Variations of the BaseTextField
function LightTextField({ onChange, placeholder, value }) {
  return (
    <BaseTextField
      placeholder={placeholder}
      value={value && value}
      onChange={onChange}
      style={`border-white text-white placeholder:text-white/25`}
    />
  );
}

function DarkTextField({ onChange, placeholder, value }) {
  return (
    <BaseTextField
      placeholder={placeholder}
      value={value && value}
      onChange={onChange}
      style={`text-black border-slate-300 placeholder:text-black/25`}
    />
  );
}

export { LightTextField, DarkTextField };
