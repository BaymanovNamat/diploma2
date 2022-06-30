// import { useState } from "react";
import Navitem from "./Navitem/Navitem";
// import NavToggle from "./NavToggle/NavToggle";
import classes from "./Nav.module.css";

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
    <ul className={classes.Nav}>
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
  );
}

export default Nav;