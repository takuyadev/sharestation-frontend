// import BottomBtn from 'comps/Buttons/BottomBtn'
// import React, { useState, useEffect } from 'react'
// import styled from 'styled-components'

// const App = styled.div`
//   width: 100%;
//   background-color: #fff;
//   border-radius: 40px 40px 0px 0px;
//   box-shadow: 0px 4px 54.3656px rgba(0, 0, 0, 0.4);
//   display: flex;
//   flex-direction: column;
//   position: fixed;
//   bottom: 0;
//   padding: 30px 0 0;
// `
// const ImgCont = styled.div`
//   display: flex;
// `
// const PostCont = styled.img`
//   /* margin: 20px auto 20px; */
//   /* justify-content: cover; */
//   /* display:flex; */
//   /* margin:50px 0 0; */
//   /* flex:1; */
//   width: 33.3%;
//   height: 150px;
//   background-size: cover;
//   background-color: #dad;
// `
// const PostImgForm = ({ img, onBtnClick }) => {
//   return (
//     <App>
//       <ImgCont>
//         <PostCont src='images/img1.png'></PostCont>
//         <PostCont src='images/img2.png'></PostCont>
//         <PostCont src='images/img3.png'></PostCont>
//       </ImgCont>
//       <ImgCont>
//         <PostCont src='images/img3.png'></PostCont>
//         <PostCont src='images/img1.png'></PostCont>
//         <PostCont src='images/img2.png'></PostCont>
//       </ImgCont>
//       <BottomBtn
//         BtnText='Next'
//         onClick={() => {
//           onBtnClick()
//         }}
//       />
//     </App>
//   )
// }

// PostImgForm.defaultProps = {
//   img: 'icons/icon7.png',
//   text:
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//   onBtnClick: () => {
//     alert('click')
//   },
// }

// export default PostImgForm
