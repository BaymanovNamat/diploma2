// import { useState } from "react";
import Logo from "../ui/Logo/Logo";
import classes from"./Nav.module.css";
import Navitem from "./Navitem/Navitem";
import NavToggle from "./NavToggle/NavToggle";
// import NavToggle from "./NavToggle/NavToggle";


function Nav() {

  // const [toggle, setToggle] = useState(false);

  // function onChangeToggle() {
  //   setToggle(!toggle);
  // }

  // <div className={`${classes.toggle} ${toggle ? `${classes.active}` : "" }`} onClick={onChangeToggle}>
  //         <span>
            
  //         </span>
  //       </div>

  // <ul className={`${classes.list} ${toggle ? `${classes.active}` : "" }`}>





  return (
    <nav className={classes.Nav}>
      <div className={classes.container}>

        <div className={classes.logo}>
          <Logo/>
        </div>

        <ul className={classes.list}>
          <Navitem url="/" active>
            Home
          </Navitem>
          <Navitem url="/products">
          Products
          </Navitem>
          <Navitem url="/contacts">
          Contacts
          </Navitem>
        </ul>

        <NavToggle/>


      
      </div>
    </nav>
  );
}

export default Nav;