import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import About from "./pages/About";
import Categories from "./pages/Categories";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Interesting from "./pages/Interesting";
import Product from "./pages/Product";

function App() {
  return (
    <div className="App">
      <Nav/>

      <Header/>

      


      <Routes>

        <Route path="/" element={<Home/>}/>

        <Route path="product" element={<Product/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/interesting" element={<Interesting/>}/>

      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
