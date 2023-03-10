import "./App.css";
import Nav from "./components/Nav";
import Shop from "./components/Shop";
import Home from "./components/Home";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { HashRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </HashRouter>
      <Sidebar />
    </Provider>
  );
}

export default App;
