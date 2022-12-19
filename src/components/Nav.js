import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">
        <h1>Shopping Cart</h1>
      </Link>
      <Link to="/shop">Shop</Link>
      <button>Placeholder</button>
    </nav>
  );
}

export default Nav;
