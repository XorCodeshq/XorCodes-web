import React from "react";

export default function NavBar() {
  return <div>
   {/* navbar */}

   <nav className="navbar">
    <h1>XorCodes</h1>

    <div className="navlinks">
      <li className="navlink"><a href="#">Discover</a></li>
      <li className="navlink"><a href="#">Portfolio</a></li>
      <li className="navlink"><a href="#">Team</a></li>
      <li className="navlink"><a href="#">Careers</a></li>
      <div id="contact">
      <li className="navlink"><a href="#">Contact us</a></li>
      </div>
     

    </div>
   </nav>

  </div>;
}
