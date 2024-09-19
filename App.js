
import React from "react";
import { Routes, Route} from "react-router-dom";
import Meal from "./MEAL FOLDER/Meal";

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Meal/>}/>
    </Routes>
   </> 
  );
};

export default App;
