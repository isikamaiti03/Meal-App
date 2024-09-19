import React, { useEffect, useState } from 'react'
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Meal.css'
const Meal = () => {
    const [mealdb,setMealdb]=useState([]);
    const [changeMeal,setChangeMeal]=useState("Indian");
    const [searchMeal,setSearchMeal]=useState('');
    useEffect(()=>{
        getAllMeal();
    },[changeMeal])
    const getAllMeal=async()=>{
        const meailAPI=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${changeMeal}`);
        const data=await meailAPI.json();
        console.log(data.meals);
        setMealdb(data.meals);
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const api=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`);
        const data= await api.json();
        if(data?.meals){
        console.log("Searched Data: ",data.meals);
        toast.success("Your Meal will Come after few seconds...");
        setTimeout(() => {
            setMealdb(data.meals);
        }, 6000);
        }
        else{
            alert("Sorry Meal not Found :(");
        }
    }
  return (
    <>
        <div className='mx-auto text-center my-3'>
          <button type="button" onClick={()=>setChangeMeal("indian")} className="btn btn-outline-primary mx-3">Indian</button>
          <button type="button" onClick={()=>setChangeMeal("canadian")} className="btn btn-outline-warning mx-3">Canadian</button>
          <button type="button" onClick={()=>setChangeMeal("american")} className="btn btn-outline-light mx-3">American</button>
          <button type="button" onClick={()=>setChangeMeal("thai")} className="btn btn-outline-info mx-3">Thai</button>
          <button type="button" onClick={()=>setChangeMeal("british")} className="btn btn-outline-warning mx-3">British</button>
          <button type="button" onClick={()=>setChangeMeal("russian")} className="btn btn-outline-info mx-3">Russian</button>
        </div>
        <form className='mx-auto text-center my-3' onSubmit={handleSubmit}>
            <input type='text' onChange={(e)=>setSearchMeal(e.target.value)} placeholder='Search Your Meals...'/>
        </form>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}}>
            {
                mealdb.map((item)=>
                <div key={item.idMeal} style={{textAlign:"center"}}>
                    <div>
                        <img src={item.strMealThumb} alt="images" 
                        style={{width:"250px",margin:"20px",border:"1px solid blue",borderRadius:"10px"}}/>
                    </div>
                    <h5>{item.strMeal}</h5>
                </div>
                )
            }
        </div>
        <ToastContainer/>
    </>
  )
}

export default Meal
