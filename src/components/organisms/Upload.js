// Breaking Atomic System rule due to conveluting the process; to simple of a page
// ...to justify breaking it down even further.
import UploadHeader from "../molecules/UploadHeader";
import UploadForm from "../molecules/UploadForm";
import Carousel from "../molecules/Carousel";
import CloseButton from "../molecules/CloseButton";
import { FilledRndContainer } from "../atoms/RoundedContainer";
import { Link } from "react-router-dom";
import { useState } from "react";

function Upload({ setUsers }) {
  const [post, setPost] = useState({});
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState(null);

  if (file) {
    const reader = new FileReader();
    reader.onload = e => {
      setUrl(e.target.result);
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className="flex flex-col w-full">
      <Link to="/posts">
        <CloseButton />
      </Link>
      <div className="mt-40">
        <Carousel imgs={[url]} />
      </div>
      <FilledRndContainer>
        <UploadHeader
          title="Upload your station"
          subheading="Enter your information below"
        />
        <UploadForm
          setUsers={setUsers}
          post={post}
          file={file}
          setFile={setFile}
          setPost={setPost}
        />
      </FilledRndContainer>
    </div>
  );
}

export default Upload;
