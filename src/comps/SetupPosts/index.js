import AppBackImage from "comps/AppBackImage";
import TipsForm from "comps/TipsForm";

const SetupPosts = ({ id, src, liked, text, icon, name}) => {
  return (
    <Container >
      <AppBackImage id={id} liked={liked} text={text} icon={icon} name={name}/>
      <TipsForm src={src}/>
    </Container>
  );
};

SetupPosts.defaultProps = {

};

export default SetupPosts;
