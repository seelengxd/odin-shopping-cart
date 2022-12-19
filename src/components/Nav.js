import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import shoppingCart from "../assets/cart.svg";

function Nav() {
  const cart = useSelector((state) => state.cart.cart);
  const itemCount = cart.reduce((prev, item) => (prev += item.quantity), 0);
  return (
    <nav>
      <Link to="/">
        <h1>Shopping Cart</h1>
      </Link>
      <Link to="/shop">Shop</Link>
      <button>
        <img src={shoppingCart} /> {itemCount}
      </button>
    </nav>
  );
}

export default Nav;
