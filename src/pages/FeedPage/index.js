import React, { useState } from 'react'
import styled from 'styled-components'
import AppBackImage from 'comps/AppBackImage'
import TipsForm from 'comps/TipsForm'
import SmallBtn from 'comps/Buttons/SmallBtn'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Container = styled.div`
  width: 100%;
  height: 896px;
  display: flex;
  flex-direction: column;
  /* background-image:url(images/img2.png);
  background-size:cover;
  z-index: 1; */
  background-color:#111;
`
const BtnCont = styled.div`
  margin: 40px 0 0 20px;
  opacity: 0.5;
  :hover {
    opacity: 1;
  }
`

const FeedPage = ({}) => {
  const [img, setImg] = useState(null)
  const [desc, setDesc] = useState(null)

  const HandleClick = async () => {
    console.log('btnClied')
    // var resp = await axios.get('https://sharestation.herokuapp.com/api/posts')
    //console.log(resp, "img", resp.data.Photo_url, "desc", resp.data.description)

    var resp = await axios.get('https://dog.ceo/api/breeds/image/random')
    console.log(resp, 'img', resp.data.message, 'desc', resp.data.status)
    setImg(resp.data.message)
    setDesc(resp.data.message)
  }

  return (
    <Container>
      <AppBackImage src={img} />

      <Link to='/MainPage'>
        <BtnCont>
          <SmallBtn icon='icons/icon8.png' />
        </BtnCont>
      </Link>

      <TipsForm onChange={HandleClick} text={desc}/>
    </Container>
  )
}

FeedPage.defaultProps = {}

export default FeedPage
