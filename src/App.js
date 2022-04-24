import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Product from "./pages/Product";

function App() {
  return (
    <div className="App">
      



      <Layout>
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="product" element={<Product />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Layout>




      
    </div>
  );
}

export default App;
