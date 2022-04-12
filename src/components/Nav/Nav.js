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
        <Navitem url="/" >
        Categories
        </Navitem>
        <Navitem url="/">
        About
        </Navitem>
        <Navitem url="/">
        Products
        </Navitem>
        <Navitem url="/">
        Contacts
        </Navitem>
        <Navitem url="/">
        Interesting facts
        </Navitem>


      </ul>
    </nav>
  );
}

export default Nav;