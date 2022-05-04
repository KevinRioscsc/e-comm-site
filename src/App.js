import RoutesComponent from "./routes";
import ProductInfo from "./Context/ProductContext";

function App() {
  return (
    <>
      <ProductInfo>
        <RoutesComponent />
      </ProductInfo>
    </>
  );
}

export default App;
