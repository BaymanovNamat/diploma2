import Header from "../components/Header/Header";
import headerImage from "../assets/product.jpg";
import ProductList from "../components/ProductList/ProductList";
import { getProducts } from "../data/Products";



function Product(props) {
  


  return (
    <>
      <Header title={"We have good quality products!"} image={headerImage} coverImage={headerImage}>
        The peaberry occurs only between 10% and 15% of the time, and it is a fairly common (yet scientifically unproven) belief that they have more flavour than normal coffee beans.[3] Like Brazil nuts (a seed) and white rice, coffee beans consist mostly of endosperm.
      </Header>

      <ProductList products={getProducts()}/>

    </>
  );
};


export default Product;