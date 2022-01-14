import React from "react";

// core components
import Banner from "../banner/Banner";
import FooterComponent from "./sections/FooterComponent";

// sections for this page
import HeaderComponent from "./sections/headercomponent";

const CustomComponents = () => {
  return (
    <div>
      <Banner />
      <HeaderComponent />
      <FooterComponent/>
    </div>
  );
};

export default CustomComponents;
