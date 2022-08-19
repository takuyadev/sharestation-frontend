import TabBtn from "../atoms/TabBtn";

function Tabs() {
  return (
    <nav className="mb-6 flex justify-center gap-16">
      <TabBtn active={true}>Signup</TabBtn>
      <TabBtn>Login</TabBtn>
    </nav>
  );
}

export default Tabs;
