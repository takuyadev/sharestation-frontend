import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import SmallBtn from 'comps/Buttons/SmallBtn'
import Header from 'comps/Header'
import UploadForm from 'comps/UploadForm'
import PostTipsForm from 'comps/PostTipsForm'
import PostImgForm from 'comps/PostImgForm'
import Message from 'comps/Message'
import axios from 'axios'

const Container = styled.div`
  width: 100%;
  height: 896px;
  display: flex;
  flex-direction: column;
  background: #111;
`
const BtnCont = styled.div`
  margin: 40px 0 0 20px;
  opacity: 0.5;
  :hover {
    opacity: 1;
  }
`
const ResultCont = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content: center;
`
const CustomerPhoto = styled.img`
  width: 50%;
  height: auto;
  object-fit: cover;
`
const HeaderCont = styled.div`
width:60%;
  padding: 30px 0;
  margin: 0 auto 0;
  /* text-align:center; */
  /* display:flex;
  align-items:center;
  justify-items:center; */
`
const PhotoHead = styled.div`
  display: ${(props) => (props.expanded ? 'flex' : 'none')};
`
const TipsHead = styled.div`
  display: ${(props) => (props.expanded ? 'none' : 'flex')};
`
const PIFCont = styled.div`
  display: ${(props) => (props.expanded ? 'flex' : 'none')};
`
const PTFCont = styled.div`
  display: ${(props) => (props.expanded ? 'none' : 'flex')};
`

const PostPage = (expand) => {
  const [expanded, setExpanded] = useState(false)
  const [msgs, setMsgs] = useState([])
  const [img, setImg] = useState(null);
  const [status, setStatus] = useState(null);

  const HandleUpload = async (job, tip, photo) => {
    console.log(job, tip, photo)

    // var resp = await axios.post('https://advdyn2021.herokuapp.com/createmessage'), {userjname:job, message:tip}
    // console.log("create", resp)
  }

  // const GetMsgs = async () => {
  //   var resp = await axios.get('https://advdyn2021.herokuapp.com/allmessages')
  //   console.log("get message", resp.data[0])
  //   setMsgs(resp.data);
  // }

  const GetMsgs = async () => {
    var resp = await axios.get('https://dog.ceo/api/breeds/image/random')
    console.log(resp, "img link", resp.data.message, "status", resp.data.status)
    setImg(resp.data.message);
    setStatus(resp.data.status);
  }

  useEffect(() => {
    setExpanded(expand)
  }, [expand])

  useEffect(() => {
    GetMsgs()
  }, [])

  return (
    <Container>
      <BtnCont>
        <SmallBtn icon='icons/icon9.png' />
      </BtnCont>

      <HeaderCont>
        <PhotoHead expanded={expanded}>
          {/* <Header
            title='Photos'
            state='Select photo describing your work station best'
          /> */}
          <Header
            title='Preview'
            state='Select a photo that describes your work station best and tell us about it'
          />
        </PhotoHead>
        <TipsHead expanded={expanded}>
          <Header title='Tips' state='Add tips to your selected photo' />
        </TipsHead>
      </HeaderCont>

      <ResultCont>
        <CustomerPhoto src={img}/>
        <Message msgs={msgs} status={status}/>
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
  )
}

PostPage.defaultProps = {}

export default PostPage
