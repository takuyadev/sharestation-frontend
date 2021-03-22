import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SmallBtn from "comps/Buttons/SmallBtn";
import Header from "comps/Header";
import UploadForm from "comps/UploadForm";
import PostTipsForm from "comps/PostTipsForm";
import PostImgForm from "comps/PostImgForm";
import Message from "comps/Message";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 896px;
  display: flex;
  flex-direction: column;
  background: #111;
`;
const BtnCont = styled.div`
  margin: 40px 0 0 20px;
  opacity: 0.5;
  :hover {
    opacity: 1;
  }
`;
const ResultCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const CustomerPhoto = styled.img`
  width: 50%;
  height: auto;
  object-fit: cover;
`;
const HeaderCont = styled.div`
  width: 70%;
  padding: 30px 0;
  margin: 0 auto 0;
  display: flex;
`;
const PhotoHead = styled.div`
  margin: auto;
  display: ${(props) => (props.expanded ? "flex" : "none")};
`;
const TipsHead = styled.div`
  display: ${(props) => (props.expanded ? "none" : "flex")};
`;
const PIFCont = styled.div`
  display: ${(props) => (props.expanded ? "flex" : "none")};
`;
const PTFCont = styled.div`
  display: ${(props) => (props.expanded ? "none" : "flex")};
`;

const PostPage = (expand) => {
  const params = useParams();
  const history = useHistory();
  const [expanded, setExpanded] = useState(true);
  const [msgs, setMsgs] = useState([]);
  const [file, setFile] = useState(null);
  // const [imgurl, setImgurl] = useState(null)
  const [desc, setDesc] = useState(null);

  const CheckStorage = async () => {
    var token = await sessionStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = token;
      var resp = await axios.get(
        "https://sharestation.herokuapp.com/api/verify"
      );
      console.log("verification", resp.data);
      if (resp.data === "expired") {
        // setShow(false)
        history.push("/FeedPage");
      } else {
        GetMsgs();
      }
    }
  };

  const HandleUpload = async (file, desc, photo, msg) => {
    console.log(file, desc, photo, msg);
    //var resp = axios post to upload images with /api/images
    //{image:file}
    //console.log(resp.data) to see if there is a linke for the uploaded image
    //var imgurl = resp.data.pathname

    //console.log(imgurl)
    var token = await sessionStorage.getItem("token");
    const formData = new FormData();
    formData.append("image", file);
    formData.append("description", desc);
    var resp = await axios.post(
      "https://sharestation.herokuapp.com/api/images",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form--data",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    //photo_url will use the resp.data link if its there
    console.log("create", resp.data);

    return false;
    // var resp = await axios.post(
    //   'https://sharestation.herokuapp.com/api/posts',
    //   { photo_url: file, description: desc }
    //   //photo_url will use the resp.data link if its there
    // )
    // console.log('create', resp)

    // GetMsgs()
  };

  const GetMsgs = async () => {
    var token = await sessionStorage.getItem("token");
    var resp = await axios.get("https://sharestation.herokuapp.com/api/posts", {
      headers: {
        Authorization: `Bearer ${token}`
      },
    });
    // console.log(resp, 'img link', resp.data.message, 'status', resp.data.status)
    console.log("get file", resp);
    // setImgurl(resp.data.message)
    // setDesc(resp.data.status)
    setMsgs(resp.data);
  };

  useEffect(() => {
    //setExpanded(expand)
  }, [expand]);

  useEffect(() => {
    GetMsgs();
    // CheckStorage()
  }, []);

  return (
    <Container>
      <Link to="/FeedPage">
        <BtnCont>
          <SmallBtn icon="icons/icon9.png" />
        </BtnCont>
      </Link>

      <HeaderCont>
        <PhotoHead expanded={expanded}>
          <Header title="Upload" state="Share your own work station" />
          {/* <Header
            title='Preview'
            state='Select a photo that describes your work station best and tell us about it'
          /> */}
        </PhotoHead>
        {/* <TipsHead expanded={expanded}>
          <Header title='Tips' state='Add tips to your selected photo' />
        </TipsHead> */}
      </HeaderCont>
      <Message />

      <ResultCont>
        {/* <CustomerPhoto src={img} /> */}
        <Message
          // desc={desc} imgurl={imgurl}
          msgs={msgs}
        />
      </ResultCont>

      <PIFCont expanded={expanded}>
        <UploadForm onButton={HandleUpload} />
        {/* <PostImgForm
          onBtnClick={() => {
            setExpanded(!expanded)
          }} 
        /> */}
      </PIFCont>
      {/* <PTFCont expanded={expanded}>
        <PostTipsForm tips='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' />
      </PTFCont> */}
    </Container>
  );
};

PostPage.defaultProps = {};

export default PostPage;
