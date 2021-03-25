import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AppBackImage from "comps/AppBackImage";
import TipsForm from "comps/TipsForm";
import SmallBtn from "comps/Buttons/SmallBtn";
import { Link } from "react-router-dom";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  height: 896px;
  display: flex;
  flex-direction: column;
  background-size: cover;
  z-index: 1;
  background-color: #111;
`;
const BtnCont = styled.div`
  margin: 40px 0 0 20px;
  opacity: 0.5;
  z-index: 5;
  :hover {
    opacity: 1;
  }
`;

const FeedPage = ({}) => {
  const [posts, setPosts] = useState([]);
  const [array, setArray] = useState(0);
  const [like, setLike] = useState(0);

  const LikePost = async () => {
    // var resp = await axios.get('https://sharestation.herokuapp.com/api/posts')
    //console.log(resp, "img", resp.data.Photo_url, "desc", resp.data.description)
    console.log("initiate like")
    var token = await sessionStorage.getItem("token");
    var id = await sessionStorage.getItem("id");
    if (like === 0) {
      console.log("like = 0")
      var resp1 = await axios.post(
        "https://sharestation.herokuapp.com/api/like",
        {
          user_id: id,
          post_id: posts.id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setLike(1);
      console.log("like " + like);
    } else if (like === 1) {
      console.log("like = 1")
      var resp2 = await axios.delete(
        "https://sharestation.herokuapp.com/api/like",
        {
          data: {
            user_id: id,
            post_id: posts.id,
          },
        }
      );
      setLike(0);
      console.log("dislike " + like);
    }
  };

  const GetPosts = async () => {
    console.log("get posts");
    // var resp = await axios.get('https://sharestation.herokuapp.com/api/posts')
    //console.log(resp, "img", resp.data.Photo_url, "desc", resp.data.description)
    var token = await sessionStorage.getItem("token");
    var id = await sessionStorage.getItem("id");
    var resp = await axios.post(
      "https://sharestation.herokuapp.com/api/getposts",
      {
        user_id: id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // var resp = await axios.get(' https://sharestation.herokuapp.com/api/posts')
    console.log("update array" );
    console.log("array " + array)
    console.log(resp.data)
    setPosts(resp.data.posts[array]);
    console.log("update like: " + resp.data.posts[array].likeStatus);
    setLike(resp.data.posts[array].likeStatus);
  };

  const HandleNext = async () => {
    setArray(array + 1);
  };

  useEffect(() => {
    GetPosts();
  }, [array, like]);

  return (
    <Container>
      <AppBackImage src={posts.photo_url} />
      <Link to="/">
        <BtnCont>
          <SmallBtn icon="icons/icon8.png" />
        </BtnCont>
      </Link>
      <TipsForm
        onChange={HandleNext}
        onLike={LikePost}
        id={posts.email}
        text={posts.description}
        liked={posts.likes}
        btnLiked={like}
      />
    </Container>
  );
};

FeedPage.defaultProps = {};

export default FeedPage;
