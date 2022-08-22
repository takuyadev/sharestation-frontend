import { UilHeart } from "@iconscout/react-unicons";

function Likes({ amount }) {
  return (
    <div className="flex gap-2 text-red-500 rounded-full">
      <UilHeart />
      <p>{amount}</p>
    </div>
  );
}

Likes.defaultProps = {
  amount: 1400
};

export default Likes;
