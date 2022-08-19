function TextField({ onChange, placeholder, value}) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value && value}
      onChange={onChange}
      className="px-4 py-2 bg-transparent border-b-2 border-white focus:outline-none placeholder:text-white"
    />
  );
}

TextField.defaultProps = {
    onChange: (e) => console.log(e.target.value),
    placeholder: "Default Placeholder..."
}

export default TextField;
