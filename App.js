
import React from "react";
import { Routes, Route} from "react-router-dom";
// import './App.css';
// import Practice from "./WeeKPractice/Practice";
// import FormData from "./WeeKPractice/FormData";
// import DataForm from "./WeeKPractice/DataForm";
import Meal from "./WeeKPractice/MEAL FOLDER/Meal";

const App = () => {
 
  return (
    <>
    
    <Routes>
      {/* <Route path="/" element={<Practice/>} />
      <Route path="/form" element={<FormData/>}/>
      <Route path="/form1" element={<DataForm/>}/> */}
      <Route path="/" element={<Meal/>}/>
    </Routes>
   </> 
  );
};

export default App;
