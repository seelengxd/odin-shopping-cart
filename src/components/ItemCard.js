import { useDispatch } from "react-redux";
import { modify } from "../redux/cartSlice";

function ItemCard({ item }) {
  const dispatch = useDispatch();
  return (
    <div className="item-card">
      <p>
        {item.name} (${item.price})
      </p>
      <img src={item.src} />
      <button onClick={() => dispatch(modify({ id: item.id, change: 1 }))}>
        +
      </button>
    </div>
  );
}

export default ItemCard;
