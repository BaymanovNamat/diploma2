import { useState } from "react";
import Drawer from "../Drawer/Drawer";
import Footer from "../Footer/Footer";
// import Nav from "../Nav/Nav";
import Toolbar from "../Toolbar/Toolbar";

function Layout({children}) {
  const [toggleDrawer, setToggleDrawer] = useState(true);

  function onToggle() {
    setToggleDrawer(!toggleDrawer);
  };
  
  return ( 
    <main className="Layout">
      <Toolbar toggle2={onToggle}/>
      <Drawer open={toggleDrawer} toggle={onToggle} />
      <div className="container">
        {children}
      </div>
      

      <Footer />
    </main>
  );
}

export default Layout;