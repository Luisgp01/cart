import "./App.css";
import Checkout from "./Component/Checkout/Checkout";
import Navbar from "./Component/Navbar/Navbar";
import Products from "./Component/Products/Products";


function App() {
  return (
    <div>
      <Navbar />
      <br />
      <div>
        <Products />
      </div>
      <br />
      <div>
        <Checkout />
      </div>
    </div>
  );
}

export default App;
