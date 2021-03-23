import AppBackImage from "comps/AppBackImage";
import TipsForm from "comps/TipsForm";

const PreviewForm = ({ id, liked, text, icon, name, expand }) => {
  return (
    <Container liked={}>
      <AppBackImage />
      <TipsForm />
    </Container>
  );
};

PreviewForm.defaultProps = {
  id: "Rinahan4146",
  liked: "1.4 liked",
  // icon: 'icons/icon6.png',
  text:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  onExpand: () => {},
};

export default PreviewForm;
