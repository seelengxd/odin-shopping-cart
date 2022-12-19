import ItemCard from "./ItemCard";
import { useDispatch, useSelector } from "react-redux";

function Shop() {
  const cart = useSelector((state) => state.cart.cart);
  return (
    <div>
      <div className="container">
        {cart.map((item) => (
          <ItemCard item={item} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
