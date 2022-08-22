import PostButtons from "./components/molecules/PostButtons";
import Post from "./components/organisms/Post";
import Page from "./components/templates/PageTemplate";
import Upload from "./components/organisms/Upload";

function App() {
  return (
    <Page className="flex h-screen gap-2 bg-hero bg-cover bg-center">
      <Upload></Upload>
    </Page>
  );
}

export default App;
