import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../redux/cartSlice";

function Sidebar() {
  const dispatch = useDispatch();
  const showSidebar = useSelector((state) => state.cart.showSidebar);
  return (
    <div
      id="sidebar"
      onClick={() => dispatch(toggleSidebar())}
      className={showSidebar ? "" : "hidden"}
    ></div>
  );
}

export default Sidebar;
