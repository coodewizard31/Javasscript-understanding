/*
 top navigation of the page

*/
/*
import <name> from "<relative path>"
ensure before import its in the src directory
*/
import logo from "./assets/logo.jpg";
import "./index.css";
/* component naming rules.*/
/*null or valid jsx*/
function Navigation() {
  return (
    <div className="Nav">
      <img src={logo} width="50px"/>
      <input placeholder="search"/>
    </div>
  );
}

/*
 export so that any other file can
 import the component.
 1.Default Export:<one major>
*/

export default Navigation;
