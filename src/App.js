import "./index.css";
import Checkout from "./Component/Checkout/Checkout";
import Form from "./Component/Form/Form";
import Navbar from "./Component/Navbar/Navbar";
import Products from "./Component/Products/Products";
import Footer from "./Component/Footer/Footer";
import Gallery from "./Component/Gallery/Gallery";
import CardInfo from "./Component/Card/CardInfo";


function App() {
  return (
    <div>
      <Navbar />
      <br />
      <div>
        <Gallery />
      </div>
      <br />
      <div>
        <Products />
      </div>
      <div>
        <Form />
      </div>
      <div>
        <Checkout />
      </div>
      <div>
        <CardInfo />
      </div>
      <Footer />
    </div>
  );
}

export default App;
