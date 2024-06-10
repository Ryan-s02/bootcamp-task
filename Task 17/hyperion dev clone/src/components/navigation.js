import Hamburger from "./hamburger.js";
import './navigation.css';

//thought it was possibly something outside the scope of the task and play to implement using the hamburger menu in the future
function Navigation() {
  return (
    <div className="navigation">
      <ul>
        <li>All courses</li>
        <li>Courses</li>
        <li>Pricing</li>
        <li>Our method</li>
        <li>For partners</li>
        <li>Login</li>
        <li>Contact us</li>
      </ul>
      <div className="hamburger">
        <Hamburger/>
      </div>
    </div>
  );
}

export default Navigation;
