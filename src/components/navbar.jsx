import React from "react";

function Navbar(props) {
  return (
    <>
      <div>
        <i className="fa-brands fa-youtube"></i>
        <span>HoTube</span>
      </div>
      <form action="">
        <input type="text" placeholder="Search" />
        <div>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </form>
      <div>
        <i className="fa-solid fa-bell"></i>
        <span>Ho</span>
      </div>
    </>
  );
}

export default Navbar;
