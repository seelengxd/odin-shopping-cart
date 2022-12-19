function ItemCard({ item }) {
  return (
    <div class="item-card">
      <p>{item.name}</p>
      <img src={item.src} />
      <button>+</button>
      {/* {item.quantity} */}
    </div>
  );
}

export default ItemCard;
