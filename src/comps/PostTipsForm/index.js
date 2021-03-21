import BottomBtn from 'comps/Buttons/BottomBtn'
import Message from 'comps/Message'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const App = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 40px 40px 0px 0px;
  box-shadow: 0px 4px 54.3656px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
`
const PostCont = styled.div`
  margin: 20px auto 20px;
  width: 80%;
`
const PostTipsForm = ({ tips, BtnText }) => {
  return (
    <App>
      <PostCont>{tips}</PostCont>
      <Message/>
      <BottomBtn BtnText='Upload' />
    </App>
  )
}

PostTipsForm.defaultProps = {
  tips: null,
  text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  onExpand: () => {},
}

export default PostTipsForm
