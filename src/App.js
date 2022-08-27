import UploadPost from "./components/organisms/Upload";
import Onboarding from "./components/pages/Onboarding";
import Posts from "./components/pages/Posts";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/upload" element={<UploadPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
