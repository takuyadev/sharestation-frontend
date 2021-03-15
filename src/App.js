import FeedPage from 'pages/FeedPage';
import MainPage from './pages/MainPage';
import './App.scss';
import SignupForm from 'comps/SignupForm';
import FormComp from 'comps/FormComp';
import PostPage from 'pages/PostPage';

function App() {
  return (
    <div className="App">
      {/* <MainPage/> */}
      <FeedPage/>
      {/* <PostPage/> */}
    </div>
  );
}

export default App;
