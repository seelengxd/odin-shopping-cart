function CartCard({ item, handleIncrease, handleDecrease }) {
  return (
    <div className="cart-card">
      <img src={item.src} alt={item.name} />
      <p className="item-name">{item.name}</p>
      <p className="item-total">${(item.price * item.quantity).toFixed(2)}</p>
      <button className="item-plus" onClick={handleIncrease}>
        +
      </button>
      <p className="item-quantity">{item.quantity}</p>
      <button className="item-minus" onClick={handleDecrease}>
        -
      </button>
    </div>
  );
}

export default CartCard;
