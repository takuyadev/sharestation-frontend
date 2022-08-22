function Description({ children }) {
  return <p>{children}</p>;
}

Description.defaultProps = {
  children: "Default Description"
};

export default Description;
