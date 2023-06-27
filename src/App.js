import "./App.css";
import Checkout from "./Component/Checkout/Checkout";
import Form from "./Component/Form/Form";
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
        <Form />
      </div>
      <div className="checkoutDiv">
        <Checkout />
      </div>
    </div>
  );
}

export default App;
