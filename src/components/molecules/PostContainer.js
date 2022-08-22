import { FilledRndContainer } from "../atoms/RoundedContainer";
import MinArrow from "../atoms/MinArrow";

function PostContainer({ children, isActive, setIsActive, }) {
  return (
    <div className={`flex w-full justify-center duration-300 ease-in-out opacity-25 ${!isActive && "opacity-100"} hover:opacity-100 ${isActive && "translate-y-1/4"}`}>
      <MinArrow onClick={() => setIsActive(!isActive)} isActive={isActive} />
      <FilledRndContainer>{children}</FilledRndContainer>
    </div>
  );
}

export default PostContainer;
