import "./Navitem.css";


function Navitem(props) {
  const classNames = [];
  if (props.active) {
    classNames.push("active");
  }

  return (
    <li className="Navitem">
      <a href={props.url} className={classNames.join(" ")}>
        {props.children}
      </a>
    </li>
  );
};


export default Navitem;