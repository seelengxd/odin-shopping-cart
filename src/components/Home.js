import rightArrow from "../assets/arrow-right.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div id="home">
      <h1>
        This is <span>definitely</span> a real shop.
      </h1>
      <Link to="/shop">
        <button>
          go to shop <img src={rightArrow} alt="right-arrow" />
        </button>
      </Link>
    </div>
  );
}

export default Home;
