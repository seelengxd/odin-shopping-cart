import ItemCard from "./ItemCard";
import redShirt from "../assets/red.png";
import yellowShirt from "../assets/yellow.png";
import greenShirt from "../assets/green.png";

function Shop() {
  const cart = [
    {
      id: 1,
      name: "red shirt",
      price: 1.0,
      quantity: 0,
      src: redShirt,
    },
    {
      id: 2,
      name: "yellow shirt",
      price: 1.0,
      quantity: 0,
      src: yellowShirt,
    },
    {
      id: 3,
      name: "green shirt",
      price: 1.0,
      quantity: 0,
      src: greenShirt,
    },
  ];
  return (
    <div>
      <div class="container">
        {cart.map((item) => (
          <ItemCard item={item} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
