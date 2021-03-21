import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import BottomBtn from 'comps/Buttons/BottomBtn'
import CustomInputs from 'comps/CustomInputs'
import Inputs from 'comps/Inputs'
import BasicBtn from 'comps/Buttons/BasicBtn'

const App = styled.div`
  width: 100%;
  height: 400px;
  background-color: #9999;
  backdrop-filter: blur(15px);
  border-radius: 40px 40px 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0 0;
  position: fixed;
  bottom: 0;
`
const InputCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  & > div {
    margin: 15px 0;
  }
`
const UploadForm = ({ tips, BtnText, onButton, onUpload }) => {
  const [job, setJob] = useState('job')
  const [tip, setTip] = useState('tip')
  const [photo, setPhoto] = useState('photo')

  return (
    <App>
      <InputCont>
        <Inputs
          type='text'
          placeholder='Your job?'
          onChange={(e) => {
            setJob(e.target.value)
          }}
        />
        <Inputs
          type='text'
          placeholder='Share your tips here'
          height='80px'
          onChange={(e) => {
            setTip(e.target.value)
          }}
        />
        <CustomInputs
          type='file'
          onChange={(e) => {
            setPhoto(e.target.value)
          }}
        />
        {/* <BasicBtn text="Preview" onClick={() => {
          onUpload()}}/> */}
      </InputCont>
      <BottomBtn
        BtnText='Upload'
        onClick={() => {
          onButton(job, tip, photo)
        }}
      />
    </App>
  )
}

UploadForm.defaultProps = {
  tips: null,
  text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  onButton: () => {},
}

export default UploadForm
