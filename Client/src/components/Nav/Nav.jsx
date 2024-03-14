import React from "react";
import "./Nav.css";
import SortAndFilter from "../SortAndFilter/SortAndFilter";
import { sortArr } from "../../constants/data";
import NavigationButtons from "../NavigationButtons/NavigationButtons";

const Nav = () => {


  return (
    <nav className="product-filter">
      <h1>Code It Simple SHOP</h1>
      <NavigationButtons/>
      <div className="sort">
        <SortAndFilter title={"Filter By"} />
        {/* <SortAndFilter title={"Sort By"}/> */}
      </div>
    </nav>
  );
};

export default Nav;
