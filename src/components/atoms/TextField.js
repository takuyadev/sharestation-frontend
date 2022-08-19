function TextField({ onChange, placeholder, value}) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value && value}
      onChange={onChange}
      className="pr-4 py-2 bg-transparent border-b-2 border-white focus:outline-none text-white placeholder:text-white/25"
    />
  );
}

TextField.defaultProps = {
    onChange: (e) => console.log(e.target.value),
    placeholder: "Default Placeholder..."
}

export default TextField;
