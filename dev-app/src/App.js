import React from "react";
import CustomHook from "./Sanbox/CustomHook";
import FilterDataHook from "./Sanbox/FilterDataHook";
import Navigation from "./components/Layouts/Navigation";

const App = () => {

  
  return (
    <>
      <Navigation/>
      {/* <CustomHook/> */}
      <FilterDataHook/>
    </>
  );
};

export default App;
