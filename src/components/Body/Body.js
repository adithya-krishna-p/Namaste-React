import React, { useEffect, useState } from 'react'
import ResCard from './ResCard'
import './Body.css'
import Shimmer from './shimmer';



const Body = () => {
   // Local State Variable - super powerful variable
  const [ListofRestaurants, setListofRestaurant] = useState([]);

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async () => {
     const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=12.918574555887991&lng=77.61739198118448"
     );

     const json = await data.json();
     console.log(json);
     // optional chaining
     setListofRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }

  // shimmer ui
  //condintional rendering
  // if(ListofRestaurants.length===0) {
  //   return <Shimmer />
  // }


  
  return (
    <div className='body'>
      <div className='filter'>
      <div className='search'>
        <input className='search' type='text'></input>
        <button onClick={
          ()=> {
            // filter the restuarent cards and update the UI
            // searchText
            
          }
        }>Search</button>
      </div>
      <button className='filter-btn' 
       onClick={() => {
        // filter logic here
       const filteredList = ListofRestaurants.filter((res) => res.data.avgRating > 4 );
        console.log(ListofRestaurants);
        setListofRestaurant(filteredList);
      }} >

        Top-Rated-Restaurant
      </button>
      </div>

      <div className='resto-container'>
       {/* map function */}
        {
          ListofRestaurants.map((restaurant)=> (
            <ResCard key={restaurant.data.id} resData={restaurant}  />
          ))
        }

      </div>
    </div>
  )
}

export default Body;