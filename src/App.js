import UploadPage from "./components/pages/UploadPage";
import OnboardingPage from "./components/pages/OnboardingPage";
import PostsPage from "./components/pages/PostsPage";
import LoginPage from "./components/pages/LoginPage";
import SignupPage from "./components/pages/SignupPage";
import { Routes, Route } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
        console.log("Logged in.");
      } else {
        setUser(null)
        console.log("Not logged in.");
      }
    });
    return unsubscribe;
  },[user]);

  return (
    <Routes>
      <Route path="/" element={<OnboardingPage  user={user}/>} />
      <Route path="/posts" element={<PostsPage user={user}/>} />
      <Route path="/upload" element={<UploadPage  user={user}/>} />
      <Route path="/login" element={<LoginPage user={user}/>} />
      <Route path="/signup" element={<SignupPage  user={user}/>} />
    </Routes>
  );
}

export default App;
