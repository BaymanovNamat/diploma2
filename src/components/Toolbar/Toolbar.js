import Nav from "../Nav/Nav";
import NavToggle from "../Nav/NavToggle/NavToggle";
import Logo from "../ui/Logo/Logo";
import classes from "./Toolbar.module.css";


function Toolbar({toggle2}) {
  return ( 
    <>
      <div className={classes.Toolbar}>
        <div className={classes.container}>
          <Logo/>
          <Nav/>
          <NavToggle callback={toggle2}/>
        </div>
      </div>
    </>
  );
}

export default Toolbar;