import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import shoppingCart from "../assets/cart.svg";
import { unhideSidebar } from "../redux/cartSlice";

function Nav() {
  const cart = useSelector((state) => state.cart.cart);
  const itemCount = cart.reduce((prev, item) => (prev += item.quantity), 0);
  const dispatch = useDispatch();
  return (
    <nav>
      <Link to="/">
        <h1>Shopping Cart</h1>
      </Link>
      <Link to="/shop">Shop</Link>
      <button onClick={() => dispatch(unhideSidebar())}>
        <img src={shoppingCart} alt="shopping cart" /> {itemCount}
      </button>
    </nav>
  );
}

export default Nav;
