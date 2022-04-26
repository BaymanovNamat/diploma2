import Header from "../components/Header/Header";
import headerImage from "../assets/product.jpg";
import ProductList from "../components/ProductList/ProductList";
import productImage from "../assets/product1.jpg";


function Product(props) {
  const products = {
    hazelNut: {
      image: productImage,
      price: "10",
      title: "HazelNut",
      path: "/",
    },
    darkRoast: {
      image: productImage,
      price: "12",
      title: "DarkRoast",
      path: "/",
    },
    lightRoast: {
      image: productImage,
      price: "15",
      title: "LightRoast",
      path: "/",
    },
    yellowRoast: {
      image: productImage,
      price: "18",
      title: "yellowRoast",
      path: "/",
    },
  };


  return (
    <>
      <Header title={"We have good quality products!"} image={headerImage}>
        The peaberry occurs only between 10% and 15% of the time, and it is a fairly common (yet scientifically unproven) belief that they have more flavour than normal coffee beans.[3] Like Brazil nuts (a seed) and white rice, coffee beans consist mostly of endosperm.
      </Header>

      <ProductList products={products}/>
    </>
  );
};


export default Product;