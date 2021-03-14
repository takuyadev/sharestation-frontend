import Avatar from 'comps/Avatar'
import DropdownBtn from 'comps/Buttons/DropdownBtn'
import React from 'react'
import styled from 'styled-components'

const App = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
`
const Container = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 40px 40px 0px 0px;
  box-shadow: 0px 4px 54.3656px rgba(0, 0, 0, 0.4);
  padding-top: 5px;
`
const BtnCont = styled.div`
  margin: auto;
`
const MarginCont = styled.div`
  margin: 30px;
  width: 80%;
  /* background-color:#dad; */
`

const AvatarCont = styled.div`
  display: flex;
  align-items: center;
  /* width: 80%; */
  justify-content: space-between;
`

const IdCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 45px;
  /* background-color:#dad; */
`
const Id = styled.div`
  font-size: 17px;
`

const Liked = styled.div`
  font-size: 12px;
  color: #616161;
`
const TextCont = styled.div`
  font-size: 14px;
  margin-top: 30px;
`

const TipsForm = ({ id, liked, text }) => {
  return (
    <App>
      <BtnCont>
        <DropdownBtn icon='icons/icon7.png' />
      </BtnCont>
      <Container>
        <MarginCont>
          <AvatarCont>
            <IdCont>
              <Id>{id}</Id>
              <Liked>{liked}</Liked>
            </IdCont>
            <Avatar />
          </AvatarCont>

          <TextCont>{text}</TextCont>
        </MarginCont>
      </Container>
    </App>
  )
}

TipsForm.defaultProps = {
  id: 'Rinahan4146',
  liked: '1.4 liked',
  text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  onClick: () => {},
}

export default TipsForm
