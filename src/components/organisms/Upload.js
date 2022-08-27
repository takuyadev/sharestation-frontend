// Breaking Atomic System rule due to conveluting the process; to simple of a page
// ...to justify breaking it down even further.
import UploadHeader from "../molecules/UploadHeader";
import UploadForm from "../molecules/UploadForm";
import Carousel from "../molecules/Carousel";
import CloseButton from "../molecules/CloseButton";
import { FilledRndContainer } from "../atoms/RoundedContainer";
import { Link } from 'react-router-dom'

function Upload({ imgs }) {
  return (
    <div className="flex flex-col w-full">
      <CloseButton />
      <div className="mt-40">
        <Carousel imgs={imgs} />
      </div>
      <FilledRndContainer>
        <UploadHeader />
        <UploadForm />
      </FilledRndContainer>
    </div>
  );
}

export default Upload;
