// Base styles for every button, only edit this for large scale changes.
function BaseTextField({
  onChange,
  required,
  type,
  placeholder,
  value,
  style
}) {
  return (
    <input
      type={type}
      required={required}
      placeholder={placeholder}
      value={value && value}
      onChange={onChange}
      className={`pr-4 py-2 bg-transparent border-b-2 ${style &&
        style} focus:outline-none default:border-green-500`}
    />
  );
}

BaseTextField.defaultProps = {
  type: "text",
  required: true,
  onChange: e => console.log(e.target.value),
  placeholder: "Default Placeholder..."
};

//Variations of the BaseTextField
function LightTextField({ onChange, required, placeholder, value, type }) {
  return (
    <BaseTextField
      type={type}
      required={required}
      placeholder={placeholder}
      value={value && value}
      onChange={onChange}
      style={`border-white text-white placeholder:text-white/25`}
    />
  );
}

function DarkTextField({ onChange, required, placeholder, value, type }) {
  return (
    <BaseTextField
      type={type}
      required={required}
      placeholder={placeholder}
      value={value && value}
      onChange={onChange}
      style={`text-black border-slate-300 placeholder:text-black/25`}
    />
  );
}

export { LightTextField, DarkTextField };
