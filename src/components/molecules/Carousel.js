import Image from "../atoms/Image";
import StepIndicator from "../atoms/StepIndicator";

function Carousel({ imgs }) {
  const RenderImages = imgs.map(img => {
    return <Image url={img} />;
  });

  const RenderDots = imgs.map(dot => {
    return <StepIndicator />;
  });

  return (
    <div className="relative first-letter:flex flex-col gap-6 justify-center align-center w-full overflow-scroll">
      <div className="flex gap-8 ">{RenderImages}</div>
      <div className="fixed right-1/2 flex gap-8 justify-center ">{RenderDots}</div>
    </div>
  );
}

Carousel.defaultProps = {
  imgs: [
    "./img/avatar.jpg",
    "./img/avatar.jpg",
    "./img/avatar.jpg",
    "./img/avatar.jpg",
    "./img/avatar.jpg",
    "./img/avatar.jpg",
    "./img/avatar.jpg"
  ]
};

export default Carousel;
