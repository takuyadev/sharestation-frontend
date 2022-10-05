import { getAuth, signOut } from "firebase/auth";
import IconButton from "../atoms/IconButton";
import { likePost } from "../../modules/handlePosts";
import {
  UilHeart,
  UilAngleRight,
  UilAngleDoubleLeft,
  UilPlus
} from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import { useState } from "react";

const auth = getAuth();

function PostButtons({ nextPost, pid }) {

  const logOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch(error => {
      });
  };

  return (
    <div className="flex justify-between absolute top-0 p-4 w-full z-40">
      <div className="self-start">
        <IconButton onClick={logOut} icon={<UilAngleDoubleLeft />} />
      </div>
      <div className="flex flex-col gap-8 align-center">
        <IconButton onClick={nextPost }icon={<UilAngleRight />} />
        <IconButton onClick={() => likePost(pid, auth.currentUser.uid)} icon={<UilHeart />} />
        <Link to="/upload">
          <IconButton icon={<UilPlus />} />
        </Link>
      </div>
    </div>
  );
}

export default PostButtons;
