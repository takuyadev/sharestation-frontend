import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import SmallBtn from 'comps/Buttons/SmallBtn'
import Header from 'comps/Header'
import PostTipsForm from 'comps/PostTipsForm'
import PostImgForm from 'comps/PostImgForm'

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
const ImgCont = styled.div`
  display: flex;
  justify-content: center;
`
const CustomerPhoto = styled.img`
  width: 50%;
  height: auto;
  object-fit: cover;
`
const HeaderCont = styled.div`
  padding: 30px 0;
  margin:0 auto 0 ;
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

  useEffect(() => {
    setExpanded(expand)
  }, [expand])

  return (
    <Container>
      <BtnCont>
        <SmallBtn icon='icons/icon9.png' />
      </BtnCont>

      <HeaderCont>
        <PhotoHead expanded={expanded}>
          <Header
            title='Photos'
            state='Select photo describing your work station best'
          />
        </PhotoHead>
        <TipsHead expanded={expanded}>
        <Header
          title='Tips'
          state='Add tips to your selected photo'
        />
        </TipsHead>
      </HeaderCont>

      <ImgCont>
        <CustomerPhoto src='images/img3.png' />
      </ImgCont>
      <PIFCont expanded={expanded}>
        <PostImgForm
          onBtnClick={() => {
            setExpanded(!expanded)
          }}
        />
      </PIFCont>
      <PTFCont expanded={expanded}>
        <PostTipsForm tips='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' />
      </PTFCont>
    </Container>
  )
}

PostPage.defaultProps = {}

export default PostPage
