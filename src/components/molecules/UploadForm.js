import { RndPrimaryBtn } from "../atoms/Buttons";
import TextArea from "../atoms/TextArea";
import { DarkTextField } from "../atoms/TextField";
import { uploadPost } from "../../modules/handlePosts";

function UploadForm({ setPost, setFile, post, file }) {

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        uploadPost(post, file);
      }}
      className="flex flex-col gap-6"
    >
      <input
        onChange={e => {
          setFile(e.target.files[0]);
        }}
        multiple
        accept="image/*"
        type="file"
      />
      <DarkTextField
        onChange={e =>
          setPost(prevValue => ({
            ...prevValue,
            title: e.target.value
          }))
        }
        placeholder="Enter title here..."
      />
      <TextArea
        onChange={e =>
          setPost(prevValue => ({
            ...prevValue,
            description: e.target.value
          }))
        }
      />
      <RndPrimaryBtn type="submit">Upload post</RndPrimaryBtn>
    </form>
  );
}

UploadForm.defaultProps = {
  onSubmit: e => e.preventDefault()
};

export default UploadForm;
