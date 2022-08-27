function Image({ url }) {
  return <img className="w-48 h-48 object-cover rounded-md"src={url} />;
}

Image.defaultProps = {
  url: "./img/avatar.jpg"
};

export default Image;
