import { useDispatch, useSelector } from "react-redux";
import { modify, hideSidebar } from "../redux/cartSlice";
import CartCard from "./CartCard";

function Sidebar() {
  const dispatch = useDispatch();
  const { cart, showSidebar, sidebarEverShown } = useSelector(
    (state) => state.cart
  );
  const selected = cart.filter((item) => item.quantity > 0);
  return (
    sidebarEverShown && (
      <>
        <div id="sidebar" className={showSidebar ? "" : "hidden"}>
          <h1> Your cart </h1>
          {selected.length ? (
            selected.map((item) => (
              <CartCard
                item={item}
                handleIncrease={() =>
                  dispatch(modify({ id: item.id, change: 1 }))
                }
                handleDecrease={() =>
                  dispatch(modify({ id: item.id, change: -1 }))
                }
              />
            ))
          ) : (
            <h1>You have nothing in your cart!</h1>
          )}
          <h3>
            Total: $
            {cart
              .reduce(
                (prev, currItem) => prev + currItem.quantity * currItem.price,
                0
              )
              .toFixed(2)}
          </h3>
        </div>
        <div
          class={"black" + (showSidebar ? "" : " hidden")}
          onClick={() => dispatch(hideSidebar())}
        ></div>
      </>
    )
  );
}

export default Sidebar;
