import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AppBackImage from "comps/AppBackImage";
import TipsForm from "comps/TipsForm";
import SmallBtn from "comps/Buttons/SmallBtn";
import { Link } from "react-router-dom";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content:sp;
  /* background-size: contain; */
  /* z-index: 0; */
  background-color: #dad;
`;
const ImgCont = styled.div`
`

const BtnCont = styled.div`
  margin: 40px 0 0 20px;
  opacity: 0.5;
  z-index: 2;
  :hover {
    opacity: 1;
  }
`;

const FeedPage = ({}) => {
  const [posts, setPosts] = useState([]);
  const [array, setArray] = useState(0);
  const [liked, setLiked] = useState(0);
  const GetPosts = async () => {
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
    // console.log(resp)
    console.log(resp.data.posts[array]);
    setPosts(resp.data.posts[array]);
    setLiked(resp.data.posts[array].likeStatus);
    console.log(liked);
  };

  const LikePost = async () => {
    // var resp = await axios.get('https://sharestation.herokuapp.com/api/posts')
    //console.log(resp, "img", resp.data.Photo_url, "desc", resp.data.description)
    var token = await sessionStorage.getItem("token");
    var id = await sessionStorage.getItem("id");
    console.log("token:" + id + " id:" + posts.id);
    if (liked === 0) {
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
    } else if (liked === 1) {
      var resp2 = await axios.delete(
        "https://sharestation.herokuapp.com/api/like",
        {
          data: {
            user_id: id,
            post_id: posts.id,
          },
        }
      );
    }
    GetPosts();
  };

  const HandleClick = async () => {
    await setArray(array + 1);
    console.log(array);
    GetPosts();
  };

  useEffect(() => {
    GetPosts();
  }, []);

  return (
    <Container>
      {/* <Link to="/">
        <BtnCont>
          <SmallBtn icon="icons/icon8.png" />
        </BtnCont>
      </Link> */}
<ImgCont>
      <AppBackImage src={posts.photo_url} />
      </ImgCont>
      <TipsForm
        onChange={HandleClick}
        onLike={LikePost}
        id={posts.email}
        text={posts.description}
        liked={posts.likes}
        btnLiked={liked}
      />
    </Container>
  );
};

FeedPage.defaultProps = {};

export default FeedPage;
