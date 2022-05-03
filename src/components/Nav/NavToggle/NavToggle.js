// import { useState } from "react";

import classes from "./NavToggle.module.css";


function NavToggle(props) {


  // const [buttonToggle, setButtonToggle] = useState();

  // function getToggle(event) {
  //   if (event.target) {

  //   }
  // };

  return ( 
    <div className={classes.NavToggle} >
      <div className={classes.burger}>
        <div className={props.className.toggle}>
          
        </div>
      </div>
    </div>
  );
}

export default NavToggle;