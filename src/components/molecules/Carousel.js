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
    <div className="relative flex flex-col gap-6 items-center w-full overflow-scroll">
      <div className="flex gap-8 ">{RenderImages}</div>
      <div className="fixed flex gap-8 translate-y-52">{RenderDots}</div>
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
    "./img/avatar.jpg",
    "./img/avatar.jpg"
  ]
};

export default Carousel;
