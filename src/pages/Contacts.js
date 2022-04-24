import Header from "../components/Header/Header";
import headerImage from "../assets/contact.jpg";
function Contacts(props) {
  return (
    <>
      <Header title={"Pick your favorite coffee!"} image={headerImage}>
        The fruits; cherries or berries, most commonly contain two stones with their flat sides together. A small percentage of cherries contain a single seed, instead of the usual two. This is called a "peaberry".
      </Header>
    </>
  );
};


export default Contacts;