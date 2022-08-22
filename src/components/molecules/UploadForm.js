import { RndPrimaryBtn } from "../atoms/Buttons";
import TextArea from "../atoms/TextArea";
import { DarkTextField } from "../atoms/TextField";

function UploadForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6">
      <DarkTextField placeholder="Enter title here..."/>
      <TextArea />
      <RndPrimaryBtn>Upload post</RndPrimaryBtn>
    </form>
  );
}

UploadForm.defaultProps = {
  onSubmit: e => e.preventDefault()
};

export default UploadForm;
