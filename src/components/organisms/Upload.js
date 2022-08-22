// Breaking Atomic System rule due to conveluting the process; to simple of a page
// ...to justify breaking it down even further.
import UploadHeader from "../molecules/UploadHeader";
import UploadForm from "../molecules/UploadForm";
import Carousel from "../molecules/Carousel";
import { FilledRndContainer } from "../atoms/RoundedContainer";

function Upload() {
  return (
    <div>
      <Carousel />
      <FilledRndContainer>
        <UploadHeader />
        <UploadForm />
      </FilledRndContainer>
    </div>
  );
}

export default Upload;
