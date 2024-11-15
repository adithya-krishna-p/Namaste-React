import React, { useEffect, useState } from 'react';
import ResCard from './ResCard';
import './Body.css';
import Shimmer from './shimmer';

const Body = () => {
  // Local State Variable - super powerful variable
  const [ListofRestaurants, setListofRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=12.918574555887991&lng=77.61739198118448"
    );

    const json = await data.json();
    console.log("json");
    console.log(json);
    console.log("result")
    console.log(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
    setListofRestaurant(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);

  }

  // shimmer ui
  //condintional rendering
  // if(ListofRestaurants.length===0) {
  //   return <Shimmer />
  // }



  return ListofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className='body'>
      <div className='filter'>
        <div className='search'>
          <input className='search-box' type='text' value={searchText} onChange={(e) => { setSearchText(e.target.value) }}></input>
          <button onClick={
            () => {
              // filter the restuarent cards and update the UI
              // searchText
              const filteredRestuarant = ListofRestaurants.filter((res) => res.data.name.toLowerCase().includes(searchText.toLowerCase()));
              setListofRestaurant(filteredRestuarant);
            }
          }>Search</button>
        </div>
        <button className='filter-btn'
          onClick={() => {
            // filter logic here
            const filteredList = ListofRestaurants.filter((res) => res.data.avgRating > 4);
            console.log(ListofRestaurants);
            setListofRestaurant(filteredList);
          }} >

          Top-Rated-Restaurant
        </button>
      </div>


      <div className='resto-container'>
        {/* map function */}
        {
          ListofRestaurants.map((restaurant) => (
            <ResCard key={restaurant.info.id} resData={restaurant.info} />
          ))
        }

      </div>

    </div>
  )
}

export default Body;