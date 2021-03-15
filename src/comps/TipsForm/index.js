import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Avatar from 'comps/Avatar'
import DropdownBtn from 'comps/Buttons/DropdownBtn'

const App = styled.div`
  width: 100%;
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
  /* margin: 30px; */
  /* margin:auto; */
  margin: 20px auto 20px;
  width: 80%;
`
const AvatarCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const IdCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 45px;
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
  display: ${(props) => (props.expanded ? 'flex' : 'none')};
  /* ${(props) => props.display && 'display:' + props.display + ';'} */
`

const TipsForm = ({ id, liked, text, icon, name, expand }) => {

  const[expanded, setExpanded] = useState(false)

  useEffect(() => {
    setExpanded(expand)
  }, [expand])

  return (
    <App 
    // onClick={()=>{onExpand(name)}}
    onClick={()=>{setExpanded(!expanded)}}
    >
      <BtnCont>
        <DropdownBtn icon={icon} />
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
          <TextCont expanded={expanded}>{text}</TextCont>
        </MarginCont>
      </Container>
    </App>
  )
}

TipsForm.defaultProps = {
  id: 'Rinahan4146',
  liked: '1.4 liked',
  icon: 'icons/icon6.png',
  text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    onExpand: () => {},
}

export default TipsForm
