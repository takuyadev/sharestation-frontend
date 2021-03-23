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
  background-size:cover;
  z-index: 1; 
  background-color: #111;
`;
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
  const [array, setArray] = useState(0)


  const GetPosts = async () => {
    // var resp = await axios.get('https://sharestation.herokuapp.com/api/posts')
    //console.log(resp, "img", resp.data.Photo_url, "desc", resp.data.description)
    var token = await sessionStorage.getItem("token");
    var resp = await axios.get("https://sharestation.herokuapp.com/api/posts", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // var resp = await axios.get(' https://sharestation.herokuapp.com/api/posts')
    // console.log(resp)
    console.log(resp.data.posts[array]);
    setPosts(resp.data.posts[array]);
  };

  const HandleClick = () => {
    setArray(array + 1)
    console.log(array);
    GetPosts();
  };

  useEffect(() => {
    GetPosts();
  }, []);

  return (
    <Container>

      <Link to="/">
        <BtnCont>
          <SmallBtn icon="icons/icon8.png" />
        </BtnCont>
      </Link>

      <AppBackImage src={posts.photo_url} />
      <TipsForm onChange={HandleClick} text={posts.description}  />
    </Container>
  );
};

FeedPage.defaultProps = {};

export default FeedPage;
