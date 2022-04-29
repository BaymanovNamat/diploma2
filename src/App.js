import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">
      



      <Layout>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="products" element={<Product />} />
          <Route path="/products/:productId" element={<Products/>}/>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>




      
    </div>
  );
}

export default App;
