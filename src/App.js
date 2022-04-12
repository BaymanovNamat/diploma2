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

      <Home/>
      <Categories/>
      <About/>
      <Product/>
      <Contacts/>
      <Interesting/>
      
      <Footer/>
    </div>
  );
}

export default App;
