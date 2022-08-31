import TabBtn from "../atoms/TabBtn";
import { Link } from "react-router-dom";

function Tabs({ active }) {
  return (
    <nav className="mb- flex justify-center gap-16">
      <Link to="/signup">
        <TabBtn active={active ? true : false}>Signup</TabBtn>
      </Link>
      <Link to="/login">
        <TabBtn active={!active ? true : false}>Login</TabBtn>
      </Link>
    </nav>
  );
}

Tabs.defaultProps = {
  active: false
};

export default Tabs;
