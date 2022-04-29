import Header from "../components/Header/Header";
import headerImage from "../assets/product2.jpg";


function NotFound() {
  return ( 
    <>
      <Header title="Page is not found" image={headerImage}>
        Maybe page you are looking for was moved or deleted!
      </Header>
    </>
  );
}

export default NotFound;