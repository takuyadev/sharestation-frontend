import React from 'react'
import styled from 'styled-components'

const AvatarCont = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 30px;
  border: none;
  object-fit: cover;
`

const Avatar = ({ icon, onClick }) => {
  return (
    <AvatarCont
      src='images/img5.jpg'
      //   onClick={() => {
      //     onClick()
      //   }}
    ></AvatarCont>
  )
}

Avatar.defaultProps = {
  onClick: () => {},
}

export default Avatar
