// import { useState } from "react";

import classes from "./NavToggle.module.css";


function NavToggle({callback}) {


  // const [buttonToggle, setButtonToggle] = useState();

  // function getToggle(event) {
  //   if (event.target) {

  //   }
  // };


  // <div className={classes.NavToggle} >
  //     <div className={classes.burger}>
  //       <div className={props.className.toggle}>
          
  //       </div>
  //     </div>
  //   </div>

  return ( 
      <button className={classes.NavToggle} onClick={callback}>
        &nbsp;
      </button>
  );
}

export default NavToggle;