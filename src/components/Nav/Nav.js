import Logo from "../ui/Logo/Logo";
import "./Nav.css";
import Navitem from "./Navitem/Navitem";


function Nav() {
  return (
    <nav className="Nav">
      <Logo/>

      <ul>
        <Navitem url="/" active>
          Home
        </Navitem>
        <Navitem url="/categories" >
        Categories
        </Navitem>
        <Navitem url="/about">
        About
        </Navitem>
        <Navitem url="/product">
        Products
        </Navitem>
        <Navitem url="/contacts">
        Contacts
        </Navitem>
        <Navitem url="/interesting">
        Interesting facts
        </Navitem>


      </ul>
    </nav>
  );
}

export default Nav;