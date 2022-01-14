import React from "react";

// core components
import Banner from "../banner/Banner";

// sections for this page
import HeaderComponent from "./sections/headercomponent";
import C2acomponent from "./sections/c2acomponent";

const CustomComponents = () => {
  return (
    <div>
      <Banner />
      <HeaderComponent />
      <C2acomponent />
      
    </div>
  );
};

export default CustomComponents;
