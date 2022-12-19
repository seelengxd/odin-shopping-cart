import { useDispatch } from "react-redux";
import { modify } from "../redux/cartSlice";

function ItemCard({ item }) {
  const dispatch = useDispatch();
  return (
    <div class="item-card">
      <p>{item.name}</p>
      <img src={item.src} />
      <button onClick={() => dispatch(modify({ id: item.id, change: 1 }))}>
        +
      </button>
    </div>
  );
}

export default ItemCard;
